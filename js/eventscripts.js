// Get the button
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== '') {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                const hash = this.hash;
    
                // Using JavaScript's scrollTo() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                const target = document.querySelector(hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth',
                        duration: 800
                    });
                }
            }
        });
    } // Add this line to close the for loop    
})