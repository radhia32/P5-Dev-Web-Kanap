let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id)

fetch("http://localhost:3000/api/products/"+id)

.then (response => {
    return response.json();})
  
.then(data => {
    console.log(data);

    const image = document.getElementsByClassName('item__img');
    image[0].innerHTML = `<img id ="image" src="${data.imageUrl}" alt="${data.altTxt}">`;
    imageURL = data.imageUrl;
    imageAlt = data.altTxt;
    const title = document.getElementById('title');
    title.innerHTML = `<h1 id="name" >${data.name}</h1>`;
    const price = document.getElementById('price');
    price.setAttribute("id","price");
    price.innerText =  `${data.price}`;
    const description = document.getElementById('description');
    description.setAttribute("id","description");
    description.innerText = `${data.description}`;
    const colors = document.getElementById('colors');
    colors.setAttribute("id","colors");

    // choix des couleurs
    for (number in data.colors) {
      colors.options[colors.options.length] = new Option(
        data.colors[number],
        data.colors[number]
      );
    }
  })
    
  // Création de l'événement au clique pour ajouter au panier
   const button = document.querySelector('#addToCart');
   button.addEventListener("click", function() {
 
   console.log(document.querySelector("#colors").value)
    let selectedProduct = { 
    selectedImage : document.getElementById("image").src, 
    selectedAlttxt : document.getElementById ("image").alt,
    selectedName : document.getElementById("name").textContent,
    selectedPrice : document.getElementById("price").textContent,
    selectedId : id,
    selectedColors : document.querySelector("#colors").value,
    selectedQuantity : parseInt(document.querySelector("#quantity").value),

}
   let panier = localStorage.getItem("panier");
   //console.log(selectedProduct);
  // console.log(panier)
     if (panier === null ) {
        panier = [];
    } else {
        panier = JSON.parse (panier);
    }

    let notFound = true

    for (let i = 0; i < panier.length; i++) {
        console.log(panier[i].selectedId)
        console.log(selectedProduct.selectedId)
        console.log(panier[i].selectedColors)
        console.log(selectedProduct.selectedColors)
  
    if (panier[i].selectedId === selectedProduct.selectedId && panier[i].selectedColors === selectedProduct.selectedColors) {
        panier[i].selectedQuantity += selectedProduct.selectedQuantity;
        console.log(panier[i].selectedQuantity)
        console.log(selectedProduct.selectedQuantity)
        notFound = false;  
        console.log("trouvé") 
        }
    }
    
    if (notFound) {panier.push(selectedProduct)}
   
    localStorage.setItem("panier", JSON.stringify(panier))

     alert('Le produit a bien été ajouté au panier')}

    )
