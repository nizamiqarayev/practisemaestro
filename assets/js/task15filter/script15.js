const body= document.querySelector('body')


fetch("../../../assets/data/task15/allProsData.json")
.then(response=>response.json())
.then(data=>{
   gridloader(data)
   console.log(data)
})


function gridloader(data){
   const griddiv= document.getElementById('griddiv')
    for (let index = 0; index < data.data.taskers.length; index++) {

        const divcell=document.createElement('div')
        divcell.setAttribute('class','divcell')
         divcell.id=`cell${index}`  
        
        const divcellheader=document.createElement('div')
        divcellheader.setAttribute('class','divcellheader')
        divcellheader.id=`header${index}`

        const divcellheadernameandrating=document.createElement('div')
        divcellheadernameandrating.setAttribute('class','divcellheader')
        divcellheadernameandrating.id=`divcellheadernameandrating${index}`

        const divcellheadername=document.createElement('h2')
        divcellheadername.setAttribute('class','divcellheadername')
        divcellheadername.id=`divcellheadername${index}`

        divcellheadername.innerHTML=`            <img src="../assets/images/task15filter/Oval.png" />
        ${data.data.taskers[index].user.name} ${data.data.taskers[index].user.surname}`


        
       
        const divcellheaderrating=document.createElement('div')
        divcellheaderrating.setAttribute('class','divcellheaderrating')
        divcellheaderrating.id=`divcellheaderrating${index}`

        divcell.setAttribute('rating',`${data.data.taskers[index].averageRating}`)

        for (let i = 0; i < 5; i++) {
            if(i<=parseInt(data.data.taskers[index].averageRating)){
                divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+'<span class="fa fa-star checked"></span>'
            }     
            else{
                divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+'<span class="fa fa-star unchecked"></span>'
            }       
        }

        divcellheaderrating.innerHTML=divcellheaderrating.innerHTML

        



        divcellheadernameandrating.appendChild(divcellheadername)
        divcellheadernameandrating.appendChild(divcellheaderrating)

        divcellheader.appendChild(divcellheadernameandrating)

        const achievements=document.createElement('div')
        achievements.setAttribute('class','achievements')
        achievements.id=`achievements${index}`



        let newpro

        if(data.data.taskers[index].startDate!=null){
            const timedate=data.data.taskers[index].startDate.split('-')
            const date=new Date()
            if((date.getMonth()-parseInt(timedate[1])>1)&&(date.getFullYear()-parseInt(timedate[0])>1)){
                newpro=true
            }     
            else{
                newpro=false
            }    

        }
        else{
            newpro=true
        }


        



        achievements.innerHTML=`
        <div class="gapper"><i class="fa-solid fa-circle-check"></i>
        <p>${data.data.taskers[index].completedTasks}</p></div>
        `

        divcell.setAttribute('tasks',`${data.data.taskers[index].completedTasks}`)

       
        if(data.data.taskers[index].eliteTasker){
            achievements.innerHTML=achievements.innerHTML+`  
            <div class="gapper"><i class="fa-solid fa-hashtag"></i></i>
            <p>TopPro</p></div>`
            

            divcell.setAttribute('toppro','toppro')
        }
        else{
            divcell.setAttribute('toppro','nottoppro')

        }



        if(newpro){
            achievements.innerHTML=achievements.innerHTML+`  
            <div class="gapper"><i class="fa-solid fa-heart"></i></i>
            <p>NewPro</p></div>`


            divcell.setAttribute('pro','newpro')

        }
        else{
            achievements.innerHTML=achievements.innerHTML+`  
            <div class="gapper"><i class="fa-solid fa-heart"></i></i>
            <p>Pro</p></div>`


            divcell.setAttribute('pro','pro')

        }

        console.log(data.data.taskers[index].supervisor)
        if(data.data.taskers[index].supervisor){
            divcell.setAttribute('supervisor','supervisor')
        }
        else{
            divcell.setAttribute('supervisor','nosupervisor')
        }


      
        // <div><i class="fa-solid fa-circle-check"></i>
        // <p>${data.data.taskers[index].completedTasks}</p></div>



        const description=document.createElement('div')
        description.setAttribute('class','description')
        description.id=`description${index}`

        description.innerHTML=`<p>${data.data.taskers[index].bio}</p>`


        const divcellfooter=document.createElement('div')
        divcellfooter.setAttribute('class','divcellfooter')
        divcellfooter.id=`divcellfooter${index}`

        divcellfooter.innerHTML=`<a href="#">view profile</a>
        <div><p>$35</p>
        <a href="#">Book now</a></div>
        
        `


        divcell.appendChild(divcellheader)
        divcell.appendChild(achievements)
        divcell.appendChild(description)
        divcell.appendChild(divcellfooter)


        



        griddiv.appendChild(divcell)
        // console.log(divcell)





    }


    
}

