radio.onReceivedValue(function (name, value) {
    if (name == "M1") {
        M1の速度 = value
        if (M1の速度 > 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, M1の速度)
        } else if (M1の速度 < 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, Math.abs(M1の速度))
        } else {
            maqueen.motorStop(maqueen.aMotors.M1)
        }
    } else if (name == "M2") {
        M2の速度 = value
        if (M2の速度 > 0) {
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, M2の速度)
        } else if (M2の速度 < 0) {
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, Math.abs(M2の速度))
        } else {
            maqueen.motorStop(maqueen.aMotors.M2)
        }
    } else if (name == "LED") {
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    } else if (name == "MUSIC") {
        if (value == 1) {
            music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        }
    }
})
let M2の速度 = 0
let M1の速度 = 0
radio.setGroup(36)
basic.showIcon(IconNames.Happy)
