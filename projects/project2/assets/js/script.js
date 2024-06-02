$(document).ready(function () {
  var app = $.spapp({
    defaultView: "#page1",
    templateDir: "views/",
  });
  app.run();
  changeTheme();
});

let isChanged = false;
const htmltag = document.getElementById("html");
document.getElementById("bulb").addEventListener("click", () => {
  console.log("theme");
  if (isChanged) {
    htmltag.setAttribute("data-theme", "light");
    isChanged = false;
    localStorage.setItem("theme", "light");
  } else {
    htmltag.setAttribute("data-theme", "dark");
    isChanged = true;
    localStorage.setItem("theme", "dark");
  }
});

function changeTheme() {
  const theme = localStorage.getItem("theme");
  if (theme == "dark") {
    htmltag.setAttribute("data-theme", "dark");
  } else {
    htmltag.setAttribute("data-theme", "light");
  }
}
