const slotOne = document.getElementById("slot1")
const slotTwo = document.getElementById("slot2")
const slotThree = document.getElementById("slot3")
const slotFour = document.getElementById("slot4")
const slotFive = document.getElementById("slot5")
const slotSix = document.getElementById("slot6")
const slotSeven = document.getElementById("slot7")
const slotEight = document.getElementById("slot8")
const slotNine = document.getElementById("slot9")

slotOne.addEventListener('click', e => {
    slotOne.classList.add("x")
    slotOne.classList.remove("o")
})

slotOne.addEventListener('mousedown', e => {
    slotOne.classList.add("o")
    slotOne.classList.remove("x")
})

slotTwo.addEventListener('click', e => {
    slotTwo.classList.add("x")
    slotTwo.classList.remove("o")
})

slotTwo.addEventListener('mousedown', e => {
    slotTwo.classList.add("o")
    slotTwo.classList.remove("x")
})

slotThree.addEventListener('click', e => {
    slotThree.classList.add("x")
    slotThree.classList.remove("o")
})

slotThree.addEventListener('mousedown', e => {
    slotThree.classList.add("o")
    slotThree.classList.remove("x")
})

slotFour.addEventListener('click', e => {
    slotFour.classList.add("x")
    slotFour.classList.remove("o")
})

slotFour.addEventListener('mousedown', e => {
    slotFour.classList.add("o")
    slotFour.classList.remove("x")
})

slotFive.addEventListener('click', e => {
    slotFive.classList.add("x")
    slotFive.classList.remove("o")
})

slotFive.addEventListener('mousedown', e => {
    slotFive.classList.add("o")
    slotFive.classList.remove("x")
})

slotSix.addEventListener('click', e => {
    slotSix.classList.add("x")
    slotSix.classList.remove("o")
})

slotSix.addEventListener('mousedown', e => {
    slotSix.classList.add("o")
    slotSix.classList.remove("x")
})

slotSeven.addEventListener('click', e => {
    slotSeven.classList.add("x")
    slotSeven.classList.remove("o")
})

slotSeven.addEventListener('mousedown', e => {
    slotSeven.classList.add("o")
    slotSeven.classList.remove("x")
})

slotEight.addEventListener('click', e => {
    slotEight.classList.add("x")
    slotEight.classList.remove("o")
})

slotEight.addEventListener('mousedown', e => {
    slotEight.classList.add("o")
    slotEight.classList.remove("x")
})

slotNine.addEventListener('click', e => {
    slotNine.classList.add("x")
    slotNine.classList.remove("o")
})

slotNine.addEventListener('mousedown', e => {
    slotNine.classList.add("o")
    slotNine.classList.remove("x")
})

// Clearing the board:

const resetButton = document.getElementById("reset-slots")

resetButton.addEventListener('click', e => {
    slotOne.classList.remove("x")
    slotOne.classList.remove("o")
    slotTwo.classList.remove("x")
    slotTwo.classList.remove("o")
    slotThree.classList.remove("x")
    slotThree.classList.remove("o")
    slotFour.classList.remove("x")
    slotFour.classList.remove("o")
    slotFive.classList.remove("x")
    slotFive.classList.remove("o")
    slotSix.classList.remove("x")
    slotSix.classList.remove("o")
    slotSeven.classList.remove("x")
    slotSeven.classList.remove("o")
    slotEight.classList.remove("x")
    slotEight.classList.remove("o")
    slotNine.classList.remove("x")
    slotNine.classList.remove("o")
    console.log("Reset all slots!")
})