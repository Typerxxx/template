let items = document.getElementsByClassName("form-example");
let inputs = document.getElementsByClassName('input');


for(let i = 0; i < inputs.length; i++){
    inputs[i].onchange = () => {
        if(inputs[i].value != "" && inputs[i].value != " "){
            items[i].classList.add('afteroff')
        }
        else{
            items[i].classList.remove('afteroff')
        }
    }
}
