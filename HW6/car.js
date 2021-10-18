export class Car {
    #brand;
    #model ;
    #yearOfManufacturing;
    #maxSpeed ;
    #maxFuelVolume ;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;
    start() {
        if (this.#isStarted){
            throw new Error ('Машина ещё не заведена')
        }
            this.#isStarted = true
    }
    shutDownEngine () {
        if (!this.#isStarted){
            throw new Error ('Машина ещё не заведена')
        }
            this.#isStarted = false
    }
    fillUpGasTank(fuel) {
        if (!Number.isSafeInteger(fuel)){
            throw new Error ( 'Неверное количество топлива для заправки')
        }
        else if (fuel < 1) {
            throw new Error ('Неверное количество топлива для заправки')
        }
        else if (this.#currentFuelVolume + fuel > this.#maxFuelVolume){
            throw new Error('Топливный бак переполнен')
        } 
        this.#currentFuelVolume += fuel
    }
    drive(speed , hours) {
        if (!Number.isSafeInteger(speed) || speed < 1){
            throw new Error ( 'Неверная скорость')
        }
        else if (!Number.isSafeInteger(hours) || hours < 1) {
            throw new Error ('Неверное количество часов')
        }
        else if (speed > this.#maxSpeed){
            throw new Error( 'Машина не может ехать так быстро')
        }
        else if (this.#isStarted = false) {
            throw new Error ('Машина должна быть заведена, чтобы ехать')
        }
        else if ((this.#fuelConsumption * (speed * hours)) / 100 > this.#currentFuelVolume){
            throw new Error ('Недостаточно топлива')
        }
        this.#currentFuelVolume -= (this.#fuelConsumption * (speed * hours)) / 100
        this.#mileage += (speed * hours)
    }
    get brand() {
        return this.#brand
    }
    get model () {
        return this.#model
    }
    get yearOfManufacturing () {
        return this.#yearOfManufacturing
    }
    get maxSpeed() {
        return this.#maxSpeed
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume
    }
    get fuelConsumption () {
        return this.#fuelConsumption
    }
    get currentFuelVolume () {
        return this.#currentFuelVolume
    }
    get isStarted () {
        return this.#isStarted
    }
    get mileage () {
        return this.#mileage
    }

    set brand (name) {
        if (typeof name !== 'string' || name.length<1 || name.length >50) {
            throw new Error ('You do not meet the requirements of brand')
        }
        this.#brand = name
    }
    set model (name) {
        if (typeof name !== 'string' || name.length<1 || name.length >50) {
            throw new Error ('You do not meet the requirements of model')
        }
        this.#model = name
    }
    set yearOfManufacturing(years) {
        if (!Number.isSafeInteger(years) || years < 1900 || years > 2021){
            throw new Error ('You do not meet the requirements of years')
        }
        this.#yearOfManufacturing = years
    }
    set maxSpeed(value) {
        if (!Number.isSafeInteger(value) || value < 100 || value > 300){
            throw new Error ('You do not meet the requirements of max speed')
        }
        this.#maxSpeed = value
    }
    set maxFuelVolume(value) {
        if (!Number.isSafeInteger(value) || value < 5 || value > 20){
            throw new Error ('You do not meet the requirements of max fuel volume')
        }
        this.#maxFuelVolume = value
    }
    set fuelConsumption(value){
        if(!Number.isSafeInteger(value)){
            throw new Error ('You do not meet the requirements of max fuel consumption')
        }
        this.#fuelConsumption = value
    }
}

