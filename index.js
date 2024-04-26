/*Question 1: (30 marks)
 You are working on a web application for a car rental company. They want to keep track of their car inventory and rental information. Your task is to create a JavaScript 
class or function constructor for representing cars in their inventory and another one for representing rental information. 
 Requirements: 
1) Create a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
 b. model (string): The model of the car, e.g., "Camry". 
 c. year (number): The year the car was manufactured, e.g., 2020. 
 d. isAvailable (boolean): Indicates if the car is currently available for rent. 
 The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 
*/

class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }
  
  
  
  
  const car1 = new Car("Toyota", "Camry", 2020, true);
  const car2 = new Car("Honda", "Accord", 2019, false);
  
  car1.toggleAvailability(); 
  console.log(car1.isAvailable); 
  
  car2.toggleAvailability(); 
  console.log(car2.isAvailable); 

  

/*  Create a Rental class or function constructor that has the following properties: ● car (Car object): The car that has been rented. 
 ● renterName (string): The name of the person who rented the car. ● rentalStartDate (Date object): The start date of the rental period. ● rentalEndDate (Date object): The end date of the rental period. 
 The Rental class or function constructor should also have a method called calculateRentalDuration that returns the rental duration in days. 
*/
 class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
  
    calculateRentalDuration() {
      const startDate = this.rentalStartDate.getTime();
      const endDate = this.rentalEndDate.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      const durationInMilliseconds = endDate - startDate;
      return Math.ceil(durationInMilliseconds / millisecondsPerDay);
    }
  }
  
  const carx = new Car("Toyota", "Camry", 2020, true);
  const cary = new Car("Honda", "Accord", 2019, false);

  
  const rental1 = new Rental(carx, "John Doe", new Date("2024-04-01"), new Date("2024-04-05"));
const rental2 = new Rental(cary, "Jane Smith", new Date("2024-04-10"), new Date("2024-04-15"));

console.log(rental1.calculateRentalDuration()); 
console.log(rental2.calculateRentalDuration());






/* Create an instance of the Car class or function constructor for a car in the inventory. 
 Then, create an instance of the Rental class or function constructor for a rental involving the car you created. 
 Finally, calculate the rental duration using the calculateRentalDuration method.
*/
 const car = new Car("Toyota", "Camry", 2020, true);
const rental = new Rental(car, "John Smith", new Date("2024-04-20"), new Date("2024-04-25"));
const rentalDuration = rental.calculateRentalDuration();
console.log("Rental Duration:", rentalDuration, "days");



/*You are building a simple quiz app that contains multiple-choice questions. Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress. 
 1. Create a Question class with the following properties: 
 ● text(string): The text of the question. 
 ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question. 
 The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise. 
*/

class Question {
      constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }


  
  const question1 = new Question(
    "What is the capital of France?",
    ["London", "Paris", "Berlin", "Rome"],
    "Paris"
  );
  
 
  const userAnswer = "Paris";
  console.log(question1.checkAnswer(userAnswer)); 
  
  
    



/*   Create a Quiz class with the following properties: 
● questions(array):An array of Question objects. 
● currentQuestionIndex(number): The index of the current question in the questions array. 
● score(number): The user’s current score. 
The Quiz class should have the following methods: 
● addQuestion: Takes a Question object as a parameter and adds it to the questions array. 
● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex. 
● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class, and updates the score if the answer is correct.
*/
class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }
  
  
  
