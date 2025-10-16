// first_website/scripts/main.js

// Press on list items to cross them out!
{
    const listItems = document.querySelectorAll("li");

    function toggleDone(e) {
        if (!e.target.className) {
            e.target.className = "done";
        } else {
            e.target.className = "";
        }
    }

    listItems.forEach((item) => {
        item.addEventListener("click", toggleDone);
    });
}

// Interactive Hover over Niko!
{
    const myImage = document.querySelector(".niko");

    myImage.addEventListener("mouseover", () => {
        const mySrc = myImage.getAttribute("src");
        myImage.setAttribute("src", "images/Niko_speak.png");
    });

    myImage.addEventListener("mouseout", () => {
        const mySrc = myImage.getAttribute("src");
        myImage.setAttribute("src", "images/Niko_eyeclosed.png");
    });
}

// Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
// myHeading.textContent = "Hello world!";
