


  const tabs = document.getElementById('tabs');
  tabs.innerHTML = `<div class="app-container">
        <h1>Todo App</h1>
        <div>
            <input type="text" id="taskInput" placeholder="Add a new task">
            <button onclick="addTask()">Add Task</button>
        </div>
        <ul id="taskList"></ul>
    </div>`;
  
  const homeNav = document.querySelector('#home-nav');
  const homePage = document.querySelector('#home-page');
  homeNav.root = homePage;

  const radioNav = document.querySelector('#radio-nav');
  const radioPage = document.querySelector('#radio-page');
  radioNav.root = radioPage;

  const libraryNav = document.querySelector('#library-nav');
  const libraryPage = document.querySelector('#library-page');
  libraryNav.root = libraryPage;

  const searchNav = document.querySelector('#search-nav');
  const searchPage = document.querySelector('#search-page');
  searchNav.root = searchPage;
