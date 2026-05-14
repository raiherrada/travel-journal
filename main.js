const sidebarShow = document.getElementById("sidebar-show")
const closeBtn = document.getElementById("close-btn")

sidebarShow.addEventListener("click", function(){
    sidebar.style.display = "flex"
})

closeBtn.addEventListener("click", function(){
    sidebar.style.display = "none"
})