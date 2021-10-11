function shuffle () {
    count = 0
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            random = randint(0, 4)
            temp = lijst[random]
            temp2 = lijst[count]
            lijst[count] = temp
            lijst[random] = temp2
            count = count + 1
        }
        count = 0
    }
}
function showTurn () {
    if (count < 5) {
        basic.showNumber(lijst[count])
        count = count + 1
    } else {
        start()
    }
}
input.onButtonPressed(Button.A, function () {
    showTurn()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    reset()
})
function start () {
    shuffle()
    basic.showString("A")
}
function reset () {
    start()
}
let temp2 = 0
let temp = 0
let random = 0
let count = 0
let lijst: number[] = []
lijst = [
1,
2,
3,
4,
5
]
start()
