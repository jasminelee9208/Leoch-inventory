fetch('inventory.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#inventoryTable tbody");
    const lastUpdated = document.getElementById("lastUpdated");

    lastUpdated.textContent = data.last_updated;

    data.items.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.sku}</td>
        <td>${item.quantity}</td>
      `;
      tableBody.appendChild(row);
    });
  });