const filterinput=Array.from(document.getElementsByName('filter'))
console.log(filterinput)

let checkedvalues=[]
filterinput.forEach(function(checkbox){
    checkbox.addEventListener('change',(e) => {
        if (e.target.checked) {
            
            checkedvalues.push(checkbox.value)


                fetch("../../../assets/data/task15/allProsData.json")
        .then(response=>response.json())
        .then(data=>{
           filtergrid(data,checkedvalues)
        //    console.log(data)
        })
        } else {
            
            checkedvalues.splice(checkedvalues.indexOf(checkbox.value),1)
            fetch("../../../assets/data/task15/allProsData.json")
            .then(response=>response.json())
            .then(data=>{
               filtergrid(data,checkedvalues)
            })
            if(checkedvalues.length==0){
                fetch("../../../assets/data/task15/allProsData.json")
                .then(response=>response.json())
                .then(data=>{
                   gridloader(data)
                })            }
            


        }
      });
    })


    



    let tempfilterarr=[]

function filtergrid(data,filteroptions){
    const cells=Array.from(document.getElementsByClassName('divcell'))

    console.log(data)

    
    

    console.log(filteroptions)




    let tempfilterarr=[]

    


    for (let index = 0; index < filteroptions.length; index++) {
        
        const griddiv= document.getElementById('griddiv')
        if(tempfilterarr.length!=0){
            const temparr=[]
            console.log(`${index} `+`${tempfilterarr}`)

                    tempfilterarr.forEach(element => {
                        console.log(element)
                        let toppro=(element.eliteTasker) ? true:false
        
                        let newpro
                        if(element.startDate!=null){
                            const timedate=data.data.taskers[index].startDate.split('-')
                            const date=new Date()
                            if((date.getMonth()-parseInt(timedate[1])>1)&&(date.getFullYear()-parseInt(timedate[0])>1)){
                                newpro=true
                            }     
                            else{
                                newpro=false
                            }    
                
                        }
                        else{
                            newpro=true
                        }

        
                        let pro= (newpro)? false:true
                            
                        let supervisor=element.supervisor
                        console.log('newpro '+newpro)
                        console.log('pro '+pro)
                        console.log('supervisor '+supervisor)

        
                        const tasks=element.completedTasks
                        const rating=element.averageRating

                        console.log("filter:  "+`${filteroptions[index]}`);
        
                        if((filteroptions[index]=="toppro" && toppro==true)||(filteroptions[index]=="newpro" && newpro==true)||(filteroptions[index]=="supervisor" && supervisor==true)||(filteroptions[index]=="pro" && pro==true)){

                            temparr.push(element)
                            console.log(temparr);
                        }
                        else{
                            console.log('temparr    '+`${temparr}`);

                        }
                        tempfilterarr=temparr

        
        
                    });
                
            
        }
        else{
            
                data.data.taskers.forEach(element => {
                    let toppro=(element.eliteTasker) ? true:false
    
                    let newpro
                    if(element.startDate!=null){
                        const timedate=data.data.taskers[index].startDate.split('-')
                        // console.log(timedate);
                        const date=new Date()
                        // console.log(date.getMonth()-parseInt(timedate[1]));

                        if((date.getMonth()-parseInt(timedate[1])>1)&&(date.getFullYear()-parseInt(timedate[0])>1)){
                            // console.log('its a newbie '  +date.getMonth()-parseInt(timedate[1]))
                            newpro=true
                        }     
                        else{

                            newpro=false
                        }    
            
                    }
                    else{
                        newpro=true
                    }
    
                    let pro= (newpro)? false:true
                        
                    let supervisor=element.supervisor
                    console.log('newpro '+newpro)
                    console.log('pro '+pro)
                    console.log('supervisor '+supervisor)
    
                    const tasks=element.completedTasks
                    const rating=element.averageRating
    
                    if((filteroptions[index]=="toppro" && toppro==true)||(filteroptions[index]=="newpro" && newpro==true)||(filteroptions[index]=="supervisor" && supervisor==true)||(filteroptions[index]=="pro" && pro==true)){

                        console.log(element)
                    
                        tempfilterarr.push(element)

                       
                    }

                });
        }
       

    }
    console.log(tempfilterarr);

    filtereddivgenerator(tempfilterarr)

  
}
function filtereddivgenerator(filteredcellsraw){
    const griddiv= document.getElementById('griddiv')
    console.log(griddiv)
    griddiv.innerHTML=``
    const filteredcells=filteredcellsraw
    console.log(filteredcells);

    const tasksortselect=document.getElementById('sortbytasks')
    console.log(tasksortselect.value)
        if(tasksortselect.value=='ascending'){
            
             filteredcells.sort((a, b)=>{return b.completedTasks - a.completedTasks})
            console.log('sorted');
             console.log(filteredcells)
        }
        if(tasksortselect.value=='descending'){
            console.log('sorted by descent');

            filteredcells.sort((a, b)=>{return a.completedTasks - b.completedTasks})
            console.log(filteredcells)

        }
    

    
    for (let index = 0; index < filteredcells.length; index++) {
        const divcell=document.createElement('div')
         divcell.setAttribute('class','divcell')
          divcell.id=`cell${index}`  
         
         const divcellheader=document.createElement('div')
         divcellheader.setAttribute('class','divcellheader')
         divcellheader.id=`header${index}`
 
         const divcellheadernameandrating=document.createElement('div')
         divcellheadernameandrating.setAttribute('class','divcellheader')
         divcellheadernameandrating.id=`divcellheadernameandrating${index}`
 
         const divcellheadername=document.createElement('h2')
         divcellheadername.setAttribute('class','divcellheadername')
         divcellheadername.id=`divcellheadername${index}`
 
         divcellheadername.innerText=`${filteredcells[index].user.name} ${filteredcells[index].user.surname} (${filteredcells[index].supervisor})`
 
 
         
        
         const divcellheaderrating=document.createElement('div')
         divcellheaderrating.setAttribute('class','divcellheaderrating')
         divcellheaderrating.id=`divcellheaderrating${index}`
 
         divcell.setAttribute('rating',`${filteredcells[index].averageRating}`)
 
         for (let i = 0; i < 5; i++) {
             if(i<=parseInt(filteredcells[index].averageRating)){
                 divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+'<span class="fa fa-star checked"></span>'
             }     
             else{
                 divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+'<span class="fa fa-star"></span>'
             }       
         }
 
         divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+`<p>(${filteredcells[index].averageRating})</p>`
 
         
 
 
 
         divcellheadernameandrating.appendChild(divcellheadername)
         divcellheadernameandrating.appendChild(divcellheaderrating)
 
         divcellheader.appendChild(divcellheadernameandrating)
 
         const achievements=document.createElement('div')
         achievements.setAttribute('class','achievements')
         achievements.id=`achievements${index}`
 
 
 
         let newpro
 
         if(filteredcells[index].startDate!=null){
             const timedate=filteredcells[index].startDate.split('-')
             const date=new Date()
             if((date.getMonth()-parseInt(timedate[1])>1)&&(date.getFullYear()-parseInt(timedate[0])>1)){
                 newpro=true
             }     
             else{
                 newpro=false
             }    
 
         }
         else{
             newpro=true
         }
 
 
         
 
 
 
         achievements.innerHTML=`
         <div><i class="fa-solid fa-circle-check"></i>
         <p>${filteredcells[index].completedTasks}</p></div>
         `
 
         divcell.setAttribute('tasks',`${filteredcells[index].completedTasks}`)
 
        
         if(filteredcells[index].eliteTasker){
             achievements.innerHTML=achievements.innerHTML+`  
             <div><i class="fa-solid fa-circle-check"></i>
             <p>TopPro</p></div>`
             
 
             divcell.setAttribute('toppro','toppro')
         }
         else{
             divcell.setAttribute('toppro','nottoppro')
 
         }
 
 
 
         if(newpro){
             achievements.innerHTML=achievements.innerHTML+`  
             <div><i class="fa-solid fa-circle-check"></i>
             <p>NewPro</p></div>`
 
 
             divcell.setAttribute('pro','newpro')
 
         }
         else{
             achievements.innerHTML=achievements.innerHTML+`  
             <div><i class="fa-solid fa-circle-check"></i>
             <p>Pro</p></div>`
 
 
             divcell.setAttribute('pro','pro')
 
         }
 
         if(filteredcells[index].supervisor){
             divcell.setAttribute('supervisor','supervisor')
         }
         else{
             divcell.setAttribute('supervisor','nosupervisor')
         }
 
 
       
         // <div><i class="fa-solid fa-circle-check"></i>
         // <p>${data.data.taskers[index].completedTasks}</p></div>
 
 
 
         const description=document.createElement('div')
         description.setAttribute('class','description')
         description.id=`description${index}`
 
         description.innerHTML=`<p>${filteredcells[index].bio}</p>`
 
 
         const divcellfooter=document.createElement('div')
         divcellfooter.setAttribute('class','divcellfooter')
         divcellfooter.id=`divcellfooter${index}`
 
         divcellfooter.innerHTML=`<a href="#">view profile</a>
         <p>$35</p>
         <a href="#">Book now</a>
         `
 
 
         divcell.appendChild(divcellheader)
         divcell.appendChild(achievements)
         divcell.appendChild(description)
         divcell.appendChild(divcellfooter)
 
 
         
 
 
 
         griddiv.appendChild(divcell)
    }

}


