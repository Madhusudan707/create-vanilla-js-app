import "./App.css";

export const App = () => {
  return `
    <div class="app flex  items-center justify-center  w-full">
      <div class='flex flex-col w-72 bg-gray-600 shadow-lg rounded-lg'>
       
      <div class='flex items-center justify-center w-full'>
      <div id="counter"  class =' text-6xl text-white flex items-center justify-center border w-24 m-4 p-4'></div>
      </div>
        
        <div class='flex items-center justify-around w-full border-t-2 text-white text-3xl p-4'>
          <button id='minusOne' class='btn btn-secondary' >-</button>
          <button id='zero' class='btn btn-default text-2xl text-black'>RESET</button>
          <button id='plusOne' class='btn btn-primary'>+</button>
        </div>
      </div>
    </div>
  `;
};

export const appFunctions = () => {
  let count = 0;
  const showCount = document.querySelector("#counter");
  const update = () => (showCount.innerText = count);

  update();

  document.querySelector("#plusOne").addEventListener("click", () => {
    count++;
    update();
  });

  document.querySelector("#zero").addEventListener("click", () => {
    count=0;
    update();
  });

  document.querySelector("#minusOne").addEventListener("click", () => {
    count--;
    update();
  });
};
