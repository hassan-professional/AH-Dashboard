
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));


// let quote = document.querySelector(".quote");
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
