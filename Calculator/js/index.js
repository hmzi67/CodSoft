let string  = '';
let buttons = document.querySelectorAll('.btn-white');

function resetCalculator(){
    string = '';
    document.querySelector('.answer').value = string;
    document.querySelector('.inputText').value = string;
}

function evaluate(){
    string = eval(string)
    document.querySelector('.answer').value = string;
    document.querySelector('.inputText').value = null;
}

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '='){
            evaluate()
        }
        else if(e.target.innerHTML == 'AC'){
            resetCalculator()
        }
        else if(e.target.innerHTML == 'C') {
            string = string.substring(0, string.length-1);
            document.querySelector('.inputText').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.inputText').value = string;
        }
    })
})