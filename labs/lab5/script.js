let names = [
  "John Doe",
  "Jane Smith",
  "Jim Brown",
  "Jake White",
  "Julie Black",
  "Jennifer Green",
];
let countries = [
  "Afghanisan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
];
let emails = [
  "john1@example.com",
  "jane2@example.com",
  "jim3@example.com",
  "jake4@example.com",
  "julie5@example.com",
  "jennifer6@example.com",
];

const users = [
  {
    id: 1,
    name: "John Doe",
    country: "Afghanistan",
    email: "john1@example.com",
  },
  { id: 2, name: "Jane Smith", country: "Albania", email: "jane2@example.com" },
  { id: 3, name: "Jim Brown", country: "Algeria", email: "jim3@example.com" },
  { id: 4, name: "Jake White", country: "Andorra", email: "jake4@example.com" },
  {
    id: 5,
    name: "Julie Black",
    country: "Angola",
    email: "julie5@example.com",
  },
  {
    id: 6,
    name: "Jennifer Green",
    country: "Antigua and Barbuda",
    email: "jennifer6@example.com",
  },
];

function modal(idx) {
  window.alert("You clicked on the user: " + users[idx]["name"]);
}

function showTable(_users) {
  container = document.getElementById("main");
  let content =
    "<table class='table'><thead><tr><th id='id'>id</th><th id='name'>name</th><th id='cntry'>country</th><th>email</th><th>action</th></tr></thead><tbody>";
  for (let i = 0; i < _users.length; i++) {
    content += "<tr>";
    for (let k in _users[i]) {
      content += "<td>" + _users[i][k] + "</td>";
    }
    content +=
      "</td><td><button type='button' onclick='modal(" +
      i +
      ")' class='btn btn-primary'>Click</button></tr>";
  }
  content += "</tbody></table>";
  container.innerHTML = content;
}

let sorted_by_id = true;
let sorted_by_name = false;
let sorted_by_country = false;

showTable(users);

document.getElementById("main").addEventListener("click", function (event) {
  if (event.target.id === "name") {
    if (!sorted_by_name) {
      users.sort((a, b) => a.name.localeCompare(b.name));
      sorted_by_name = true;
    } else {
      users.sort((a, b) => b.name.localeCompare(a.name));
      sorted_by_name = false;
    }
    console.log(users);
    showTable(users);
  }
});

document.getElementById("main").addEventListener("click", function (event) {
  if (event.target.id === "id") {
    if (!sorted_by_id) {
      users.sort((a, b) => a.id - b.id);
      sorted_by_id = true;
    } else {
      users.sort((a, b) => b.id - a.id);
      sorted_by_id = false;
    }
    console.log(users);
    showTable(users);
  }
});

document.getElementById("main").addEventListener("click", function (event) {
  if (event.target.id === "cntry") {
    if (!sorted_by_country) {
      users.sort((a, b) => a.name.localeCompare(b.name));
      sorted_by_country = true;
    } else {
      users.sort((a, b) => b.name.localeCompare(a.name));
      sorted_by_country = false;
    }
    console.log(users);
    showTable(users);
  }
});
