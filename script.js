function reverseThisString (str) {
   const array = [];

   for(let i = str.length - 1; i >= 0; i--) {
       array.push(str[i]);
   }
   return array.join('');

}

console.log(reverseThisString('Hello'));


function swapcase (str) {
const array = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === str.toUpperCase()[i]) {
     array.push(str.toLowerCase()[i]);
    }
    else {
        array.push(str.toUpperCase()[i]);
    }
}
return array.join('');
}

console.log(swapcase('ILOVEcomputersciENCE'));


function toCelsius (array) {
    let temperature = ((array - 32) * 5/9); 
    
    return temperature;
}

const array = [56, 85];
console.log(array.map(toCelsius));


function passOrFail (array) {
    let pass = true;
    if (array < 75) {
        pass = false;
    }
    return pass;
}
const array2 = [34, 65, 46, 90, 86];
console.log(array2.map(passOrFail));

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
 
    const array = [];

    for(let i = 0; i < germanNumbers.length; i++) {
    array[i] = `${cardinalNumbers[i]} is ${germanNumbers[i]}`;
    }
    return array;
}
console.log(germanNumbers());

function returnPrimeNumbers() {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const array = numbers.filter(x => {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return x > 1;
    });
    return array;
}
console.log(returnPrimeNumbers());

function computerScienceLoop() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('CSC225 RULES I LOVE JAVASCRIPT');
        }
        else if (i % 5 === 0) {
            console.log('I LOVE JAVASCRIPT');
        }
        else if ( i % 3 === 0){
          console.log('CSC225 RULES');
          
        }
        else {
            console.log(i);
        }

    }
}
computerScienceLoop();