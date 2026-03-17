const DashboardBtn = document.getElementsByClassName("dashboardLink")[0]
DashboardBtn.addEventListener("click", () => {
    window.location.href = "../Dashboard/index.html"
})

const ProductBtn = document.getElementsByClassName("productsLink")[0]
ProductBtn.addEventListener("click", () => {
    window.location.href = "../Products/index.html"
})

const OrderBtn = document.getElementsByClassName("ordersLink")[0]
OrderBtn.addEventListener("click", () => {
    window.location.href = "../Orders/index.html"
})

const SettingBtn = document.getElementsByClassName("settingsLink")[0]
SettingBtn.addEventListener("click", () => {
    window.location.href = "../Settings/index.html"
})

const ProfileBtn = document.getElementsByClassName("profileLink")[0]
ProfileBtn.addEventListener("click", () => {
    window.location.href = "../Profile/index.html"
})