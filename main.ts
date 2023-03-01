// 1 = START (med blinking)
input.onButtonPressed(Button.A, function () {
    Radiogruppe = 101
    for (let index = 0; index < 8; index++) {
        radio.setGroup(Radiogruppe)
        radio.sendNumber(1)
        Radiogruppe += 1
    }
    Radiogruppe = 201
    for (let index = 0; index < 8; index++) {
        radio.setGroup(Radiogruppe)
        radio.sendNumber(1)
        Radiogruppe += 1
    }
    basic.showString("M")
})
// 2 = START (uten blinking)
input.onButtonPressed(Button.AB, function () {
    led.plot(2, 1)
    Radiogruppe = 101
    for (let index = 0; index < 8; index++) {
        radio.setGroup(Radiogruppe)
        radio.sendNumber(2)
        Radiogruppe += 1
    }
    Radiogruppe = 201
    for (let index = 0; index < 8; index++) {
        radio.setGroup(Radiogruppe)
        radio.sendNumber(2)
        Radiogruppe += 1
    }
    basic.pause(100)
    basic.showString("M")
})
// 0 = STOPP
input.onButtonPressed(Button.B, function () {
    Radiogruppe = 101
    for (let index = 0; index < 8; index++) {
        radio.setGroup(Radiogruppe)
        radio.sendNumber(0)
        Radiogruppe += 1
    }
    Radiogruppe = 201
    for (let index = 0; index < 8; index++) {
        radio.setGroup(Radiogruppe)
        radio.sendNumber(0)
        Radiogruppe += 1
    }
    basic.showString("m")
})
let Radiogruppe = 0
basic.showString("m")
