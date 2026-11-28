document.querySelectorAll(".project-media").forEach((gallery) => {
  const slides = [...gallery.querySelector(".media-slides").children];
  const controls = gallery.querySelector(".media-controls");
  if (!controls || slides.length < 2) return;

  const count = controls.querySelector(".media-count");
  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
      if (slide.hidden) slide.querySelectorAll("video").forEach((video) => video.pause());
    });
    count.textContent = `${current + 1} / ${slides.length}`;
  }

  controls.querySelector(".media-prev").addEventListener("click", () => show(current - 1));
  controls.querySelector(".media-next").addEventListener("click", () => show(current + 1));
  show(0);
  controls.hidden = false;
});
