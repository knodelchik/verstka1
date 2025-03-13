const tabBtns = document.querySelectorAll(".tabs-nav button");
const tabItems = document.querySelectorAll(".tabs-item");

function hideTab() {
    tabItems.forEach(item => item.classList.add("hide"));
    tabBtns.forEach(btn => btn.classList.remove("active"));
};

function showItems(index) {
    tabItems[index].classList.remove("hide");
    tabBtns[index].classList.add("active");
};

hideTab();
showItems(0);

tabBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTab();
    showItems(index);
}))

const anchors = document.querySelectorAll(".nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function (event) {
        event.preventDefault();
        
        const id = anc.getAttribute("href");

        const elem = document.querySelector(id);

        window.scroll({
            top:elem.offsetTop - 75,
            behavior: "smooth"
        })
    })
});