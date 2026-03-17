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

const CustomerBtn = document.getElementsByClassName("customersLink")[0]
CustomerBtn.addEventListener("click", () => {
    window.location.href = "../Customers/index.html"
})

const LogoutBtn = document.getElementsByClassName("logoutLink")[0]
LogoutBtn.addEventListener("click", () => {
    window.location.href = "../Login/index.html"
})