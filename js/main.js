// burger menu
let burgerMenuOpen = document.querySelector('.burger-menu__open')
let burgerMenuContent = document.querySelector('.burger-menu__content')
let burgerMenuClose = document.querySelector('.burger-menu__close')

burgerMenuOpen.addEventListener('click', () => {
    burgerMenuContent.classList.add('active')
    document.body.style.overflow = 'hidden'
})
burgerMenuClose.addEventListener('click', () => {
    burgerMenuContent.classList.remove('active')
    document.body.style.overflow = 'auto'
})
// scroll to begin
let toBegin = document.querySelector('.button__up')
toBegin.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// header with schroling
let header = document.querySelectorAll('.header')
// forwhoum section animation
let forwhom = document.querySelector('.forwhom__cards')
let forwhomCard1 = document.querySelector('#forwhom__cards__item_1')
let forwhomCard2 = document.querySelector('#forwhom__cards__item_2')
let forwhomCard3 = document.querySelector('#forwhom__cards__item_3')
// course section animation
let course = document.querySelector('.course')
let courseItemOne = document.querySelector('.course__cards__item_one')
let courseItemTwo = document.querySelector('.course__cards__item_two')
let courseBear = document.querySelector('.course__cards__item__etherium')

document.addEventListener('scroll', () => {
    // button to scroll begin
    if(window.scrollY > 100) {
        toBegin.classList.add('active')
    }
    else {
        toBegin.classList.remove('active')
    }
    // forwhom animate add
    if(window.scrollY >= forwhom.scrollHeight - forwhom.clientHeight) {
        forwhomCard1.style.transform = `translateX(0px)`
        forwhomCard2.style.transform = `translateX(0px)`
        forwhomCard3.style.transform = `translateY(0px)`
        // forwhomLight.style.transform = `translateY(-${window.scrollY / 2}px)`
    }
    // course animate add
    if(window.scrollY >= course.scrollHeight - course.clientHeight) {
        courseItemOne.style.transform = `translate(0px)`
        courseItemTwo.style.transform = `translate(0px)`
        courseBear.style.top = `-115%`
    }
    else {
        header.forEach(header => {
            header.classList.remove('header_schroll')
        })
    }
})

// accordion

let accordionItemHeader = document.querySelectorAll('.accordion__item__header').forEach(el => {
    let parent = el.parentElement
    let content = el.nextElementSibling
    let plus = el.querySelector('.accordion__item__header__open__icon')

    el.addEventListener('click', () => {
        content.classList.toggle('active')
        parent.classList.toggle('active')
        plus.classList.toggle('active')
    })
})

// popup
let openPopup = document.querySelector('.sidebar')
let popup = document.querySelector('.popup')
let popupContent = document.querySelector('.popup__content')

openPopup.addEventListener('click', () => {
    popup.classList.add('active')
    popupContent.classList.add('active')
})
popup.addEventListener('click', () => {
    popup.classList.remove('active')
    popupContent.classList.remove('active')
})
popupContent.addEventListener('click', (e) => {
    e.stopPropagation()
})