const tasksortselect=document.getElementById('sortbytasks')
tasksortselect.addEventListener("change", function() {
    if(tasksortselect.value=='ascending'){
        tasksort('ascending')
    }

    if(tasksortselect.value=='descending'){
        tasksort('descending')
    }
})

function tasksort(type){
   

    if(type==='descending'){
        console.log(type=='descending');

        const cells=Array.from(document.getElementsByClassName('divcell'))
        console.log('unsorted')
        console.log(cells[0].getAttribute('tasks'));
        cells.sort(function(a, b){return b.getAttribute('tasks') - a.getAttribute('tasks')})
        console.log('sorted')
        console.log(cells[0].getAttribute('tasks'));
        taskssorteddivgenerator(cells)

    }
    if(type==='ascending'){
        console.log(type=='ascending');

        const cells=Array.from(document.getElementsByClassName('divcell'))
        
        console.log('unsorted')
        console.log(cells[0].getAttribute('tasks'));
        cells.sort(function(a, b){return a.getAttribute('tasks') - b.getAttribute('tasks')})
        console.log('sorted')
        console.log(cells[0].getAttribute('tasks'));  

        taskssorteddivgenerator(cells)
    
    }}





function taskssorteddivgenerator(tasks){

    const griddiv= document.getElementById('griddiv')
   griddiv.innerHTML=''
   tasks.forEach(element => {
        griddiv.appendChild(element)
   });
}




