const categoryLabels = {
  focus: "Fokus",
  continue: "Weiterführen",
  waiting: "Warten & Nachhalten"
};
const categoryPriority = ["focus", "continue", "waiting"];
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

const grid = document.querySelector("#project-grid");
const emptyState = document.querySelector("#empty-state");
const errorState = document.querySelector("#error-state");
const updatedDate = document.querySelector("#updated-date");
const filterButtons = document.querySelectorAll("[data-filter]");

let projects = [];
let activeFilter = "all";
let projectLabelColors = new Map();

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(date);
}

function tasksForActiveFilter(project) {
  return activeFilter === "all"
    ? project.tasks
    : project.tasks.filter((task) => task.category === activeFilter);
}

function categoryForCard(tasks) {
  if (activeFilter !== "all") return activeFilter;
  return categoryPriority.find((category) =>
    tasks.some((task) => task.category === category)
  );
}

function hashProjectName(name) {
  let hash = 2166136261;
  for (const character of name.trim().toLowerCase()) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function colorForProject(name) {
  return projectLabelColors.get(name) ?? taskLabelPalette[hashProjectName(name) % taskLabelPalette.length];
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

function renderProjects() {
  const visibleProjects = projects
    .map((project) => ({ project, tasks: tasksForActiveFilter(project) }))
    .filter(({ tasks }) => tasks.length > 0);

  grid.replaceChildren();
  emptyState.hidden = visibleProjects.length > 0;

  visibleProjects.forEach(({ project, tasks }) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.setProperty("--task-label-bg", colorForProject(project.name));

    const header = document.createElement("div");
    header.className = "card-header";
    const title = document.createElement("h2");
    title.textContent = project.name;
    const category = document.createElement("p");
    category.className = "category-label";
    category.textContent = categoryLabels[categoryForCard(tasks)];
    header.append(title, category);

    const heading = document.createElement("p");
    heading.className = "next-steps";
    heading.textContent = "Next Steps";
    const taskList = document.createElement("div");
    taskList.className = "task-list";

    tasks.forEach((task) => {
      const taskElement = document.createElement("p");
      taskElement.className = "task";
      taskElement.textContent = task.text;
      taskList.append(taskElement);
    });

    card.append(header, heading, taskList);
    grid.append(card);
  });
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderProjects();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

async function loadDashboard() {
  try {
    const response = await fetch("projects.json");
    if (!response.ok) throw new Error("projects.json could not be loaded");

    const data = await response.json();
    projects = data.projects.filter((project) =>
      Array.isArray(project.tasks) && project.tasks.some((task) =>
        typeof task.text === "string" && categoryLabels[task.category]
      )
    ).map((project) => ({
      ...project,
      tasks: project.tasks.filter((task) =>
        typeof task.text === "string" && categoryLabels[task.category]
      )
    }));
    assignProjectLabelColors(projects);
    updatedDate.dateTime = data.updated;
    updatedDate.textContent = formatDate(data.updated);
    renderProjects();
  } catch (error) {
    errorState.hidden = false;
    console.error(error);
  }
}

loadDashboard();
