// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (input === undefined || input === true || input === false){
        return "Hello, World!"
    } else {
    return "Hello, " + input + "!";
    }
}

function isFive(input) {
    if (input === 5){
        return true;
    } else {
        return false;
    }
}

