document.addEventListener("DOMContentLoaded", () => {

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const background = document.querySelector("#background");

    let pos = 0;

    const h = background.scrollHeight / 2;

    // Function to update background position
    const updateScroll = (delta) => {
        pos = pos + delta;
        if (pos < 0) { pos = pos + h; }
        if (pos > h) { pos = pos - h; }
        background.style.transform = `translateY(-${pos}px)`;
    };

    // Listen for mouse wheel and touchpad scroll events
    window.addEventListener("wheel", (event) => {
        updateScroll(event.deltaY);
    }, { passive: false });
});