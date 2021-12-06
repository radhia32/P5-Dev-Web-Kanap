fetch("http://localhost:3000/api/products")

       .then (response => {
               return response.json();
        })
        .then(data => {
                console.log(data);
        // cree la balise section
        const baliseSection = document.createElement('section'); 
       // inser à la balise section classe .items
        baliseSection.classList.add('items'); 
        // ajoute  balise section id #items
        baliseSection.id = 'items'; 
        // main qui a la classe limitedWidthBlock
        const selectDivLimitedWidthBlock = document.querySelector("main .limitedWidthBlock"); 
       // inser la balise section comme enfant de la div class limitedWithBlock
        selectDivLimitedWidthBlock.appendChild(baliseSection); 
        
         // chaque canapé dans le tableau          
        for (let kanap of data) { 
          // INSER "a" 
         const baliseA = document.createElement('a'); 
           
        baliseSection.appendChild(baliseA); 
        //ajout attribut href pour envoyé sur la page produit au clique 
         baliseA.href = `./product.html?id=${kanap._id}`; 
        
         // créé balise article
         const baliseArticle = document.createElement('article'); 
          // ajout balise article comme enfant de balise A
         baliseA.appendChild(baliseArticle); 
        
        // créé balise img
         const baliseImg = document.createElement('img');

         // récupère urlimage de chaque élément 
         baliseImg.src = kanap.imageUrl; 
        
         // récupère le alt 
         baliseImg.alt = kanap.altTxt; 
       
        // dans balise article ajout de la balise img
         baliseArticle.appendChild(baliseImg); 
         
        // créé balise h3
         const baliseh3 = document.createElement('h3'); 
        
         // inserla classe .productName à la balise
         baliseh3.classList.add('productName'); 
         
        // la balise h3 sur le DOM dans la balise articl
        baliseArticle.appendChild(baliseh3); 
        
         baliseh3.innerHTML = kanap.name; 
         // récupère pour chaque élément le name et l'insère dans h3
 
         const baliseP = document.createElement('p');
         baliseP.classList.add('productDescription');
         baliseArticle.appendChild(baliseP);
         baliseP.innerHTML = kanap.description
 
        }})

  








