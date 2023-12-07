//Ex 11
console.log("Ex 11")
let carParams={
    year: 2010,
    mileage: 120000,
    startingPrice: 50000,
    finalPrice: 40000,
    increaseStartingPrice: function () {
        this.startingPrice += 1000;
    },
    lowerByAge: function () {
        let ageCar = new Date().getFullYear() - this.year;
        this.finalPrice -= ageCar * 1000;

    },
    lowerByMileage: function () {
        let lowerPrice = Math.floor(this.mileage / 100000) * 10000;
        this.finalPrice -= lowerPrice;

    },
    getMileageAndYear: function (newMileage, newYear) {
        this.mileage = newMileage;
        this.year = newYear;
        this.lowerByAge();
        this.lowerByMileage();
    },

}
// a) The method that increases the initial price by 1000..
console.log('A) Initial price')
console.log(carParams.startingPrice)
carParams.increaseStartingPrice();
console.log("After increasing the initial price by 1000:");
console.log(carParams.startingPrice);
// b) The method that reduces the final price by 1000 for each year of the car's age.
console.log('B) Initial price')
console.log(carParams.finalPrice)
carParams.lowerByAge();
console.log("After reducing the final price based on age:");
console.log(carParams.finalPrice);
// c) The method that decreases the final price by 10,000 for every 100,000 kilometers of the car's mileage.
console.log('C) Initial price')
console.log(carParams.finalPrice)
carParams.lowerByMileage();
console.log("After reducing the final price based on mileage:");
console.log(carParams.finalPrice);
// d) The method that adds the provided mileage and year to the car, automatically recalculating the price."
carParams.getMileageAndYear(1500, 2015);
console.log("After adding a new mileage and year:");
console.log(carParams);

// 11.2 Functions for an array of car objects.
console.log("Ex 11.2")
let cars = [];

// e) A function that will add a car to the array of cars if its price is greater than 10000.
function addCar(add) {
    if (add.startingPrice > 10000) {
        cars.push(add);
    }
}

// f) A function that increases the year by 1 for all cars in the array.
function increaseYear() {
    for (let carParams of cars) {
        carParams.year += 1;
    }
}

addCar(carParams);
console.log("After adding a car to the array:");
console.log(cars);

increaseYear();
console.log("After increasing the year for all cars in the array:");
console.log(cars);



// 12.1 Class Grade
console.log("Ex 12")
class Grade {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
}

// 12.2
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._grades = [];
        this.averageGrade = 0;
    }

    // 12.3
    set grade(grade) {
        if (grade instanceof Grade) {
            this._grades.push(grade);
            this.calculateAverageGrade();
        } else {
            console.error("The provided value is not an instance of the Grade class");
        }
    }

    calculateAverageGrade() {
        if (this._grades.length === 0) {
            this.averageGrade = 0;
        } else {
            const sumOfGrades = this._grades.reduce((sum, grade) => sum + grade.value, 0);
            this.averageGrade = sumOfGrades / this._grades.length;
        }
    }

// 12.4
    get grades() {
        return this._grades.map((grade) => `${grade.subject}: ${grade.value}`);
    }

    hello() {
        return `Hi, ${this.firstName} ${this.lastName}! Your average grade is: ${this.averageGrade.toFixed(2)}.`;
    }
}

const student1 = new Student("Jan", "Kowalski");
const grade1 = new Grade("MPR", 5);
const grade2 = new Grade("TIN", 5);
const grade3 = new Grade("ANG", 4);

student1.grade = grade1;
student1.grade = grade2;
student1.grade = grade3;

console.log(student1.hello());
console.log(student1.grades);
