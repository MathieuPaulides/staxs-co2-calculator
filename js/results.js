window.calculateResults = () => {
  let totalSaving = 0;
  let totalWeight = 0;

  selectedProducts.forEach(p => {
    totalSaving += productSaving(p.product) * p.qty;
    totalWeight += productWeight(p.product) * p.qty;
  });

  const trees = totalSaving / constants.KG_CO2_PER_TREE;
  const gas = totalSaving / constants.KG_CO2_PER_GAS_DAY;
  const transport = state.transports.find(t => t.default);
  const distance = Number(document.getElementById("distance").value || 0);
  const logistics = distance * transport.co2;

  document.getElementById("results").innerHTML = `
    <div class="card">
      <h3>CO₂ Savings Results</h3>
      <div class="grid">
        <div class="metric"><strong>${totalSaving.toFixed(2)} kg</strong>Total CO₂ Savings</div>
        <div class="metric"><strong>${totalWeight.toFixed(2)} kg</strong>Total Products Processed</div>
        <div class="metric"><strong>${trees.toFixed(1)}</strong>Trees per year</div>
        <div class="metric"><strong>${gas.toFixed(1)}</strong>Days of gas</div>
      </div>
      <p class="muted">Logistics emissions: ${logistics.toFixed(2)} kg CO₂</p>
      <p class="muted">These figures are educated estimates.</p>
    </div>
  `;
};

