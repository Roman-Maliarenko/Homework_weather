// Задание 1

const getElement = (array, index) => {
    return array[index];
}
const arr = ["Mondey", "Tuesday", "Wednesday", "Thursday", "Fridy"];
const index = 3;
console.log(getElement(arr, index));

// Задание 2

const thisWeather = (weather, decode) => {
const description = decode(weather);
return `Today is : ${description}`;
}
const codeWeather = (code) => {
switch (code){
    case 1:
        return `SQ`;
    case 2:
        return `PO`;
    case 3:
        return `FC`;
    case 4:
        return `BR`;
    case 5:
        return `Nothing`    
    }
};
const weather = 1;
console.log(thisWeather(weather, codeWeather));