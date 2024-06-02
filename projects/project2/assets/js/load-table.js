function loadTableData() {
  console.log("Loading table data");
  fetch("data/leaderboard.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const table = document.createElement("table");
      table.classList.add("table", "table-striped", "table-bordered"); // Add Bootstrap table classes

      const thead = document.createElement("thead");
      thead.classList.add("thead-dark"); // Add Bootstrap class for dark header background
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
      if (contentDiv) {
        contentDiv.innerHTML = ""; // Clear previous content
        contentDiv.appendChild(table);
      } else {
        console.error("Error: content div not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
