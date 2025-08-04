// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input
//  і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити,
//   колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div,
//  скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

// Створи функцію destroyBoxes(), яка очищає div#boxes.

const input = document.querySelector(".input");
const create_btn = document.querySelector(".create_btn");
const remove_btn = document.querySelector(".remove_btn");
const boxes = document.querySelector("#boxes");


create_btn.addEventListener("click", () => {
    const amountValue = Number(input.value);
    for (let i = 0; i < amountValue; i++){
        const box = document.createElement('div')
        box.style.width = (30 + i * 10) + 'px'
        box.style.height = (30 + i * 10) + 'px'
        box.style.backgroundColor = colorRandom()
        boxes.append(box)
    }

});

const colorRandom = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

remove_btn.addEventListener('click', () => {
    boxes.innerHTML = ''
})