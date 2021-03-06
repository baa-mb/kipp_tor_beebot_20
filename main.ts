input.onButtonPressed(Button.A, function () {
    reset()
})
function reset () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        . # . . .
        . . . . .
        `)
    basic.pause(3000)
    kipp_limit = input.rotation(Rotation.Pitch) + 5
    basic.showNumber(kipp_limit)
    is_sharp = 1
}
let is_sharp = 0
let kipp_limit = 0
reset()
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > kipp_limit) {
        if (is_sharp == 1) {
            music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.pause(3000)
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            is_sharp = 0
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        if (is_sharp == 0) {
            if (input.rotation(Rotation.Pitch) < kipp_limit) {
                reset()
            }
        }
    }
    basic.pause(200)
})
