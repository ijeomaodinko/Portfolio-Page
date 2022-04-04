const bars = document.getElementById('pop')
const closeMenu = document.querySelector(".close")
const popUp = document.querySelector(".up-menu")


bars.addEventListener("click", () => {
    popUp.classList.add('pop-up')
})

closeMenu.addEventListener("click", () => {
    popUp.style.display = "none"
})