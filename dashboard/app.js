const categoryLabels = {
  focus: "Fokus",
  continue: "Weiterführen",
  waiting: "Warten & Nachhalten"
};
const categoryPriority = ["focus", "continue", "waiting"];

const grid = document.querySelector("#project-grid");
const emptyState = document.querySelector("#empty-state");
const errorState = document.querySelector("#error-state");
const updatedDate = document.querySelector("#updated-date");
const filterButtons = document.querySelectorAll("[data-filter]");

let projects = [];
let activeFilter = "all";

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

function renderProjects() {
  const visibleProjects = projects
    .map((project) => ({ project, tasks: tasksForActiveFilter(project) }))
    .filter(({ tasks }) => tasks.length > 0);

  grid.replaceChildren();
  emptyState.hidden = visibleProjects.length > 0;

  visibleProjects.forEach(({ project, tasks }) => {
    const card = document.createElement("article");
    card.className = "project-card";

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
    updatedDate.dateTime = data.updated;
    updatedDate.textContent = formatDate(data.updated);
    renderProjects();
  } catch (error) {
    errorState.hidden = false;
    console.error(error);
  }
}

loadDashboard();
