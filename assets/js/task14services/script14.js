const body= document.querySelector('body')


fetch("../../../assets/data/task14/data.json")
.then(response=>response.json())
.then(data=>{
   gridloader(data)
   console.log(data)
})

function gridloader(data){
    const griddiv=document.getElementById('griddiv')
    console.log(data.data.services[0])
    for(let i=0;i<data.data.services.length;i++){
        data.data.services[i]
        const primarycelldiv=document.createElement('div')
        primarycelldiv.id=`cell${i}`
        primarycelldiv.setAttribute('class','primarycelldiv')

        const celltopdiv=document.createElement('div')
        celltopdiv.id=`topcell${i}`
        celltopdiv.setAttribute('class','celltopdiv')
        console.log(data.data.services[i].cover_img.publicUrl)

        celltopdiv.style.backgroundImage=`url('${data.data.services[i].cover_img.publicUrl}')`

        celltopdiv.addEventListener("click",function(){
                    
            displayerchanger(document.getElementById(`botcell${i}`))

        


      
        })

        const celltopdivtextdiv=document.createElement('div')
        celltopdivtextdiv.id=`topcelltextdiv${i}`
        celltopdivtextdiv.setAttribute('class','celltopdivtextdiv')

        const celltopdivtextdivH3=document.createElement("h2")
        celltopdivtextdivH3.setAttribute('class','celltopdivtextdivH3')
        celltopdivtextdivH3.innerText=`${data.data.services[i].title_en}`

        celltopdivtextdiv.appendChild(celltopdivtextdivH3)

        celltopdiv.appendChild(celltopdivtextdiv)


        const cellbotdiv=document.createElement('div')
        cellbotdiv.id=`botcell${i}`
        cellbotdiv.setAttribute('class','cellbotdiv')

        for(let j=0;j<data.data.services[i].subServices.length;j++){
            const newa=document.createElement('a')
            newa.setAttribute('class','subserviceA')
            newa.innerText=`${data.data.services[i].subServices[j].title_en}`
            cellbotdiv.appendChild(newa)
        }


        primarycelldiv.appendChild(celltopdiv)
        primarycelldiv.appendChild(cellbotdiv)

        griddiv.appendChild(primarycelldiv)

    }
}




function displayerchanger(div){
    if(window.getComputedStyle(div).display=="none"){
        div.style.display="flex"
        console.log("opt1")

    }
    else{
        div.style.display="none"
        console.log("opt2")
    }
}