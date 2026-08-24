const categoryLabels = {
  focus: "Fokus",
  continue: "Weiterführen",
  waiting: "Warten & Nachhalten"
};

const taskLabelPalette = [
  "#FFF1C9",
  "#FDECCF",
  "#EAF4D8",
  "#E3F3F1",
  "#E4EEFB",
  "#EFE7FF",
  "#FCE5EE",
  "#FBE8D9",
  "#E7F1DF",
  "#F4E9D7",
  "#E6F0EA",
  "#F5E6D0",
  "#F7E7C7",
  "#E8F3D6",
  "#E2F1E8",
  "#E8EEF9",
  "#F4E3F2",
  "#F9E4D8"
];

const board = document.querySelector("#project-grid");
const emptyState = document.querySelector("#empty-state");
const errorState = document.querySelector("#error-state");
const updatedDate = document.querySelector("#updated-date");
const filterButtons = document.querySelectorAll("[data-filter]");
const stickyHeader = document.querySelector(".page-header__sticky");

let tasks = [];
let projectOrder = [];
let activeFilter = "all";
let projectLabelColors = new Map();

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(date);
}

function isValidTask(task) {
  return typeof task?.text === "string" && categoryLabels[task.category];
}

function normalizeTaskSteps(steps) {
  if (!Array.isArray(steps)) {
    return [];
  }

  return steps
    .map((step) => (typeof step === "string" ? step.trim() : ""))
    .filter(Boolean);
}

function normalizeProjectName(name) {
  return String(name).trim();
}

function hashProjectName(name) {
  let hash = 2166136261;
  for (const character of normalizeProjectName(name).toLowerCase()) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function assignProjectLabelColors(projectList) {
  const orderedProjects = [...projectList].sort((left, right) => {
    const leftHash = hashProjectName(left.name);
    const rightHash = hashProjectName(right.name);
    return leftHash - rightHash || left.name.localeCompare(right.name);
  });

  projectLabelColors = new Map();
  const occupiedSlots = new Set();

  orderedProjects.forEach((project) => {
    const startIndex = hashProjectName(project.name) % taskLabelPalette.length;

    for (let offset = 0; offset < taskLabelPalette.length; offset += 1) {
      const paletteIndex = (startIndex + offset) % taskLabelPalette.length;
      if (occupiedSlots.has(paletteIndex)) continue;

      occupiedSlots.add(paletteIndex);
      projectLabelColors.set(project.name, taskLabelPalette[paletteIndex]);
      return;
    }

    projectLabelColors.set(project.name, taskLabelPalette[startIndex]);
  });
}

function colorForProject(name) {
  return projectLabelColors.get(name) ?? taskLabelPalette[hashProjectName(name) % taskLabelPalette.length];
}

function updateStickyOffsets() {
  if (!stickyHeader) {
    return;
  }

  document.documentElement.style.setProperty(
    "--dashboard-sticky-header-height",
    `${Math.ceil(stickyHeader.getBoundingClientRect().height)}px`
  );
}

function createTaskCard(task) {
  const card = document.createElement("article");
  card.className = `task-card task-card--${task.category}`;
  card.style.setProperty("--project-accent", colorForProject(task.projectName));

  const category = document.createElement("span");
  category.className = `task-card__status task-card__status--${task.category}`;
  category.textContent = categoryLabels[task.category];

  const title = document.createElement("p");
  title.className = "task-card__title";
  title.textContent = task.text;

  card.append(category, title);

  if (task.steps.length > 0) {
    const steps = document.createElement("ul");
    steps.className = "task-card__steps";

    task.steps.forEach((step) => {
      const item = document.createElement("li");
      item.className = "task-card__step";
      item.textContent = step;
      steps.append(item);
    });

    card.append(steps);
  }

  return card;
}

function renderBoard() {
  const visibleTasks = activeFilter === "all"
    ? tasks
    : tasks.filter((task) => task.category === activeFilter);

  const tasksByProject = new Map(projectOrder.map((projectName) => [projectName, []]));
  visibleTasks.forEach((task) => {
    const projectTasks = tasksByProject.get(task.projectName);
    if (projectTasks) {
      projectTasks.push(task);
    }
  });

  board.replaceChildren();
  emptyState.hidden = true;

  let renderedSections = 0;

  projectOrder.forEach((projectName) => {
    const projectTasks = tasksByProject.get(projectName) ?? [];
    if (projectTasks.length === 0) {
      return;
    }

    const section = document.createElement("section");
    section.className = "project-section";
    section.setAttribute("aria-label", projectName);

    const header = document.createElement("header");
    header.className = "project-section__header";

    const title = document.createElement("h2");
    title.className = "project-section__title";
    title.textContent = projectName;

    header.append(title);

    const list = document.createElement("div");
    list.className = "project-section__items";

    projectTasks.forEach((task) => {
      list.append(createTaskCard(task));
    });

    section.append(header, list);
    board.append(section);
    renderedSections += 1;
  });

  if (renderedSections === 0) {
    emptyState.hidden = false;
  }
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderBoard();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

function buildTasks(projects) {
  const resolvedTasks = [];
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      resolvedTasks.push({
        text: task.text.trim(),
        category: task.category,
        steps: normalizeTaskSteps(task.steps),
        projectName: project.name
      });
    });
  });

  return resolvedTasks;
}

async function loadDashboard() {
  try {
    const response = await fetch("projects.json");
    if (!response.ok) throw new Error("projects.json could not be loaded");

    const data = await response.json();
    const projects = data.projects.filter((project) =>
      Array.isArray(project.tasks) && project.tasks.some(isValidTask)
    ).map((project) => ({
      ...project,
      tasks: project.tasks.filter(isValidTask)
    }));

    projectOrder = projects.map((project) => project.name);
    assignProjectLabelColors(projects);
    tasks = buildTasks(projects);
    updatedDate.dateTime = data.updated;
    updatedDate.textContent = formatDate(data.updated);
    updateStickyOffsets();
    renderBoard();
  } catch (error) {
    errorState.hidden = false;
    console.error(error);
  }
}

updateStickyOffsets();
if (stickyHeader && "ResizeObserver" in window) {
  const stickyObserver = new ResizeObserver(() => updateStickyOffsets());
  stickyObserver.observe(stickyHeader);
}

window.addEventListener("resize", updateStickyOffsets);
window.addEventListener("load", updateStickyOffsets);
if (document.fonts?.ready) {
  document.fonts.ready.then(updateStickyOffsets).catch(() => {
    // Ignore font loading errors; the initial measurement still applies.
  });
}
loadDashboard();
