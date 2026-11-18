//% color="#34ebe1" icon="\uf06e" block="きょりセンサー"
namespace distanceSensor {

    //% block="しょう害物とのきょり"
    export function getDistance(): number {
        return pins.analogReadPin(AnalogReadWritePin.P2);
    }
}
