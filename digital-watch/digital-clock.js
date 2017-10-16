let minutes = 0
let hours = 0
let time = ""
let adjust = 0
let ampm = false
input.onGesture(Gesture.Shake, () => {
    adjust = hours
    if (hours > 12) {
        adjust = hours - 12
    } else {
        if (hours == 0) {
            adjust = 12
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + minutes / 10
    time = "" + time + minutes % 10
    if (ampm) {
        if (hours < 11) {
            time = "" + time + "AM"
        } else {
            time = "" + time + "PM"
        }
        basic.showString(time)
    }
})
input.onButtonPressed(Button.A, () => {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onButtonPressed(Button.B, () => {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onButtonPressed(Button.AB, () => {
    ampm = !(ampm)
})
basic.forever(() => {
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
ampm = false
time = ""
adjust = 0
hours = 0
minutes = 0
