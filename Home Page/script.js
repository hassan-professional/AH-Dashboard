async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  console.log(data)
  return data
}


async function createCards() {
    const data = await getProducts()
        const cardbox = document.getElementsByClassName("products")[0]
        const list = document.querySelector(".list ul")
        data.forEach(item => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.style.display = "flex"
            card.style.flexDirection = "column"
            card.style.justifyContent = "space-between"
            card.style.alignItems = "center"
            card.style.gap = "10px"

            card.innerHTML = `
                            <img src="${item.image}" width="100px" height="100px" alt="">
                            <h2>${item.title}</h2>
                            <p>${item.description.trim().slice(0, 150)}...</p>
                            <p class="price">Price: ${item.price} $</p>
                            <div class="bottomButtons" style="display: flex; flex-direction: row; justify-content: space-between; gap: 10px;">
                                <button class="view">View</button>
                                <button class="add to cart">Add</button>
                            </div>`
            cardbox.appendChild(card)

        })
}
createCards()
async function createList() {
    const data = await getProducts()
    const list = document.querySelector(".list ul")
    data.forEach(item => {
        const li = document.createElement("li")
        li.classList.add("listItem")
        li.innerHTML = `<a href="">${item.title}</a>`
        list.appendChild(li)
    })
}
createList()

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

const SettingBtn = document.getElementsByClassName("settingsLink")[0]
SettingBtn.addEventListener("click", () => {
    window.location.href = "../Settings/index.html"
})

const ProfileBtn = document.getElementsByClassName("profileLink")[0]
ProfileBtn.addEventListener("click", () => {
    window.location.href = "../Profile/index.html"
})

// const ProductLink = document.getElementsByClassName("productsLink")[0]
// const filterBtn = document.getElementsByClassName("filter")[0]
// filterBtn.addEventListener("click", () => {
//     window.location.href = "../Products/index.html"
// })
// ProductLink.addEventListener("click", () => {
//     window.location.href = "../Products/index.html"
// })


// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));


// // let quote = document.querySelector(".quote");
// async function getQuote(){
//     let url = "https://api.quotable.io"
//     try{
//         let response = await fetch(url);
//         if(!response.ok){
//             throw new Error("Network response was not ok");
//         }
//         let data = await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getQuote();
// fetch('https://cdn.jsdelivr.net/gh/SH20RAJ/OpenDictionaryAPI/data/english/hello.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// fetch('https://allinoneapi.vercel.app/movies')
//   .then(res => res.json())
//   .then(data => console.log(data));

// // Get inspiring quotes
// fetch('https://allinoneapi.vercel.app/quotes')
//   .then(res => res.json())
//   .then(data => console.log(data));
// async function fetchProducts() {
//   try {
    
//     // Fetch movies as your "products"
//     let response = await fetch('https://allinoneapi.vercel.app/movies');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     let movies = await response.json();
    
//     // Take first 6 movies and display as cards
//     console.log(movies.slice(0, 6));
    
//   } catch(error) {
//     console.error("Fetch failed:", error.message);
//     document.getElementsByClassName("quote")[0].innerHTML = 
//       "<p class='error'>Failed to load products. Please try again.</p>";
//   }
// }

// function displayMovies(movies) {
//   let container = document.getElementsByClassName("quote")[0];
//   container.innerHTML = movies.map(movie => `
//     <div class="product-card">
//       <h3>${movie.title || movie.name}</h3>
//       <p>Year: ${movie.year || 'N/A'}</p>
//       <button class="add-to-cart">Add to Cart</button>
//     </div>
//   `).join('');
// }

// // Call it when dashboard loads
// fetchProducts();

// async function fetchQoutes() {
//     try{
//         let response = await fetch("https://quoteslate.vercel.app/api/tags")
//         if(!response.ok){
//             throw new Error("Network response was not ok")
//         } else{
//             let data = await response.json();
//             console.log(data)
//         }
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// fetchQoutes();
