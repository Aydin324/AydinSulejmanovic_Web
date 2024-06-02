function loadTableDataAdmin() {
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
      table.classList.add("table", "table-striped", "table-bordered");

      const thead = document.createElement("thead");
      thead.innerHTML = `
                <tr>
                    <th>Name</th>
                    <th>Car</th>
                    <th>Time</th>
                    <th>View More</th>
                    <th>Delete</th>
                    <th>Edit</th>
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
                    <td><button class="btn btn-primary view-btn">View</button></td>
                    <td><button class="btn btn-danger delete-btn">Delete</button></td>
                    <td><button class="btn btn-success edit-btn">Edit</button></td>
                `;

        // Add event listener to the "View" button in each row
        const viewBtn = row.querySelector(".view-btn");
        viewBtn.addEventListener("click", () => {
          localStorage.setItem("rowData", JSON.stringify(item));
          window.open("views/view_more.html", "_blank");
        });

        // Add event listener to the "Delete" button in each row
        const deleteBtn = row.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
          row.remove(); // Simulate deletion by removing the row from the table
          toastr.success("Candidate deleted successfully!");
        });

        // Add event listener to the "Edit" button in each row
        const editBtn = row.querySelector(".edit-btn");
        editBtn.addEventListener("click", () => {
          const modal = document.getElementById("editModal");
          document.getElementById("editName").value = item.name;
          document.getElementById("editCar").value = item.car;
          document.getElementById("editTime").value = item.time;
          modal.style.display = "block";
        });

        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      const contentDiv = document.getElementById("data-table-admin");
      if (contentDiv) {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(table);
      } else {
        console.error("Error: content div not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
