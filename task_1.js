// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури 
// (наприклад, вліво / вправо)
let position = 340
const img = document.querySelector('.gallery')
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        img.scrollLeft += position
    } else if (event.key === 'ArrowLeft'){
        img.scrollLeft -= position
    }
})


