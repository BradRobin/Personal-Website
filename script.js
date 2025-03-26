document.addEventListener("DOMContentLoaded", function () {
    const imageScroll = document.querySelector(".image-scroll");
    let scrollAmount = 0;
    let scrollSpeed = 1; // Adjust speed if needed

    function autoScroll() {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= imageScroll.scrollWidth / 2) {
            scrollAmount = 0; // Reset scroll position for loop effect
        }
        imageScroll.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    setInterval(autoScroll, 50); // Adjust interval speed if needed
});
