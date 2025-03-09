document.addEventListener("DOMContentLoaded", () => {

    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const background = document.querySelector("#background");

    let pos = 0;

    const h = background.scrollHeight / 2;

    let touchStartY = 0;

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

    // Listen for touch events for mobile and touchpad users
    window.addEventListener("touchstart", (event) => {
        touchStartY = event.touches[0].clientY;
    }, { passive: false });

    window.addEventListener("touchmove", (event) => {
        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        updateScroll(deltaY);
        touchStartY = touchEndY;
        // event.preventDefault(); // Prevent default scrolling
    }, { passive: false });

});