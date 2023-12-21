const button = document.querySelector('.btn')
const pop_up = document.querySelector('.rules-pop')
const close_popup = document.querySelector('.cross')

const users = document.querySelectorAll('.user')
const game = document.querySelector('.game')
const result = document.querySelector('.results')
const res_divs = document.querySelectorAll('.res_div')

const data_choice = ["rock", "paper", "scissor"]

button.addEventListener("click", () => {
    pop_up.style.display = "block"

})
close_popup.addEventListener("click", () => {
    pop_up.style.display = "none"
})
// results displaying
users.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        game.style.display = "none"
        const choiceName = el.dataset.choice
        choose(choiceName);
    })
})
function choose(choice) {
    const computer_pick = computer_p()
    displayResults([choice, computer_pick])
}
function computer_p() {
    const rand_value = Math.floor(Math.random() * 3);
    return data_choice[rand_value]
}
function displayResults(values) {
    res_divs.forEach((divs, idx) => {
        setTimeout(() => {

            divs.innerHTML = `<div class="user ${values[idx]}-res"> <img src="image/${values[idx]}.png" alt="${values[idx]}"></div>`
            
        }, 1000 * idx)
    })
    result.classList.toggle('hide')
}
