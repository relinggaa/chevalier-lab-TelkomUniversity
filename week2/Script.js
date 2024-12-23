function addTask() {
  const name = document.getElementById("task-name").value;
  const desc = document.getElementById("task-desc").value;
  const deadline = document.getElementById("task-deadline").value;

  if (!name || !desc || !deadline) {
    alert("Harap isi semua kolom!");
    return;
  }

  const listTask = document.getElementById("task-list");
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  taskCard.innerHTML = `
          <h3>${name}</h3>
          <p>${desc}</p>
          <p>Deadline: ${deadline}</p>
          <button onclick="this.parentElement.remove()">Hapus</button>
      `;

  listTask.appendChild(taskCard);

  document.getElementById("task-name").value = "";
  document.getElementById("task-desc").value = "";
  document.getElementById("task-deadline").value = "";
}
