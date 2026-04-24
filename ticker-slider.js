(function initTickerSlider(global) {
  function setupTicker(el) {
    const track = el.querySelector(".track");
    if (!track) return;

    const direction = el.dataset.direction === "right" ? 1 : -1;
    const speed = Number.parseFloat(el.dataset.speed || "80") || 80;
    let items = Array.from(track.children);
    let offset = 0;
    let lastTime = null;

    function fillTrack() {
      while (track.scrollWidth < el.clientWidth * 2.5) {
        items.forEach((item) => track.appendChild(item.cloneNode(true)));
      }
      items = Array.from(track.children);
    }

    function step(time) {
      if (lastTime == null) lastTime = time;
      const deltaSec = (time - lastTime) / 1000;
      lastTime = time;

      offset += speed * direction * deltaSec;

      const first = items[0];
      const last = items[items.length - 1];
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;

      if (direction === -1) {
        if (offset <= -(first.offsetWidth + gap)) {
          offset += first.offsetWidth + gap;
          track.appendChild(first);
          items.push(items.shift());
        }
      } else if (offset >= 0) {
        offset -= last.offsetWidth + gap;
        track.insertBefore(last, first);
        items.unshift(items.pop());
      }

      track.style.transform = "translateX(" + offset + "px)";
      requestAnimationFrame(step);
    }

    window.addEventListener("resize", () => {
      offset = 0;
      fillTrack();
    });

    fillTrack();
    requestAnimationFrame(step);
  }

  function init(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(".ticker-slider").forEach(setupTicker);
  }

  global.TickerSlider = { init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => init(), { once: true });
  } else {
    init();
  }
})(window);
