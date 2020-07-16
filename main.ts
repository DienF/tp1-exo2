input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    if (x == 0) {
        x = 4
    } else {
        x += -1
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    if (x == 4) {
        x = 0
    } else {
        x += 1
    }
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
let dir = 1
led.plot(x, y)
basic.forever(function () {
    led.unplot(x, y)
    y += dir
    led.plot(x, y)
    basic.pause(1000)
    if (y >= 4) {
        dir = -1
    } else if (y <= 0) {
        dir = 1
    }
})
