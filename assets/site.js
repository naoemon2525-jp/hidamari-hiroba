// Shared behaviour for the static Hidamari Hiroba site.
// Sakura scenery background + falling petals, injected on every page.
(function () {
  var bg = document.createElement("div");
  bg.className = "sakura-bg";
  bg.setAttribute("aria-hidden", "true");
  var img = document.createElement("img");
  img.src = "images/sakura-bg.webp";
  img.alt = "";
  bg.appendChild(img);
  document.body.insertBefore(bg, document.body.firstChild);

  var wrap = document.createElement("div");
  wrap.className = "petals";
  wrap.setAttribute("aria-hidden", "true");
  var CFG = [
    { left: 4, size: 11, dur: 31, delay: -6 },
    { left: 13, size: 8, dur: 27, delay: -19 },
    { left: 24, size: 13, dur: 35, delay: -12 },
    { left: 36, size: 9, dur: 29, delay: -24 },
    { left: 47, size: 12, dur: 33, delay: -3 },
    { left: 58, size: 8, dur: 28, delay: -16 },
    { left: 68, size: 11, dur: 36, delay: -27 },
    { left: 79, size: 9, dur: 30, delay: -9 },
    { left: 90, size: 12, dur: 34, delay: -21 }
  ];
  CFG.forEach(function (c) {
    var p = document.createElement("span");
    p.className = "petal";
    p.style.left = c.left + "%";
    p.style.width = c.size + "px";
    p.style.height = Math.round(c.size * 0.9) + "px";
    p.style.opacity = (0.35 + (c.size - 8) * 0.04).toFixed(2);
    p.style.animationDuration = c.dur + "s";
    p.style.animationDelay = c.delay + "s";
    wrap.appendChild(p);
  });
  document.body.appendChild(wrap);
  document.addEventListener("visibilitychange", function () {
    wrap.classList.toggle("paused", document.hidden);
  });
})();

// Mobile menu.
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
