namespace distanceSensor {

    //% block="きょりセンサーの値"
    export function getDistance(): number {
        return pins.analogReadPin(AnalogReadWritePin.P2);
    }
}
