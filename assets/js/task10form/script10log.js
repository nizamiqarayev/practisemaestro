let accounts=JSON.parse(localStorage.getItem('allAccounts'))


console.log(accounts)

function signin() {
    
    const email=document.getElementById('email')
    const password=document.getElementById('password')
    for (let index = 0; index < accounts.length; index++) {
        if(accounts[index][0].email==email.value && accounts[index][0].password==password.value){
            alert('Successfully signed in')
            return true;
        }
        else{
            continue
        }
    }
    alert('Wrong email or password')
    return false
}

