const categoryLabels = {
  focus: "Fokus",
  continue: "Weiterführen",
  waiting: "Warten & Nachhalten"
};

const pillarDefinitions = [
  { key: "strategy", title: "AI Strategy & Steering" },
  { key: "enablement", title: "AI Enablement" },
  { key: "creative", title: "AI Creative Operations" }
];

const projectPillarMap = new Map([
  ["AI Strategy & Steering", "strategy"],
  ["AI Enablement Series", "enablement"],
  ["AI Team-Check", "enablement"],
  ["Brand Agent – Tone of Voice", "enablement"],
  ["PR Intelligence Hub", "enablement"],
  ["Content Marketing Agent", "enablement"],
  ["Coupa AI Support", "enablement"],
  ["Contentful Marketing MVP", "creative"],
  ["E-Mail Automation", "creative"],
  ["E-Mail Automation – Plus FOMO", "creative"],
  ["Newsletter Automation", "creative"],
  ["Creative Hub", "creative"],
  ["Landing Page Builder / Design Library", "creative"]
]);

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

let tasks = [];
let activeFilter = "all";
let projectLabelColors = new Map();

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(date);
}

function isValidTask(task) {
  return typeof task?.text === "string" && categoryLabels[task.category];
}

function normalizeProjectName(name) {
  return String(name).trim();
}

function resolveProjectPillar(name) {
  return projectPillarMap.get(normalizeProjectName(name)) ?? null;
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

function createTaskRow(task) {
  const row = document.createElement("article");
  row.className = "task-row";
  row.style.setProperty("--project-accent", colorForProject(task.projectName));

  const title = document.createElement("p");
  title.className = "task-row__title";
  title.textContent = task.text;

  const project = document.createElement("span");
  project.className = "task-row__project";
  project.textContent = task.projectName;

  const category = document.createElement("span");
  category.className = `task-row__status task-row__status--${task.category}`;
  category.textContent = categoryLabels[task.category];

  row.append(project, title, category);
  return row;
}

function renderBoard() {
  const visibleTasks = activeFilter === "all"
    ? tasks
    : tasks.filter((task) => task.category === activeFilter);

  const tasksByPillar = new Map(pillarDefinitions.map((pillar) => [pillar.key, []]));
  visibleTasks.forEach((task) => {
    tasksByPillar.get(task.pillar).push(task);
  });

  board.replaceChildren();
  emptyState.hidden = true;

  pillarDefinitions.forEach((pillar) => {
    const column = document.createElement("section");
    column.className = "pillar-column";
    column.setAttribute("aria-label", pillar.title);

    const header = document.createElement("header");
    header.className = "pillar-column__header";

    const title = document.createElement("h2");
    title.className = "pillar-column__title";
    title.textContent = pillar.title;

    header.append(title);

    const list = document.createElement("div");
    list.className = "task-column-list";

    const columnTasks = tasksByPillar.get(pillar.key);
    if (columnTasks.length === 0) {
      const emptyColumn = document.createElement("p");
      emptyColumn.className = "empty-column";
      emptyColumn.textContent = "Keine Aufgaben";
      list.append(emptyColumn);
    } else {
      columnTasks.forEach((task) => {
        list.append(createTaskRow(task));
      });
    }

    column.append(header, list);
    board.append(column);
  });
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
  const unknownProjects = new Set();

  projects.forEach((project, projectIndex) => {
    const pillar = resolveProjectPillar(project.name);
    if (!pillar) {
      unknownProjects.add(project.name);
      return;
    }

    project.tasks.forEach((task, taskIndex) => {
      resolvedTasks.push({
        text: task.text.trim(),
        category: task.category,
        projectName: project.name,
        pillar,
        projectIndex,
        taskIndex
      });
    });
  });

  if (unknownProjects.size > 0) {
    throw new Error(`Nicht zugeordnete Projekte: ${[...unknownProjects].join(", ")}`);
  }

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

    assignProjectLabelColors(projects);
    tasks = buildTasks(projects);
    updatedDate.dateTime = data.updated;
    updatedDate.textContent = formatDate(data.updated);
    renderBoard();
  } catch (error) {
    errorState.hidden = false;
    console.error(error);
  }
}

loadDashboard();
