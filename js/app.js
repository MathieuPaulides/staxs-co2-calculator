const tabCalc = document.getElementById("tabCalc");
const tabConfig = document.getElementById("tabConfig");

window.page = "calc";

window.render = () => {
  tabCalc.classList.toggle("active", page === "calc");
  tabConfig.classList.toggle("active", page === "config");
  page === "calc" ? renderCalculator() : renderConfiguration();
};

tabCalc.onclick = () => { page = "calc"; render(); };
tabConfig.onclick = () => { page = "config"; render(); };

render();

