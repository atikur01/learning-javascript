const cars1 = [
    "Saab",
    "Volvo",
    "BMW"
];



const cars = new Array("Saab", "Volvo", "BMW");
cars.sort()
console.log(cars)

//Use the same trick to sort an array ascending:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

console.log(points)


//Use the same trick to sort an array descending:
//const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

console.log(points)