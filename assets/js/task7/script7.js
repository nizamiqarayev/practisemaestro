let form=document.getElementById("form")
let arr=[]
// console.log("pengus")
let priority=document.getElementById("priority").value;
// console.log(priority)
const tasksdiv=document.getElementById("tasks");
// console.log(localStorage.getItem('localTasks'))

window.addEventListener('load',function(){
   const tasksload=JSON.parse(localStorage.getItem('localTasks')) 
   for(var i=0; i<tasksload.length;i++){
    taskdivcreation(tasksload[i][0],tasksload[i][1])
      }
})
function btnsubmit() {
    let taskname=document.getElementById("taskname").value;
    let priority=document.getElementById("priority").value;
    let temparr=[taskname,priority] 
    arr.push(temparr)
    localStorage.setItem('localTasks',JSON.stringify(arr))

    taskdivcreation(taskname,priority)
}
function taskdivcreation(taskname,priority){
    const task = document.createElement('div');
	task.classList.add('task');

    const task_content = document.createElement('div');
	task_content.classList.add('content');
    

    const tasknm=document.createElement('input')
    tasknm.classList.add('taskname');
    tasknm.setAttribute('readonly', 'readonly');
    tasknm.value=taskname;
    
    const taskpriority=document.createElement('select')
    taskpriority.id="taskpriority"
    taskpriority.classList.add=('priority')
    taskpriority.setAttribute('disabled', 'disabled');
    const options=["High","Medium","Low"]
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
            editbutton.focus();
        } else {
            editbutton.innerText = "Edit";
            tasknm.setAttribute("readonly", "readonly");
        }
    });

    deletebutton.addEventListener('click', (e) => {
        tasksdiv.removeChild(task);
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

