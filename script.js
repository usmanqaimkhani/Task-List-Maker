function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      var taskList = document.getElementById("taskList");
      var li = document.createElement("li");
      li.className = "task";
      li.innerHTML = taskText + '<button onclick="completeTask(this)">Complete</button>' + '<button onclick="deleteTask(this)">Delete</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a valid task!");
    }
  }
  
  function completeTask(btn) {
    var task = btn.parentNode;
    task.classList.toggle("completed");
  }
  
  function deleteTask(btn) {
    var task = btn.parentNode;
    task.parentNode.removeChild(task);
  }
  