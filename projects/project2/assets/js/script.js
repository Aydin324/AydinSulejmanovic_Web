addEventListener("DOMContentLoaded", (event) => {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({
    defaultView: "#view_1",
    templateDir: "./tpl/",
    pageNotFound: "error_404",
  }); // initialize

  // define routes
  app.route({
    view: "view_1",
    load: "index_home.html",
  });

  app.route({
    view: "view_2",
    load: "form.html",
    onReady: function () {
      document.getElementById("view_2").style.marginTop = "8vh";
    },
  });
  app.route({
    view: "view_3",
    load: "about_us.html",
  });

  // run app
  app.run();
});
