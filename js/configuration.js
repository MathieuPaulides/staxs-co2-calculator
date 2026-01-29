window.renderConfiguration = () => {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="card">
      <h1>Configuration (POC)</h1>
      <p class="muted">Stored locally in your browser. Changes are not shared.</p>

      <h3>Materials</h3>
      ${state.materials.map((m,i)=>`
        <label>${m.name} (kg CO₂ / kg)</label>
        <input type="number" value="${m.factor}"
          onchange="state.materials[${i}].factor=this.value; saveState()" />
      `).join("")}

      <button onclick="resetState()">Reset to defaults</button>
    </div>
  `;
};

