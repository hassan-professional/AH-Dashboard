async function fetchData() {
    const respone = await fetch(" https://fakestoreapi.com/products")
    const data = await respone.json()
    const jewlary = data.filter(item => item.category === "jewelery")
    const forMen = data.filter(item => item.category === "men's clothing")
    const forWomen = data.filter(item => item.category === "women's clothing")
    const electronics = data.filter(item => item.category === "electronics")
    return [jewlary, forMen, forWomen, electronics]
}
async function createCards() {
    const data = await fetchData()
    for(let i = 0; i < data.length; i++){
        
        const cardbox = document.getElementsByClassName("cards")[i]
        data[i].forEach(item => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `<p>A.Hassan Est. 2024 • Brand  & Design</p>
            <img src="${item.image}" width="90%" style="justify-self: center;" alt="">
            <p class="price">Price: ${item.price} $</p>
            <p class="description">${item.description.trim().slice(0, 100)}...</p>
            <button class="add_to_cart">Add to Cart</button>`
            cardbox.appendChild(card)
        })
    }
}
createCards()

const DashboardBtn = document.getElementsByClassName("dashboardLink")[0]
DashboardBtn.addEventListener("click", () => {
    window.location.href = "../Dashboard/index.html"
})

const OrderBtn = document.getElementsByClassName("ordersLink")[0]
OrderBtn.addEventListener("click", () => {
    window.location.href = "../Orders/index.html"
})

const CustomerBtn = document.getElementsByClassName("customersLink")[0]
CustomerBtn.addEventListener("click", () => {
    window.location.href = "../Customers/index.html"
})

const SettingBtn = document.getElementsByClassName("settingsLink")[0]
SettingBtn.addEventListener("click", () => {
    window.location.href = "../Settings/index.html"
})

const LogoutBtn = document.getElementsByClassName("logoutLink")[0]
LogoutBtn.addEventListener("click", () => {
    window.location.href = "../Login/index.html"
})

// // Carousel logic
// const wrapper = document.getElementById('cardsWrapper');
// const cards = document.getElementById('cards');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentIndex = 0;
// const cardsPerView = 4;

// function updateCarousel() {
//     const card = document.querySelector('.card');
//     if (!card) return;
//     const cardStyle = getComputedStyle(card);
//     const cardWidth = card.offsetWidth;
//     const gap = parseInt(getComputedStyle(cards).gap) || 20;
//     const scrollAmount = (cardWidth + gap) * currentIndex;
//     cards.style.transform = `translateX(-${scrollAmount}px)`;

//     // Disable buttons at ends
//     prevBtn.disabled = currentIndex === 0;
//     nextBtn.disabled = currentIndex >= totalCards - cardsPerView;
// }

// nextBtn.addEventListener('click', () => {
//     if (currentIndex < totalCards - cardsPerView) {
//         currentIndex++;
//         updateCarousel();
//     }
// });

// prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//     }
// });

// // Initial update
// updateCarousel();

// // Optional: recalc on window resize
// window.addEventListener('resize', updateCarousel);