/**
 * This is the background image container.
 */
const background = document.getElementById("background");

/**
 * Duplicate the image to create a vertical stack for the infinite scroll behavior.
 */
background.appendChild(background.querySelector('img').cloneNode());

/**
 * Calculates the height of one full image.
 * Since the container consists of two stacked images,
 * its height is twice that of a single image.
 *
 * This calculation ensures that scrolling transitions occur at the correct boundaries.
 */
function getBackgroundImageHeight() {
    return background.scrollHeight / 2;
}

/**
 * Initializes infinite scrolling for the background image.
 * The background consists of two vertically stacked identical images,
 * creating a seamless infinite scrolling effect.
 *
 * - The page starts at the top of the first image.
 * - Scrolling beyond the top shifts the container up to show the bottom of the top image.
 * - Scrolling beyond the bottom shifts the container back down, creating a looping effect.
 */
window.addEventListener("load", () => {
    /**
     * Ensures the page always starts at the top, preventing unintended scroll positions.
     */
    window.scrollTo(0, 0);

    /**
     * Tracks the current vertical scroll position within the infinite loop.
     * Updates the position based on user input, keeping the background seamlessly scrolling.
     */
    let scrollPosition = 0;

    /**
     * Updates the scroll position based on user input (`dy` - scroll delta).
     *
     * - If the scroll position moves above the top boundary, it wraps around.
     * - If the scroll position moves below the bottom boundary, it wraps back up.
     */
    function updateScrollPosition(dy, h) {
        scrollPosition += dy;
        scrollPosition += scrollPosition < 0 ? h : (scrollPosition > h ? -h : 0);
    }

    /**
     * Smoothly applies the background translation using `requestAnimationFrame`
     * to optimize performance and reduce flickering.
     *
     * Uses `transform: translateY()` instead of modifying `top`,
     * as `transform` does not trigger layout recalculations, making animations smoother.
     */
    let animating = false;
    function translateBackground() {
        if (!animating) {
            animating = true;
            requestAnimationFrame(() => {
                background.style.transform = `translateY(-${scrollPosition}px)`;
                animating = false;
            });
        }
    }

    /**
     * Handles the scroll event, updating and applying the background position.
     */
    function onScroll(dy) {
        updateScrollPosition(dy, getBackgroundImageHeight());
        translateBackground();
    }

    /**
     * Listens for the `wheel` event (mouse scroll and touchpad gestures).
     * Uses the vertical scroll delta (`event.deltaY`) to determine scroll movement.
     */
    window.addEventListener("wheel", (event) => {
        onScroll(event.deltaY);
    });

    /**
     * Handles touch-based scrolling.
     *
     * - `touchstart` stores the initial touch position.
     * - `touchmove` calculates the vertical movement delta (`dy`)
     *   and updates the background scroll accordingly.
     */
    let touchStart = 0;

    window.addEventListener("touchstart", (event) => {
        touchStart = event.touches[0].clientY;
    });

    window.addEventListener("touchmove", (event) => {
        const touchEnd = event.touches[0].clientY;
        const dy = touchStart - touchEnd;
        touchStart = touchEnd;
        onScroll(dy);
    });
});