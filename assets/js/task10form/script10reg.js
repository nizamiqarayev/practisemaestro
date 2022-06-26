const form=document.querySelector('form')
let strength

let alldata=JSON.parse(localStorage.getItem('allAccounts')) 
if(alldata==null){
    alldata=[]
}
// alldata=[]
// localStorage.setItem('allAccounts',JSON.stringify(alldata))

for (let index = 0; index < alldata.length; index++) {
    console.log(alldata[index][0].email)
}



let alphabet = /[a-zA-Z]/, 
      numbers = /[0-9]/, 
      scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/;
     validemail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function getdata(){
    try{
        if(form.name.value==''||form.email.value==''||form.password.value==''||
        form.country.value=='')
        {
            alert('Please fill all the lines')
        }
        if(!form.email.value.match(validemail)){
            let emailalert=document.getElementById('h6email')
            emailalert.setAttribute('class','h6weak')
            
        }

    else if(form.email.value.match(validemail)&& strength>=2){
        if(emailchecker(form.email.value)){
            alert('This email adress is already in use')
        }
        else{
            document.getElementById('h6email').setAttribute('class','h6empty')
            // console.log(emailchecker(form.email.value))
            
            
            let account={
                name: `${form.name.value}`,
                email: `${form.email.value}`,
                password: `${form.password.value}`,
                country:`${form.country.value}`,
                level:`${document.querySelector('input[name="level"]:checked').value}`,
                skill:`${document.querySelector('input[name="skill"]:checked').value}`,
        
            }
            let accounts=[]
            accounts.push(account)
            alldata.push(accounts)
            localStorage.setItem('allAccounts',JSON.stringify(alldata))
            alert('Successfully created an account')
            setTimeout(window.open("../../../task10Formverify/loginform.html"), 3000)


        }



        }
        
    }
        
    catch(TypeError){
        alert('Please make sure that you have selected your level of development and skills')
    }
   
}

const pwdiv=document.getElementById('password')

pwdiv.addEventListener('keyup',function(){
    let h6=document.getElementById('h6')
    let pw=form.password.value
    if(pw.length<10){
        h6.setAttribute('class','h6weak')
        h6.innerText=`Enter a valid password`
        
    }
    else{
        if(pw.match(alphabet)||pw.match(numbers) || pw.match(scharacters)){
            h6.setAttribute('class','h6weak')
            h6.innerText=`Your password is a little secure`
            strength=1;
        }
        if((pw.match(alphabet) && pw.match(numbers) && !pw.match(scharacters))||(pw.match(alphabet) && pw.match(scharacters) && !pw.match(numbers))){
            h6.setAttribute('class','h6medium')
            h6.innerText=`Your password is secure`
            strength=2;
        }
        if(pw.match(alphabet) && pw.match(numbers) && pw.match(scharacters)){
            h6.setAttribute('class','h6strong')
            h6.innerText=`Your password is very secure`
            strength=3;
        }
    }
})


let temparr
function emailchecker(email){
    temparr=JSON.parse(localStorage.getItem('allAccounts')) 
    console.log('length '+ temparr.length)

    for (let index = 0; index < temparr.length; index++) {
        console.log('index'+index)
        console.log(temparr[index][0].email)
        if(alldata[index][0].email==email){
            console.log(temparr[index][0].email==email)
            return true
        }
        else{
            console.log(!temparr[index][0].email==email)
            continue
        }
    }
    return false
}

