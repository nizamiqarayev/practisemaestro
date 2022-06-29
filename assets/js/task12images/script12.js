
const elem = document.getElementById("imageAmount");

const imageURL=[]

elem.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { 
      event.preventDefault();
        if(parseInt(elem.value)<=2 || parseInt(elem.value)>10){
            alert('Please enter a valid number')
        }
        else{
            
            document.getElementById('startdiv').style.display='none'
            console.log(parseInt(elem.value))
             imagesRenderer(parseInt(elem.value));
            
        }
        

    }
  });


async function imagesRenderer(n){
    var API_KEY = '28327575-7dbfd7798263f23759354db99';
var URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=${n}&image_type=photo&pretty=true&q=penguin`
 await fetch(URL)
 .then(response => response.json())
 .then(data => imagesData=(data.hits))
 .then(()=>imagesDisplayer())    

utilityRenderer()
 } 
 

function imagesDisplayer(){
    const imagesdiv=document.getElementById('images')
    imagesdiv.style.display='grid'
    const imagesURL=[]
    for (let index = 0; index < imagesData.length; index++) {
        const newdiv=document.createElement('div')
        newdiv.id='cell'+index
        newdiv.setAttribute('class','imageCell')
        newdiv.style.backgroundImage=`url(${imagesData[index].largeImageURL})`
        imagesdiv.appendChild(newdiv)
        imageURL.push(imagesData[index].largeImageURL)
    }
    

 }



function imagesDisplayerAfterAdd(n, url,imagesUrl){
    const imagesdiv=document.getElementById('images')
    imagesdiv.innerHTML=''
    imagesdiv.style.display='grid'
    

    console.log("------------")
    console.log(n)
    console.log(url);
    console.log(imagesUrl)

   imagesUrl.splice(n,0,url)
   console.log("------------")

   console.log(imagesUrl)
   const selectionupdate=document.getElementById('selectimg')
   const option = document.createElement("option");
        option.value = parseInt(n)+parseInt(imagesUrl.length)-1;
        console.log(option.value)
        option.text = parseInt(n)+parseInt(imagesUrl.length);
        selectionupdate.appendChild(option)
    for (let index = 0; index < imagesUrl.length; index++) {
        const newdiv=document.createElement('div')
        newdiv.id=index
        newdiv.setAttribute('class','imageCell')
        newdiv.style.background=`url(${imagesUrl[index]})`
        imagesdiv.appendChild(newdiv)

        
    }
 }


function imageEdit(n, url,imagesUrl){
    document.getElementById(`cell${n}`).style.backgroundImage=`url(${url})`

}

function deleteImage(n){
    console.log(document.getElementById(`cell${n}`));
    document.getElementById(`cell${n}`).style.display='none'
    
    
}

function editCellSize(n,height,width){
    document.getElementById(`cell${n}`).style.height=`${height}`
    document.getElementById(`cell${n}`).style.width=`${width}`
}

function utilityRenderer(){
    const utilitydiv=document.getElementById('utility')
    utilitydiv.style.display='flex'
    
   

    const addNewImgDiv=document.createElement('div')

    addNewImgDiv.setAttribute('class','newImgInputDiv')

    const newImgDivSelect=document.createElement('select')
    newImgDivSelect.id="selectimg"
    newImgDivSelect.setAttribute('class','selectimg')
    for (let i = 0; i<imageURL.length; i++) {
        console.log(imageURL[i])
        var option = document.createElement("option");
        option.value = i;
        option.text = i+1;
        newImgDivSelect.appendChild(option);
    }

    const newImgDivUrlInput=document.createElement('input')
    newImgDivUrlInput.setAttribute('type','url')
    newImgDivUrlInput.id='inputUrl'
    newImgDivUrlInput.setAttribute('class','inputUrl')

    const newImgDivButton=document.createElement('button')
    newImgDivButton.setAttribute('type','button')
    newImgDivButton.id='addbutton'
    newImgDivButton.setAttribute('class','button')
    newImgDivButton.innerText='Add...'
    newImgDivButton.addEventListener('click',function(){
        
        imagesDisplayerAfterAdd(document.getElementById('selectimg').value,document.getElementById('inputUrl').value,
        imageURL)
    })
   



    addNewImgDiv.appendChild(newImgDivSelect)
    addNewImgDiv.appendChild(newImgDivUrlInput)
    addNewImgDiv.appendChild(newImgDivButton)




    const editImgCellBackground=document.createElement('div')

    editImgCellBackground.setAttribute('class','newImgInputDiv')

    const editDivSelect=document.createElement('select')
    editDivSelect.id="editselectimg"
    editDivSelect.setAttribute('class','selectimg')
    for (let i = 0; i<imageURL.length; i++) {
        console.log(imageURL[i])
        var option = document.createElement("option");
        option.value = i;
        option.text = i+1;
        editDivSelect.appendChild(option);
    }

    const editDivInput=document.createElement('input')
    editDivInput.setAttribute('type','url')
    editDivInput.id='inputEditUrl'
    editDivInput.setAttribute('class','inputUrl')

    const editDivButton=document.createElement('button')
    editDivButton.setAttribute('type','button')
    editDivButton.id='editbutton'
    editDivButton.setAttribute('class','button')
    editDivButton.innerText='Edit...'
    editDivButton.addEventListener('click',function(){
        imageEdit(document.getElementById('editselectimg').value,document.getElementById('inputEditUrl').value,
        imageURL)

    })

    editImgCellBackground.appendChild(editDivSelect)
    editImgCellBackground.appendChild(editDivInput)
    editImgCellBackground.appendChild(editDivButton)



    
   
    const deleteImg=document.createElement('div')

    deleteImg.setAttribute('class','newImgInputDiv')

    const deleteImgSelect=document.createElement('select')
    deleteImgSelect.id="deleteImgSelect"
    deleteImgSelect.setAttribute('class','selectimg')
    for (let i = 0; i<imageURL.length; i++) {
        console.log(imageURL[i])
        var option = document.createElement("option");
        option.value = i;
        option.text = i+1;
        deleteImgSelect.appendChild(option);
    }
    const deleteDivButton=document.createElement('button')
    deleteDivButton.setAttribute('type','button')
    deleteDivButton.id='deleteDivButton'
    deleteDivButton.setAttribute('class','button')
    deleteDivButton.innerText='Delete...'
    deleteDivButton.addEventListener('click',function(){
        deleteImage(document.getElementById('deleteImgSelect').value)
    })

    deleteImg.appendChild(deleteImgSelect)
    deleteImg.appendChild(deleteDivButton)




    const editImgCellSize=document.createElement('div')


    editImgCellSize.setAttribute('class','newImgInputDiv')

    const editImageCellSizeSelect=document.createElement('select')
    editImageCellSizeSelect.id="editImageCellSizeSelect"
    editImageCellSizeSelect.setAttribute('class','selectimg')
    for (let i = 0; i<imageURL.length; i++) {
        console.log(imageURL[i])
        var option = document.createElement("option");
        option.value = i;
        option.text = i+1;
        editImageCellSizeSelect.appendChild(option);
    }


    const editImageCellSizeHeight=document.createElement('input')
    editImageCellSizeHeight.setAttribute('type','number')
    editImageCellSizeHeight.setAttribute('class','inputUrl')
    editImageCellSizeHeight.id='editImageCellSizeHeight'

    const editImageCellSizeWidth=document.createElement('input')
    editImageCellSizeWidth.setAttribute('type','number')
    editImageCellSizeWidth.setAttribute('class','inputUrl')
    editImageCellSizeWidth.id='editImageCellSizeWidth'


    const editCellSizeButton=document.createElement('button')
    editCellSizeButton.setAttribute('type','button')
    editCellSizeButton.id='editCellSizeButton'
    editCellSizeButton.setAttribute('class','button')
    editCellSizeButton.innerText='Change Size...'
    editCellSizeButton.addEventListener('click',function(){
        editCellSize(document.getElementById('editImageCellSizeSelect').value,document.getElementById('editImageCellSizeHeight').value,
        document.getElementById('editImageCellSizeWidth').value)
    })

    editImgCellSize.appendChild(editImageCellSizeSelect)
    editImgCellSize.appendChild(editImageCellSizeHeight)
    editImgCellSize.appendChild(editImageCellSizeWidth)
    editImgCellSize.appendChild(editCellSizeButton)


   





    utilitydiv.appendChild(addNewImgDiv)
    utilitydiv.appendChild(editImgCellBackground)
    utilitydiv.appendChild(deleteImg)
    utilitydiv.appendChild(editImgCellSize)

}
 
 