window.selectedProducts = [];

window.renderCalculator = () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="card">
      <h1>CO₂ Savings Calculator</h1>

      <label>Add product</label>
      <select id="productSelect">
        <option value="">Select product</option>
        ${state.products.map(p => `<option value="${p.id}">${p.name}</option>`).join("")}
      </select>

      <label>Quantity (pcs)</label>
      <input id="qty" type="number" min="1" />

      <button class="primary" onclick="addProduct()">Add</button>
    </div>

    ${selectedProducts.length ? `
    <div class="card">
      <h3>Selected Products</h3>
      <table>
        ${selectedProducts.map((p,i)=>`
          <tr>
            <td>${p.product.name}</td>
            <td>${p.qty} pcs</td>
            <td class="right">${productSaving(p.product).toFixed(4)} kg / unit</td>
            <td><button onclick="removeProduct(${i})">×</button></td>
          </tr>
        `).join("")}
      </table>
    </div>` : ""}

    <div class="card">
      <h3>Logistics (optional)</h3>
      <label>Distance to STAXS (km)</label>
      <input id="distance" type="number" min="0" />
      <button class="primary" onclick="calculateResults()">Generate Results</button>
    </div>

    <div id="results"></div>
  `;
};

window.addProduct = () => {
  const id = productSelect.value;
  const qty = Number(qty.value);
  if (!id || !qty) return;
  selectedProducts.push({
    product: state.products.find(p => p.id === id),
    qty
  });
  renderCalculator();
};

window.removeProduct = (i) => {
  selectedProducts.splice(i, 1);
  renderCalculator();
};

window.productSaving = (product) =>
  product.materials.reduce((sum, m) => {
    const mat = state.materials.find(x => x.id === m.materialId);
    return sum + m.weight * mat.factor;
  }, 0);

window.productWeight = (product) =>
  product.materials.reduce((s, m) => s + m.weight, 0);

