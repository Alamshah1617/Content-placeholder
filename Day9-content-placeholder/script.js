const header = document.getElementById('header')
const title = document.getElementsByTagName('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bg = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-texts')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML ='<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Hello guys'
    excerpt.innerHTML = 'Whatsup?'
    profile_img.innerHTML = '<img src="photo.png" alt="photo" />'
    name.innerHTML = 'Shah Alam'
    date.innerHTML = 'Sep 17,2001'

    animated_bg.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}