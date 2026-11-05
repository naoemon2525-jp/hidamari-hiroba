// Shared behaviour for the static Hidamari Hiroba site: mobile menu only.
(function () {
  var openBtns = document.querySelectorAll("[data-menu-open]");
  var menu = document.getElementById("mobile-menu");
  if (!menu) return;
  var closeBtns = menu.querySelectorAll("[data-menu-close]");
  function open() {
    menu.hidden = false;
    openBtns.forEach(function (b) { b.setAttribute("aria-expanded", "true"); });
  }
  function close() {
    menu.hidden = true;
    openBtns.forEach(function (b) { b.setAttribute("aria-expanded", "false"); });
  }
  openBtns.forEach(function (b) { b.addEventListener("click", open); });
  closeBtns.forEach(function (b) { b.addEventListener("click", close); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) close();
  });
})();
