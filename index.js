// Задание 1
//обычная функцая
function number(array, index){
    return array [index]

}

const getElement = (array, index) => {
    return array[index];
}
const arr = ["Mondey", "Tuesday", "Wednesday", "Thursday", "Friday"];
const index = 3;
console.log(getElement(arr, index));

// Задание 2
const thisWeather = (weather, decode) => {
const description = decode(weather);
return `Today is : ${description}`;
}
const decode = (weather) => {
switch (weather){
    case "SQ":
        return `шквал`;
    case "PO":
        return `пыльный вихрь`;
    case "FC":
        return `торнадо`;
    case "BR":
        return `дымка (видимость от 1 до 9 км)`;
    case "HZ":
        return `мгла (видимость менее 10 км)`; 
    }
};
const weather = "SQ";
console.log(thisWeather(weather, decode));