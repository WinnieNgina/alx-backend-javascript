import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key) && key.startsWith('_')) {
        clonedCar[key] = this[key];
      }
    }

    return clonedCar;
  }
}

