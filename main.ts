input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    } else if (receivedString == "right") {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    } else if (receivedString == "stop") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    }
})
MFRC522.Init()
motobit.enable(MotorPower.On)
radio.setGroup(1)
basic.showIcon(IconNames.Giraffe)
basic.forever(function () {
	
})
basic.forever(function () {
    if (MFRC522.getID() == 83024669965) {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    }
})
