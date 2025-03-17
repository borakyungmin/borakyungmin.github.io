/**
 * Executes when the page is fully loaded, including images and fonts.
 * This ensures that all necessary elements are available for interaction.
 */
window.addEventListener("load", () => {
    infiniteScrollBackground();
});

/**
 * Initializes infinite scrolling for the background image.
 * The background consists of two vertically stacked identical images,
 * creating a seamless infinite scrolling effect.
 *
 * - The page starts at the top of the first image.
 * - Scrolling beyond the top shifts the container up to show the bottom of the top image.
 * - Scrolling beyond the bottom shifts the container back down, creating a looping effect.
 */
function infiniteScrollBackground() {
    /**
     * Ensures the page always starts at the top, preventing unintended scroll positions.
     */
    window.scrollTo(0, 0);

    /**
     * Selects the background image container using its `id` in the HTML.
     */
    const background = document.querySelector("#background");

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

    let backgroundImageHeight = getBackgroundImageHeight();

    /**
     * Updates the background image height when the window is resized
     * to maintain proper scrolling behavior.
     */
    window.addEventListener("resize", () => {
        backgroundImageHeight = getBackgroundImageHeight();
    });

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
    function updateScrollPosition(dy) {
        scrollPosition += dy;
        if (scrollPosition < 0) {
            scrollPosition += backgroundImageHeight;
        } else if (scrollPosition > backgroundImageHeight) {
            scrollPosition -= backgroundImageHeight;
        }
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
        updateScrollPosition(dy);
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
}