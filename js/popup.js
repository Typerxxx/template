let service = document.getElementById('services')
let popup = document.getElementById('header__popup')
let header = document.getElementById('header')
let btn = document.getElementsByClassName('header__info-btn')[0]


    service.onmouseover = () => {

        popup.style.display = "flex"
        header.classList.add("bright") 
        btn.classList.remove('btn-white')
        btn.classList.add('btn-black')
        service.children[0].style.transform = 'rotate(180deg)'
    }

    popup.onmouseout = () => {
        if(window.scrollY == 0){
            popup.style.display = 'none'
            header.classList = "header bright"
            header.classList.remove("bright")
            btn.classList.remove('btn-black')
            btn.classList.add('btn-white')
        }
        else{
            popup.style.display = 'none';
        }
        service.children[0].style.transform = 'rotate(0deg)'

        

    }

