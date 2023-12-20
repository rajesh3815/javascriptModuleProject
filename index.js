const button = document.querySelector('.btn')
const pop_up = document.querySelector('.rules-pop')
const close_popup = document.querySelector('.cross')
button.addEventListener("click", () => {
    pop_up.style.display = "block"

})
close_popup.addEventListener("click", () => {
    pop_up.style.display = "none"
})

