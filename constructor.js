class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      return `${this.brand} ${this.model} was made in ${this.year}.`;
    }
  }
  
  const myCar = new Car('Tesla', 'Model X', 2023);
  console.log(myCar.displayInfo()); // Output: Tesla Model X was made in 2023.

  // more examples

  {
    class Vehicle {
        constructor(type) {
          this.type = type;
        }
      }
      
      class Car extends Vehicle {
        constructor(brand, model, year) {
          super('Car'); // Calls the parent (Vehicle) constructor
          this.brand = brand;
          this.model = model;
          this.year = year;
        }
      }
      
      const myCar = new Car('Toyota', 'Corolla', 2022);
      console.log(myCar.type); // Output: Car
      
  }