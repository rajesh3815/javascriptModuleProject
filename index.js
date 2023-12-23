const button = document.querySelector('.btn')
const pop_up = document.querySelector('.rules-pop')
const close_popup = document.querySelector('.cross')

const users = document.querySelectorAll('.user')
const game = document.querySelector('.game')
const result = document.querySelector('.results')
const res_divs = document.querySelectorAll('.res_div')

const user_score_card = document.querySelector('.u-score')
const computer_score_card = document.querySelector('.c-score')

const win_card = document.querySelector('.won')
const tie_card = document.querySelector('.tie')
const loose_card = document.querySelector('.loose')
const card_buttons = document.querySelectorAll('.card-btn')
const cards = document.querySelectorAll('.modals')

const win_btn = document.querySelector('.win-btn')
const rule_btn = document.querySelector('.rule-btn')

const data_choice = ["rock", "paper", "scissor"]
// const resCard = document.querySelector('.res-card')trying new thing grids

button.addEventListener("click", () => {
    pop_up.style.display = "block"

})
close_popup.addEventListener("click", () => {
    pop_up.style.display = "none"
})
// results displaying
users.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        game.classList.toggle('hide')
        const choiceName = el.dataset.choice
        choose(choiceName);
    })
})
function choose(choice) {
    const computer_pick = computer_p()
    displayResults([choice, computer_pick])
    countResult([choice, computer_pick])
}
function computer_p() {
    const rand_value = Math.floor(Math.random() * 3);
    return data_choice[rand_value]
}
function displayResults(values) {
    res_divs.forEach((divs, idx) => {
        // setTimeout(() => {

            divs.innerHTML = `<div class="user ${values[idx]}-res"> <img src="image/${values[idx]}.png" alt="${values[idx]}"></div>`

        // }, 1000 * idx)
    })
    result.classList.toggle('hide')
}

function countResult(values) {
    let winVal=null
    if (values[0] === values[1]) {
        tie_card.classList.toggle('hide')
    }
    else if ((values[0] === 'rock' && values[1] === 'scissor') ||
        (values[0] === 'scissor' && values[1] === 'paper') ||
        (values[0] === 'paper' && values[1] === 'rock')) {
        let c = Number(localStorage.getItem('countWin')) + 1;
        localStorage.setItem("countWin", c)
        user_score_card.textContent = localStorage.getItem('countWin');
        win_card.classList.toggle('hide')
        // resCard.innerHTML = win_card trying new thing grids
        celebrating()
         winVal='user'
        winAnimation(winVal)
        // console.log(win_card)
    } else {
        loose_card.classList.toggle('hide')
        let c = Number(localStorage.getItem('countLoss')) + 1;
        localStorage.setItem("countLoss", c)
        computer_score_card.innerHTML = localStorage.getItem('countLoss');
        winVal='computer'
         winAnimation(winVal)
        // console.log(loose_card)
    }
}
function celebrating() {
    rule_btn.classList.toggle('btn-postion')
    rule_btn.classList.add('btn-win-postion')
    win_btn.classList.toggle('hide')
    win_btn.classList.add('btn-postion')
}
function winAnimation(value){
   res_divs.forEach((el,idx)=>{
    const divData=el.dataset.res
    el.classList.add('resAnimation_div')
    if(divData===value){
        for(let i=0;i<=4;i++){
            el.innerHTML+=
            `<span style="--i:${i}"></span>`
        }
        
        // console.log(el)
    }
   })
}
card_buttons.forEach((ele, idx) => {
    ele.addEventListener('click', () => {
        game.classList.toggle('hide')
        result.classList.toggle('hide')
        cards.forEach(card => card.classList.add('hide'))
    })

})