const ratingsortselect=document.getElementById('sortbyrating')
ratingsortselect.addEventListener("change", function() {
    if(ratingsortselect.value=='ascending'){
        ratesort('ascending')
    }

    if(ratingsortselect.value=='descending'){
        ratesort('descending')
    }
})

function ratesort(type){
    if(type==='descending'){
        console.log(type=='descending');

        const cells=Array.from(document.getElementsByClassName('divcell'))
        console.log('unsorted')
        console.log(cells[0].getAttribute('rating'));
        cells.sort(function(a, b){return b.getAttribute('rating') - a.getAttribute('rating')})
        console.log('sorted')
        console.log(cells[0].getAttribute('rating'));
        ratessorteddivgenerator(cells)

    }
    if(type==='ascending'){
        console.log(type=='ascending');

        const cells=Array.from(document.getElementsByClassName('divcell'))
        
        console.log('unsorted')
        console.log(cells[0].getAttribute('rating'));
        cells.sort(function(a, b){return a.getAttribute('rating') - b.getAttribute('rating')})
        console.log('sorted')
        console.log(cells[0].getAttribute('rating'));  

        ratessorteddivgenerator(cells)
    
    }

}



function ratessorteddivgenerator(rates){

    
    const griddiv= document.getElementById('griddiv')
   griddiv.innerHTML=''
   rates.forEach(element => {
        griddiv.appendChild(element)
   });
}