const carMakers: string[] = [];
const dates = [new Date(), new Date()];

// const carsByMake = [
//     ['f150'],
//     ['corolla'],
//     ['camaro']
// ]
const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car) => {
    return car.toUpperCase();
})

// Flexible types
// const importantDates = [new Date(), '2020-10-10']
const importantDates: (string | Date)[] = [new Date(), '2020-10-10']
importantDates.push('2030-10-10')
importantDates.push(new Date())
