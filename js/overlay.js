/* "Om meg" card that follows the pointer while hovering the name.
   Without JS the card still opens, anchored next to the name (see styles.css). */
(function () {
  var root = document.documentElement;
  root.classList.add("has-js");

  var trigger = document.querySelector(".intro-name");
  var card = document.getElementById("om-meg");
  if (!trigger || !card) return;

  var CARD_WIDTH = 223;
  var PORTRAIT_OVERHANG = 40; // portrait sticks this far above the box
  var OFFSET = 18;
  var EDGE = 8;

  var open = false;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function place(x, y) {
    var boxHeight = card.offsetHeight;
    var totalHeight = boxHeight + PORTRAIT_OVERHANG;
    var maxLeft = window.innerWidth - CARD_WIDTH - EDGE;
    var maxBoxTop = window.innerHeight - EDGE - boxHeight;
    var minBoxTop = EDGE + PORTRAIT_OVERHANG;

    var left = x + OFFSET;
    if (left > maxLeft) left = x - CARD_WIDTH - OFFSET;
    left = clamp(left, EDGE, Math.max(EDGE, maxLeft));

    var boxTop = y + OFFSET;
    if (boxTop > maxBoxTop) boxTop = y - OFFSET - totalHeight;
    boxTop = clamp(boxTop, minBoxTop, Math.max(minBoxTop, maxBoxTop));

    card.style.setProperty("--x", left + "px");
    card.style.setProperty("--y", boxTop + "px");
  }

  function show(x, y) {
    place(x, y);
    if (!open) {
      open = true;
      card.classList.add("is-open");
    }
  }

  function hide() {
    if (!open) return;
    open = false;
    card.classList.remove("is-open");
  }

  trigger.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "mouse") show(event.clientX, event.clientY);
  });

  trigger.addEventListener("pointermove", function (event) {
    if (event.pointerType === "mouse") show(event.clientX, event.clientY);
  });

  trigger.addEventListener("pointerleave", function (event) {
    if (event.pointerType === "mouse") hide();
  });

  // Touch and click: open at the point of contact.
  trigger.addEventListener("pointerdown", function (event) {
    show(event.clientX, event.clientY);
  });

  // Keyboard: anchor just below the name.
  trigger.addEventListener("focus", function () {
    var rect = trigger.getBoundingClientRect();
    show(rect.left, rect.bottom + 12);
  });

  trigger.addEventListener("blur", hide);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") hide();
  });

  document.addEventListener("pointerdown", function (event) {
    if (!trigger.contains(event.target)) hide();
  });

  window.addEventListener("scroll", hide, { passive: true });
})();
