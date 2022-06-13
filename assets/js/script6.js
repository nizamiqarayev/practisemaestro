
const buttons=Array.from(document.getElementsByClassName('button'));

const actionbuttons=Array.from(document.getElementsByClassName('actionbutton'))


let num1;
let num2;
let action;
function printhistory(num){
    document.getElementById('history').innerText=num;
}
function gethistory(){
    return document.getElementById('history').innerText
}
function printoutput(num){
    document.getElementById('result').innerText=num;
}
function getoutput(){
    return document.getElementById('result').innerText
}

let continuecalc;



buttons.map(button=>{
    button.addEventListener('click', function(){
      let input=getoutput();
      input=input+button.id;
      printoutput(input);
    //   printoutput(input)
    })
})
actionbuttons.map(buttons=>{

    buttons.addEventListener('click',function(){
       console.log("start num is"+continuecalc)
        switch(this.id){
            case 'C':
                printoutput("");
                printhistory("");
                break;
            case '←':
                if(getoutput()!=null){
                    let temp= getoutput();
                    let reducedstring=temp.substr(0,temp.length-1)
                    printoutput(reducedstring);
                    console.log(getoutput());

                }
                break;
            case '/':
                action="/"
                if(continuecalc==null){
                    console.log(action)
                    num1=getoutput();
                    console.log(num1)
    
                    let division1=getoutput()+'/';
                    printhistory(division1);
                    printoutput("");
                }
                else{
                    let division2=continuecalc+'/'
                    num1=continuecalc;
                    printhistory(division2);
                    continuecalc=null;
                    printoutput("");
                }
                
                break;
            case '%':
                action="%"
                if(continuecalc==null){
                    num1=getoutput();
                    let remainder1=getoutput()+'%';
                    printhistory(remainder1);
                    printoutput("");
                }
                else{
                    let remainder2=continuecalc+'%'
                    num1=continuecalc;
                    printhistory(remainder2);
                    continuecalc=null;
                    printoutput("");
                }
               
                break;
            case 'X':
                action="X"
                if(continuecalc==null){
                    num1=getoutput();
                    let X1=getoutput()+'X';
                    printhistory(X1);
                    printoutput("");
                }
                else{
                    let X2=continuecalc+'X'
                    num1=continuecalc;
                    printhistory(X2);
                    continuecalc=null;
                    printoutput("");
                }
                
                break;
            case '-':
                action="-"
                if(continuecalc==null){
                    num1=getoutput();
                    let subtraction1=getoutput()+'-';
                    printhistory(subtraction1);
                    printoutput("");
                }
                
                else{
                    let subtraction2=continuecalc+'-';
                    num1=continuecalc;
                    printhistory(subtraction2);
                    printoutput("")
                    continuecalc=null;
                }
                break;
            case '+':
                action="+"
                if(continuecalc==null){
                    num1=getoutput();
                    let addition1=getoutput()+'+';
                    printhistory(addition1);
                    printoutput("");
                }
                
                else{
                    let addition2=continuecalc+'-';
                    num1=continuecalc;
                    printhistory(addition2);
                    printoutput("")
                    continuecalc=null;
                }
                break;
            case '=':
                num2=getoutput();
                console.log('num1='+num1)
                console.log('num2='+num2)
                console.log('action='+action)
                let result;

                switch(action){
                    case '/':
                        if(num2==0){
                            alert('No division by 0')
                        }
                        else{
                        printhistory(num1/num2);
                        console.log(gethistory())
                        printoutput("")
                        continuecalc=parseInt(num1)/parseInt(num2);
                        }
                        break;
                        
                    case 'X':
                        result=parseInt(num1)*parseInt(num2)
                        console.log(result)
                        printhistory(result);
                        // console.log(getoutput);
                        printoutput("");
                        continuecalc=parseInt(num1)*parseInt(num2);
                        break;
                        
                    case '+':
                        result=parseInt(num1)+parseInt(num2)
                        console.log(parseInt(num1)+"+"+parseInt(num2)+"="+(parseInt(num1)+parseInt(num2)))
                        console.log(result)
                        printhistory(result);
                        printoutput("");
                        continuecalc=parseInt(num1)+parseInt(num2)
                        break;
                    case '+':
                        result=parseInt(num1)-parseInt(num2)
                        console.log(parseInt(num1)+"-"+parseInt(num2)+"="+(parseInt(num1)-parseInt(num2)))
                        console.log(result)
                        printhistory(result);
                        printoutput("");
                        continuecalc=parseInt(num1)-parseInt(num2)
                        break;
                    case '%':
                        result=parseInt(num1)%parseInt(num2)
                        
                        printhistory(result);
                        printoutput("");
                         continuecalc=parseInt(num1)%parseInt(num2);
                        break;
                        // result=null;
                        
                    
                }  
                // action="";

        }
    })


})