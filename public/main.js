const topMenu = document.getElementById("mq-top-menu")
const toggleMenuIcon = document.getElementById("mq-toggle-top-menu")
document.addEventListener("click", (e) => {
    if (toggleMenuIcon.contains(e.target)) {
        topMenu.classList.toggle("mq-topmenu-open")
        topMenu.classList.toggle("hidden")
        topMenu.classList.remove("animate-slide-out-left")
        topMenu.classList.add("animate-slide-in-left")
    } else {
        if (topMenu.classList.contains("mq-topmenu-open")) {
            topMenu.classList.remove("mq-topmenu-open")
            topMenu.classList.add("hidden")

        }
    }
})