
let productContainer = document.querySelector('.productContainer');
let news = document.querySelector(".news");

let newsContainer = document.createElement('div');
newsContainer.classList.add("grid_container");




newsContainer.innerHTML = `<div class="news_box">
                           <h1 class="header">NEW PRODUCTS</h1>
                           <li><a href="#">View all</a></li>
                           <li><a href="#">clothing</a></li>
                           <li><a href="#">Dress</a></li>
                           <li><a href="#">Shoes</a></li>
                           <li><a href="#">Activewear</a></li>
                           <li><a href="#">Tops</a></li>
                           <li><a href="#">Face + Body</a></li>
                           <li><a href="#">Accessories</a></li>
                           <li><a href="#">Skirts</a></li>
                           <li><a href="#">Shorts</a></li>
                           <li><a href="#">Lingerie and Nightwear</a></li>
                           
                            </div>

                           <div class="news_box">

                           <h1 class="header">TRENDING</h1>
                           <div class="trending"><img src="womenred5.jpeg"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="normalcloth.png"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="mencoat.jpeg"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="menwomen1.webp"><span><a href="#">GUCCI</a></span></div>
                           <div class="trending"><img src="normalcloth2.jpeg"><span><a href="#">GUCCI</a></span></div>
                             
                           </div>

                           <div class="news_box">
                           <h1 class="header">BRAND DROPS</h1>

                           <div class="nest_brand">

                           <div><a href="#">
                           <img class="brand-image" src="womenred5.jpeg"></img>
                           <p>Star Girl</p>
                           </a>
                           </div>

                           <div><a href="#">
                           <img class="brand-image" src="africaman3.jpg">
                           <p>Senior Man</p>
                           </a>

                           </div>

                           <div><a href="#">
                           <img class="brand-image" src="normalcloth1.png">
                           <p>My style</p>
                           </a>
                           </div>

                           <div><a href="#">
                           <img class="brand-image" src="men1.jpg">
                           <p>Fresh boy</p>
                           </a>

                           </div>

                           
                           </div> 


                           </div>

                           <div class="news_box">
                           <h1 class="header">NEW EDITS</h1>

                             
                           <div class="gallery_edit">
                           <div><img class="galleries" src="shoe8.jpeg"></div>
                           <div><img class="galleries" src="shoe6.jpeg"></div>
                           <div><img class="galleries" src="shoe5.jpeg"></div>
                           <div><img class="galleries" src="shoe4.jpeg"></div>
                           <div><img class="galleries" src="shoe3.jpg"></div>
                           <div><img class="galleries" src="shoe2.jpeg"></div>
                           <div><img class="galleries" src="couple1.jpeg"></div>
                           <div><img class="galleries" src="couple2.jpg"></div>
                           <div><img class="galleries" src="couple3.jpg"></div>
                           <div><img class="galleries" src="couple5.jpg"></div>
                           <div><img class="galleries" src="couple6.jpg"></div>
                           <div><img class="galleries" src="women1.jpg"></div>
                           <div><img class="galleries" src="women2.jpg"></div>
                           <div><img class="galleries" src="women3.jpeg"></div>
                           <div><img class="galleries" src="women4.jpeg"></div>
                           <div><img class="galleries" src="women7.jpg"></div>
                           <div><img class="galleries" src="womenred.webp"></div>
                           <div><img class="galleries" src="womenred2.jpeg"></div>
                           <div><img class="galleries" src="womenred3.jpg"></div>
                           <div><img class="galleries" src="womenred5.jpeg"></div>
                           <div><img class="galleries" src="mencoat4.jpg"></div>
                           <div><img class="galleries" src="mencoat.jpeg"></div>
                           <div><img class="galleries" src="mencoat2.jpeg"></div>
                           <div><img class="galleries" src="men5.jpeg"></div>
                           <div><img class="galleries" src="men4.jpeg"></div>
                           <div><img class="galleries" src="menwomen1.webp"></div>
                           <div><img class="galleries" src="normalcloth.png"></div>
                           <div><img class="galleries" src="normalcloth2.jpeg"></div>
                           <div><img class="galleries" src="normalcloth3.jpg"></div>
                           <div><img class="galleries" src="princess.jpg"></div>

                           </div>
                           </div>`;


                           

/*
//to be modified later
let gallery_edit = document.querySelector('.gallery_edit');
let galleries = document.createElement('img');
galleries.classList.add('galleries');

let images = [
         "shoe7.jpeg","shoe3.jpg","shoe1.jpeg","shoe2.jpeg"




];

for(let i = 0; i < images.length; i++){

}*/
news.onclick = () =>{
    productContainer.appendChild(newsContainer);
    news.classList.add('highlight');
    if(newsContainer.style.display === 'none' && productContainer.style.display ==="none"){
        newsContainer.style.display = "grid";
        productContainer.style.display = "grid";
    }
    else{
        newsContainer.style.display = "none";
        productContainer.style.display = "none";
        news.classList.remove('highlight');
    }

}

