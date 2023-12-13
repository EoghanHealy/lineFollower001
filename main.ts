input.onButtonPressed(Button.A, function () {
    speed = 0
    halfSpeed = 0
})
let rightSensor = 0
let leftSensor = 0
let middleSensor = 0
let halfSpeed = 0
let speed = 0
speed = 24
halfSpeed = speed * 0.5
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 400) {
        middleSensor = 0
    } else {
        middleSensor = 1
    }
    if (pins.analogReadPin(AnalogPin.P0) > 400) {
        leftSensor = 0
    } else {
        leftSensor = 1
    }
    if (pins.analogReadPin(AnalogPin.P10) > 400) {
        rightSensor = 0
    } else {
        rightSensor = 1
    }
    if (rightSensor == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, halfSpeed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, halfSpeed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
    }
    if (leftSensor == 1) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, speed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Reverse, halfSpeed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Reverse, halfSpeed)
    }
    if (middleSensor == 1 && (leftSensor == 0 && rightSensor == 0)) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, halfSpeed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, halfSpeed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor3, Kitronik_Robotics_Board.MotorDirection.Forward, halfSpeed)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, halfSpeed)
    }
})
