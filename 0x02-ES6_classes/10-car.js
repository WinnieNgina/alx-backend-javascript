export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new instance of the current class
    const clonedCar = new this.constructor();

    // Copy the values of the attributes to the new instance
    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key) && key.startsWith('_')) {
        clonedCar[key] = this[key];
      }
    }

    return clonedCar;
  }
}
