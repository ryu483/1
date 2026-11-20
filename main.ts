//% color="#03fce3" icon="\uf06e" block="きょりセンサー"
namespace distanceSensor {

    //% block="きょりセンサーの値"
    export function getDistance(): number {
        return pins.analogReadPin(AnalogReadWritePin.P2);
    }
}
