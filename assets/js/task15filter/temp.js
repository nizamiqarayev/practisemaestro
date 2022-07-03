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
 
         divcellheadername.innerText=`${data.data.taskers[index].user.name} ${data.data.taskers[index].user.surname} (${data.data.taskers[index].supervisor})`
 
 
         
        
         const divcellheaderrating=document.createElement('div')
         divcellheaderrating.setAttribute('class','divcellheaderrating')
         divcellheaderrating.id=`divcellheaderrating${index}`
 
         divcell.setAttribute('rating',`${data.data.taskers[index].averageRating}`)
 
         for (let i = 0; i < 5; i++) {
             if(i<=parseInt(data.data.taskers[index].averageRating)){
                 divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+'<span class="fa fa-star checked"></span>'
             }     
             else{
                 divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+'<span class="fa fa-star"></span>'
             }       
         }
 
         divcellheaderrating.innerHTML=divcellheaderrating.innerHTML+`<p>(${data.data.taskers[index].averageRating})</p>`
 
         
 
 
 
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
                 newpro=false
             }     
             else{
                 newpro=true
             }    
 
         }
         else{
             newpro=true
         }
 
 
         
 
 
 
         achievements.innerHTML=`
         <div><i class="fa-solid fa-circle-check"></i>
         <p>${data.data.taskers[index].completedTasks}</p></div>
         `
 
         divcell.setAttribute('tasks',`${data.data.taskers[index].completedTasks}`)
 
        
         if(data.data.taskers[index].eliteTasker){
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
         <p>$35</p>
         <a href="#">Book now</a>
         `
 
 
         divcell.appendChild(divcellheader)
         divcell.appendChild(achievements)
         divcell.appendChild(description)
         divcell.appendChild(divcellfooter)
 
 
         
 
 
 
         griddiv.appendChild(divcell)
         // console.log(divcell)
 
 
 
 
 
     }
 
 
     
 }