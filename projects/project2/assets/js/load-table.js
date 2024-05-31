document.addEventListener("DOMContentLoaded", () => {
  loadTableData();
});

function loadTableData() {
  console.log("alija");
  fetch("data/leaderboard.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const table = document.createElement("table");
      table.border = "1";

      const thead = document.createElement("thead");
      thead.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Car</th>
                    <th>Time</th>
                </tr>
            `;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.car}</td>
                    <td>${item.time}</td>
                `;
        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      const contentDiv = document.getElementById("data-table");
      contentDiv.innerHTML = ""; // Clear previous content
      contentDiv.appendChild(table);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
