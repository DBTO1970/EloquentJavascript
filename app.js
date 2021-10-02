// excercise 1 looping triangle
// for (triBlock = '#'; triBlock.length <= 7; triBlock += "#") {
//     console.log(triBlock);
// }

// exercise FizzBuzz
// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//             console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

const range = (n1, n2) => {
  console.log(n1, n2);
  let numberArray = [];
  let message;
  total = 0;
  const sum = (array) => {
        
        array.forEach((i) => total = i + total);
    };
  if (isNaN(n1) || isNaN(n2) ) {
      message = 'These are not numbers';
      console.log(message);
  } else {
    if (n1 < n2) {
        message = 'Success!';
        numberArray[0] = n1;
        let n = n1 + 1;
        while (n <= n2) {
            numberArray.push(n);
            n++;
        }
        sum(numberArray);
        
    } else {
            message = 'Success!';
            numberArray[0] = n2;
            let n = n2 + 1;
            while (n <= n1) {
            numberArray.push(n);
            n++;
            }
            sum(numberArray);

        }
    }
    console.log(message);
    console.log(total);
};



range(1, 10);


