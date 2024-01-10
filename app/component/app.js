document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="button" onclick="removeTask(this)">ลบ</button>
        `;
        taskList.appendChild(li);

        saveTask(taskInput.value);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskList = document.getElementById("taskList");
    var li = button.parentElement;
    taskList.removeChild(li);

    var tasks = getSavedTasks();
    var taskText = li.querySelector("span").innerText;
    var taskIndex = tasks.indexOf(taskText);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasksToStorage(tasks);
    }
}

function saveTask(task) {
    var tasks = getSavedTasks();
    tasks.push(task);
    saveTasksToStorage(tasks);
}

function getSavedTasks() {
    var savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = getSavedTasks();

    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button class="button" onclick="removeTask(this)">ลบ</button>
        `;
        taskList.appendChild(li);
    });
}



const infiniteScroll = document.querySelector('ion-infinite-scroll');
  infiniteScroll.addEventListener('ionInfinite', (event) => {
    setTimeout(() => {
      generateItems();
      event.target.complete();
    }, 500);
  });

  const list = document.querySelector('ion-list');

  function generateItems() {
    const count = list.childElementCount + 1;
    const total = count + 50;
    for (let i = count; i < total; i++) {
      const el = document.createElement('ion-item');

      const avatar = document.createElement('ion-avatar');
      avatar.slot = 'start';
      const img = document.createElement('img');
      img.src = `https://picsum.photos/80/80?random=${i}`;
      img.alt = 'Avatar';

      avatar.appendChild(img);
      el.appendChild(avatar);

      const text = document.createElement('ion-label');
      text.textContent = `Item ${i}`;

      el.appendChild(text);

      list.appendChild(el);
    }
  }

  generateItems();
