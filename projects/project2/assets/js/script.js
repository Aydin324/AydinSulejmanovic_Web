$(document).ready(function () {
  var app = $.spapp({
    defaultView: "#page1",
    templateDir: "views/",
  });
  app.run();
});

let isChanged = false;
const htmltag = document.getElementById("html");
document.getElementById("bulb").addEventListener("click", () => {
  console.log("theme");
  if (isChanged) {
    htmltag.setAttribute("data-theme", "light");
    isChanged = false;
  } else {
    htmltag.setAttribute("data-theme", "dark");
    isChanged = true;
  }
});
