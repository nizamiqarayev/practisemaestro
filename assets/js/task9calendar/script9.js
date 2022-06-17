const body=document.querySelector('body')

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekNames = ["M", "T", "W", "Th", "F", "S",
  "S"
];
const weekFullNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  "Sunday"
];
const weekPartialNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
  "Sun"
];

const dates=[{
    "date":"17",
    "title":"Release Date of Something"
},
{
    "date":"23",
    "title":"Birthday of Someone"
},
{
    "date":"24",
    "title":"Exam"
}
    
]


const dt= new Date();
const currentmonth=dt.getMonth()
const currentyear=dt.getFullYear()
const firstday=new Date(currentyear,currentmonth,1).getDay()
const lastday=new Date(currentyear,currentmonth+1,0).getDay()
const monthsize=new Date(currentyear, currentmonth+1, 0).getDate();

const importantdays=[]
    for(var i=0;i<dates.length;i++){
    importantdays.push(dates[i].date)
    }
 const titles=[]
    for(var i=0;i<dates.length;i++){
    titles.push(dates[i].title)
    }

console.log(firstday)
console.log(lastday)
console.log(monthsize)


window.addEventListener('load',function(){
    body.appendChild(pagegenerator());
    

}
)

let eventdivitems;

function pagegenerator()
{
    const parentdiv= document.createElement("div")
    parentdiv.classList.add("parent")

    const calculatordiv=document.createElement("div")
    calculatordiv.id=`calendar`
    calculatordiv.classList.add("calendar1")
    calculatordiv.appendChild(currentmonthdivgenerator())
    calculatordiv.appendChild(currentmonthcalendar())
    parentdiv.appendChild(calculatordiv)
    return parentdiv;

}
function currentmonthdivgenerator(){
    const currentmonthdiv= document.createElement("div")
    currentmonthdiv.classList.add("currentmonthdiv")

    const arrowleft=document.createElement("div")
    const month=document.createElement("div")
    const arrowright=document.createElement("div")
    const imgleft=document.createElement("img")
    arrowleft.innerHTML=`<img src="../assets/images/task9calendar/Vectorleft.png"></img>
    <img src="../assets/images/task9calendar/Vectorleft.png"></img>
    `
    
    // '<i class="fa-solid fa-angles-left"></i>'
    arrowleft.appendChild(imgleft)

    arrowright.innerHTML=`<img src="../assets/images/task9calendar/Vectorright.png"></img>
    <img src="../assets/images/task9calendar/Vectorright.png"></img>
    `
    const monthheader=document.createElement('p')
    // monthheader.innerText(`sussy`)
    monthheader.innerText=`${monthNames[currentmonth]} ${currentyear}`
    month.appendChild(monthheader)
    currentmonthdiv.appendChild(arrowleft)
    currentmonthdiv.appendChild(month)
    currentmonthdiv.appendChild(arrowright)
    return currentmonthdiv
    
}

function currentmonthcalendar(){
    
    const calendardiv= document.createElement("div")
    calendardiv.id="calendardiv"
    calendardiv.classList.add("calendardiv")
    
    for(var i=0; i<weekNames.length; i++){
        const day=document.createElement("p");
        day.innerText=`${weekNames[i]}`
        calendardiv.appendChild(day)
    }

    for(var i=0;i<firstday-1;i++){
        const day= document.createElement("div")
        calendardiv.appendChild(day)
    }

    weekday=firstday-1
    
    console.log(importantdays)

    for(var i=firstday-(firstday-1);i<monthsize+1;i++){
        if(weekday==7){
            weekday=0
        }
        const day= document.createElement("div")
        day.setAttribute('weekDay',`${weekday}`)
        day.classList.add("day")
        day.id=i
        day.innerText=i
        day.addEventListener('click',function(){

            showEvent(weekday,day.id)
        })
        weekday++;
        

        calendardiv.appendChild(day)
        
    }
    return calendardiv
}
function showEvent(weekday,monthday){


    const calendardiv= document.getElementById('calendar')
    calendardiv.classList.add('calendar2')

    const eventdiv=document.createElement("div")
    eventdiv.id='eventdiv'

    eventdiv.classList.add("eventdiv")
    const weekdayh3=document.createElement("h3")
    weekdayh3.classList.add("h3_1")

    const date=document.createElement('h2')
    date.classList.add("h2_1")

    const event=document.createElement('h2')
    event.classList.add("h2_2")

    const upcoming=document.createElement("h3")
    upcoming.classList.add("h3_2")
    upcoming.innerText="Upcoming"
    

    

    if(importantdays.includes(`${monthday}`)){
        const temp= importantdays.indexOf(`${monthday}`)
        event.innerText=`${titles[temp]}`
        }
    else{
        event.innerText="No event"
        }
        
    let eventcounter=0;
        console.log(monthday)
    for(var i=0; i<importantdays.length;i++){
        if(parseInt(monthday)<importantdays[i]){
            eventcounter++;
        }
        else{
            continue
        }
    }

    
    
    weekdayh3.innerText=`${weekFullNames[weekday]}`
    date.innerText=`${monthNames[currentmonth]}, ${monthday}`
    eventdiv.appendChild(weekdayh3)
    eventdiv.appendChild(date)
    eventdiv.appendChild(event)
    eventdiv.appendChild(upcoming)
    console.log(eventcounter)
    for(var i=0; i<eventcounter;i++){
        const upcomingeventtitle= document.createElement("div")

        upcomingeventtitle.classList.add("upcomingeventdivtitle")
        upcomingeventtitle.innerText=`${titles[i]}`

        const upcomingeventdate= document.createElement("div")
        upcomingeventdate.classList.add("upcomingeventdivdate")
        upcomingeventdate.innerText=`${weekPartialNames[i]}, ${importantdays[i]}`


        eventdiv.appendChild(upcomingeventtitle)
        eventdiv.appendChild(upcomingeventdate)

    }

    if(eventdivitems!=null){
        body.removeChild(body.lastElementChild)
    }

    
    body.appendChild(eventdiv)


    eventdivitems=document.getElementById('eventdiv')
    
}



