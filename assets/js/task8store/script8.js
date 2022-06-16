

const icondiv=document.getElementById('iconsdiv')
const mainImgDiv=document.getElementById('mainimgdiv')
const infodiv=document.getElementById('infodiv')

const data={
    title:"Hollow Knight",
    version:"Game of The Year Edition",
    images:['https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1625363925',
    'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=1500w',
    'https://i.ytimg.com/vi/4wR_FHpA-zU/maxresdefault.jpg',
    'https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/ncom/en_US/games/switch/h/hollow-knight-switch/Video/posters/Hollow_Kight_eShop_Trailer_ENG_US',
    ],
    score:5,
    price:20,
    description:"Hollow Knight is a 2017 Metroidvania action-adventure game developed and published by independent developer Team Cherry. In the game, the player controls the Knight, a nameless insectoid warrior. The Knight explores Hallownest, a fallen kingdom plagued by a supernatural disease."

}
console.log[data.images]





window.addEventListener('load',function(){
    icons(data.images)
    mainImgSet(0,data.images)
    infodivcreate()
})

function icons(imgArrIndexes){
    
    for(var i=1; i<imgArrIndexes.length; i++){
        const icons=document.createElement("img");
        icons.id=i;
        icons.classList.add("icon")
        icons.src=imgArrIndexes[i];
        icons.setAttribute('onclick',`mainImgChange("${icons.src}","${icons.id}")`)
        console.log("urls is"+icons.src)
        icondiv.appendChild(icons)
    }
}
function mainImgSet(pic,imgArrIndexes){
    const mainimg=document.createElement("img");
    mainimg.id="mainimg"
    mainimg.classList.add("mainimg")
    mainimg.src=imgArrIndexes[pic];
    console.log(imgArrIndexes[pic])
    mainImgDiv.appendChild(mainimg)
 
}
function mainImgChange(src,iconid){
    const currenticon=document.getElementById(iconid)
    const currentmain=document.getElementById('mainimg')

    const currenticonsrc=currenticon.src
    currenticon.src=currentmain.src
    currentmain.src=currenticonsrc
    mainImgDiv.appendChild(currentmain)
}

function infodivcreate(){
    let review=""
    for(var i=0; i<data.score;i++){
        review+='<img src="../assets/images/task8store/Vector.png"></img>'
    }
    infodiv.innerHTML=`
    <div><h1>${data.title}</h1></div>
     <div><div><h3>${data.version}</h3></div></div>
     <div>${review}</div>
                <div class="price">
                    <p class="p1">Price</p>
                    <p class="p2">${data.price} $</p>
                </div>
                <div><p>${data.description}</p></div>
                <div class="buttons">
                    <a href="#" id="cart"><i class="fa-solid fa-bag-shopping"></i>  Add to Cart</a>
                    <a href="#" id="now">Buy Now</a></div>
    `;
}

// 
// function images