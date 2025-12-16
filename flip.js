document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;
    const totalPages = pages.length;

    function flipPage() {
        if (currentPage < totalPages) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
        } else {
            // Optional: reset or stop the animation after all pages
            // clearInterval(autoFlip); 
            // alert('End of book!');
        }
    }

    // Automatically flip a page every 3 seconds (adjust time as needed)
    const autoFlip = setInterval(flipPage, 2000); 
});
