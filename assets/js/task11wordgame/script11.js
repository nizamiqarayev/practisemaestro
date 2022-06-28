const body=document.querySelector('body')

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const words=[
    {
        word:"wordddd1",
        description:"wordddd1"

    },
    {
        word:"worddddd2",
        description:"worddddd2"
        
    },
    {
        word:"wordddd3",
        description:"wordddd3"
        
    }
]
let currentindex
let currentwordlength=0
let currentletterindex=0


function loadgame(){
    document.getElementById('time').style.display="block"
    document.getElementById('score').style.display="block"
    const word=document.getElementById('word')
    const keyboard=document.getElementById('alphabet')

    let x = Math.floor((Math.random() * words.length));
    loadword(x,word)
    loadkeyboard(keyboard)
    document.getElementById('nextword').style.display="block"
    document.getElementById('hint').style.display="block"

    console.log(words[currentindex].word)
}

function loadword(wordindex,div)
{   console.log(words[wordindex].word)
    for(let i=0;i<words[wordindex].word.length;i++){
        let tempdiv=document.createElement('div')
        tempdiv.setAttribute('class','wordcell')
        div.appendChild(tempdiv)
    }
    currentindex=wordindex
    console.log(currentindex)
    currentwordlength=words[wordindex].word.length

}



function loadword(){
    let x
    while(true){
         x = Math.floor((Math.random() * words.length));
        if(x==currentindex){
            continue
        }
        else{
            break
        }
    }
    const word=document.getElementById('word')
    word.innerHTML=""
    for(let i=0;i<words[x].word.length;i++){
        let tempdiv=document.createElement('div')
        tempdiv.setAttribute('class','wordcell')
        word.appendChild(tempdiv)
    }
    currentwordlength=words[x].word.length
    currentletterindex=0
    currentindex=x

}
function loadkeyboard(div){
    for(let i=0;i<alphabet.length;i++){
        let tempdiv=document.createElement('div')
        tempdiv.setAttribute('class','keyboardcell')
        tempdiv.id=alphabet[i]
        tempdiv.innerText=alphabet[i]
        tempdiv.addEventListener('click',function(){
            insertLetter(i)
        })
        div.appendChild(tempdiv)
    }
    currentletterindex=0

}


function insertLetter(letter){
    console.log(currentindex)
    const currentword=words[currentindex].word.toUpperCase()
    console.log(currentword.length)
    if(currentletterindex<currentword.length-1){
        const buttons=document.getElementsByClassName('keyboardcell')
        const wordcells=document.getElementsByClassName('wordcell')
        console.log(currentletterindex)
        wordcells[currentletterindex].innerText=buttons[letter].id
        currentletterindex++;
    }
    else{
        const buttons=document.getElementsByClassName('keyboardcell')
        const wordcells=document.getElementsByClassName('wordcell')
        console.log(currentletterindex)
        wordcells[currentletterindex].innerText=buttons[letter].id
        resultchecker()
    }
   
}

function resultchecker(){
    const wordcells=document.getElementsByClassName('wordcell')
    let insertedword=''
    for(let i=0;i<wordcells.length;i++){
        insertedword=insertedword+wordcells[i].innerText
    }
    

        if(insertedword==words[currentindex].word.toUpperCase()){
            alert('Good')
        }
        else{
            alert('Wrong')
        }
}


