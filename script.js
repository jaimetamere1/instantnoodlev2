// import files
import NOODLES from './data.js'
console.log(NOODLES)

// navbar
const themeBtn = document.querySelector('.currentMode')
const menuBtn = document.querySelector('#menuBtn')

// start
window.addEventListener('DOMContentLoaded', main)

function main() {
    console.log('1st step wroks')

    // show sidenav
    menuBtn.addEventListener('click', () => {
        const sidenav = document.querySelector('.sidenav')
        sidenav.classList.toggle('showSidenav')
    })

    // change theme (night / day)
    themeBtn.addEventListener('click', () => {
        console.log('bagueyye')
        const element = document.body
        element.classList.toggle('darkmode')
        
        if(themeBtn.firstElementChild.name === "moon") {
            themeBtn.firstElementChild.name = "sunny"
        } else {
            themeBtn.firstElementChild.name = "moon"
        }
    })

    generateNoodles()

    const noodleDetailBtns = document.querySelectorAll('#showdetailbtn')
    // console.log(noodleCard)
    noodleDetailBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log(e.target.dataset.noodle)

            const noodleID = parseInt(e.target.dataset.noodle)
            const currentNoodle = NOODLES.find((noo) => noo.id === noodleID)

            // console.log(currentNoodle)
            const noodleDetail = getNoodleDetail(currentNoodle)
            
            const noodleModal = document.querySelector('.noodle-modal')
            noodleModal.innerHTML = noodleDetail

            noodleModal.classList.toggle('hideModal')



            document.querySelector('.closeBtn').addEventListener('click', () => {
              noodleModal.classList.add('hideModal')
            })
        })
    })
}

function generateNoodles() {
    let displayNoodles = NOODLES.map((noodle) => {
        return `<div class="instant-brand">
        <img src="${noodle.image}" alt="">
        <div class="overlay">
            <h5>${noodle.name}<br/>
            ${noodle.description}</h5>
            <button id="showdetailbtn" data-noodle="${noodle.id}">more detail</button>
        </div>
    </div>`
    })

    displayNoodles = displayNoodles.join("")
    const instantWrapper = document.querySelector('.instant-wrapper')
    instantWrapper.innerHTML = displayNoodles
}

function getNoodleDetail(noodle) {
    return `            <div class="modal-container">
    <div class="modal-header">
      <h1>${noodle.name}<span class="closeBtn"><ion-icon name="close-circle"></ion-icon></span></h1>
    </div>
    <div class="modal-body">
        <h3>${noodle.titledescription}</h3>
        <div class="noodleinfo">
            <h4>weight: <span>${noodle.weight}</span></h4>
            <h4>calories: <span>${noodle.calories}</span></h4>
            <h4>expiry: <span>${noodle.expiry}</span></h4>
            <h4>release: <span>${noodle.release}</span></h4>
        </div>
        <p>${noodle.indepthdescription}</p>
        <a href="https://www.amazon.com/OTTOGI-Korean-Instant-Tasting-Traditional/dp/B08XN5FRZ2/ref=sr_1_4?crid=2YKLOIBLHVHAT&keywords=jin+ramen&qid=1671272015&sprefix=jin+rame%2Caps%2C512&sr=8-4" class="btn">order on amazon here !</a>
    // </div>
  </div>`
}