let form=document.getElementById("form")
const arr=JSON.parse(localStorage.getItem('localTasks')) 
let priority=document.getElementById("priority").value;
// console.log(priority)
const tasksdiv=document.getElementById("tasks");
// console.log(localStorage.getItem('localTasks'))

window.addEventListener('load',function(){
   const tasksload=JSON.parse(localStorage.getItem('localTasks')) 
   for(var i=0; i<tasksload.length;i++){
    taskdivcreation(tasksload[i][0],tasksload[i][1],i)
      }
})
function btnsubmit() {
    let taskname=document.getElementById("taskname").value;
    let priority=document.getElementById("priority").value;
    let temparr=[taskname,priority] 
    arr.push(temparr)
    localStorage.setItem('localTasks',JSON.stringify(arr))
    let arrayloc=arr.indexOf(temparr)
    taskdivcreation(taskname,priority,arrayloc)
}
function taskdivcreation(taskname,priority,arrayloc){
    
    const task = document.createElement('div');
	task.classList.add('task');
    task.id=""+Math.random().toString(16).slice(2)
    console.log(task.id);
    const task_content = document.createElement('div');
	task_content.classList.add('content');
    

    const tasknm=document.createElement('input')
    tasknm.classList.add('taskname');
    tasknm.setAttribute('readonly', 'readonly');
    tasknm.value=taskname;
    
    const taskpriority=document.createElement('select')
    taskpriority.id="taskpriority"
    taskpriority.classList.add=('taskpriority')
    taskpriority.setAttribute('disabled', 'disabled');
    const options=[`${priority}`,"High","Medium","Low"]
    for (var i = 0; i<options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        taskpriority.appendChild(option);
    }

    const buttoncontent=document.createElement("div")
    buttoncontent.classList.add("buttonsdiv")

    const editbutton=document.createElement("button");
    editbutton.classList.add('editbutton')
    editbutton.innerText="Edit"

    const deletebutton=document.createElement("button");
    deletebutton.classList.add('deletebutton')
    deletebutton.innerText="Delete"


    editbutton.addEventListener('click', (e) => {
        if (editbutton.innerText.toLowerCase() == "edit") {
            editbutton.innerText = "Save";
            tasknm.removeAttribute("readonly");
            taskpriority.removeAttribute("disabled")
            arr[arrayloc][0]=tasknm.value;
            arr[arrayloc][1]=taskpriority.value;
            localStorage.setItem('localTasks',JSON.stringify(arr))
            editbutton.focus();
        } else {
            arr[arrayloc][0]=tasknm.value;
            arr[arrayloc][1]=taskpriority.value;
            localStorage.setItem('localTasks',JSON.stringify(arr))
            editbutton.innerText = "Edit";
            tasknm.setAttribute("readonly", "readonly");
        }
    });

    deletebutton.addEventListener('click', (e) => {
        tasksdiv.removeChild(task);
        arr.splice(arrayloc,1)
        localStorage.setItem('localTasks',JSON.stringify(arr))
    });
    
    
    task_content.appendChild(tasknm);
    task_content.appendChild(taskpriority);
    buttoncontent.appendChild(editbutton);
    buttoncontent.appendChild(deletebutton);


    task.appendChild(task_content);
    task.appendChild(buttoncontent)
    // console.log(task)
    tasksdiv.appendChild(task)

}


