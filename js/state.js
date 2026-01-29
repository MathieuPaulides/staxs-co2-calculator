const STORAGE_KEY = "staxs-co2-poc";

window.state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  materials: structuredClone(window.DEFAULT_MATERIALS),
  products: structuredClone(window.DEFAULT_PRODUCTS),
  transports: structuredClone(window.DEFAULT_TRANSPORTS)
};

window.saveState = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

window.resetState = () => {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
};

window.constants = {
  KG_CO2_PER_TREE: 21,
  KG_CO2_PER_GAS_DAY: 5
};

