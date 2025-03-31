document.addEventListener("DOMContentLoaded", function () {
    const imageScroll = document.querySelector(".image-scroll");
    const container = document.querySelector(".image-scroll-container");
    let scrollAmount = 0;
    let scrollSpeed = 2; 

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
