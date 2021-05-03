let input = "Fuck You!";
input = input.toLowerCase();

let vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            if (input[i] === "e") {
                resultArray.push("EE");
            } else if (input[i] === "u") {
                resultArray.push("UU");
            } else {
                resultArray.push(vowels[j].toUpperCase());
            }
        }
    }
}

console.log(resultArray.join(""))