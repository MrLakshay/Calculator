let buffer='0'
const screen=document.querySelector('.screen')

function reRender(){
    screen.innerText=buffer
}
function handleNumber(Numbers){
    // console.log('num')
    if(buffer==='0'){
        buffer=Numbers
    }
    else{
        buffer+=Numbers
    }
    // console.log(buffer)

}
function handleMath(value){
    if(buffer==='0'){
        return
    }
    const intbuffer=parseInt(buffer)
    if(runningTotal===0){
        runningTotal=intbuffer
    }
}
function handleSymbols(Symbols){
    // console.log('symbol')
    switch(Symbols){
        case 'C':
            buffer='0';
            break;
        case '=':
            console.log('equ')
            break;
        case '←':
            if(buffer.length===1){
                buffer='0'
            }
            else{
                buffer=buffer.substring(0,buffer.length-1)
            }
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            handleMath(Symbols)
            break;
    }
}
function buttonClick(value){
    // console.log(value)
    if(!isNaN(parseInt(value))){
        handleNumber(value)
    }
    else{
        handleSymbols(value)
    }
    reRender()
}

function init(){
    document.querySelector('.calc-buttons')
    .addEventListener("click",function(event){
        buttonClick(event.target.innerText)
    })
}
init()