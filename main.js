const list =document.querySelectorAll('.list')
console.log(list)
function activeLink() {
    list.forEach(element => {
        element.classList.remove('active')
        this.classList.add('active')
    });
}

list.forEach((element) => 
    element.addEventListener('click', activeLink));