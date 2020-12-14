//Validacion de Formulario
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// scroll nav

var nav = document.getElementById("navegation");

window.addEventListener("scroll", function (e) {
  var scrollPos = window.pageYOffset;

  if (scrollPos !== 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});
