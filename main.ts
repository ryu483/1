//% color="#2c3e50" icon="\uf06e" block="きょりセンサー"
namespace distanceSensor {

    //% block="前に しょう害物がある"
    export function isObstacle(): boolean {
        return pins.analogReadPin(AnalogReadWritePin.P2) >= 500;
    }

    //% block="しょう害物とのきょり"
    export function getDistance(): number {
        return pins.analogReadPin(AnalogReadWritePin.P2);
    }
}