import "./index.css";
const root = document.getElementById("root");
let route;
function init() {
  const content = `
  <nav class='bg-gray-600  flex items-center justify-between 2-full p-4 shadow-lg'>
    <span class='text-white font-bold text-3xl'>Vanilla JS</span>
      <span> 
        <a href="https://github.com/Madhusudan707/create-vanilla-js-app" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github fa-3x"></i>
        </a>
      </span>
  </nav>

  <div class='flex w-full h-96 items-center justify-center'>
    <button class="btn btn-primary" id='show-counter'>SHOW COUNTER APP</button>
  </div>

  <div class='route' id="route"></div>
`;

  root.innerHTML = content;
  route = document.querySelector("#route");
  document
    .querySelector("#show-counter")
    .addEventListener("click", showCounterApp);
}

function showLoader(root) {
  const loader = document.createElement("div");
  loader.innerText = "loading..";
  root.appendChild(loader);

  return loader;
}

function hideLoader(root, loader) {
  root.removeChild(loader);
}

function showCounterApp() {
  const loader = showLoader(root);

  import("./App").then(({ App, appFunctions }) => {
    hideLoader(root, loader);
    route.innerHTML = App();
    appFunctions();
  });
}

init();
