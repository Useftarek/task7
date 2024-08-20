// Arrays -

// 1-

// function mostDigit(num) {

//         let mostDigit = num.toString();
    
    
//         return mostDigit[0];
//     }
    
//     console.log(mostDigit(432));
    

// -----------------------------------------------------------

// 2- 
    // function Numbers (arr) {
    //     let positive = 0;
    //     let negative = 0;
    //     let even = 0;
    //     let odd = 0;

    //     for (let i = 0; i <arr.length; i++) {
    //         let num = arr[i];
            
    //         if (num > 0) {
    //             positive++;
    //         } else if (num < 0) {
    //             negative++;
    //         }
    //         if (num % 2 === 0) {
    //             even++;
    //         } else {
    //             odd ++
    //         }
    //     }

    //     return {
    //     positive: positive,
    //     negative: negative,
    //     even: even,
    //     odd: odd,
    //     }
        
    // }

    // let arr = [5, 7, -2, 0, 4, -8, -3, 6]

    // let result = Numbers(arr);

    // console.log(result);
    

    // ------------------------------------------------------------------------------

    // 3-


    
// function filterr(arr) {

//     return arr.filter(arr => Number.isInteger(arr));
// }



//     let arr = ["Ahmed", 12, "Mohamed", 34, "Mahmoud", 12, 54 ,1, NaN, 2, "a", "aba"]

//     let result = filterr(arr);

// console.log(result);


// ---------------------------------------------------------------------------------------------

// 4- 

// function customSlice(arr, start, end) {
//     let slice =[];
  
//     if(end===undefined || end > arr.length)
//       end = arr.length;
  
//     for (let i = start; i < end; i++) {
//         slice.push(arr[i]);
//     }
//     return slice;
//   }
  
//   myArray = customSlice([8,3,4,5,4],1);

//   console.log(myArray);




// --------------------------------------------------------------------------------

// 10- 

// function Elements(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];
//             if (sum === num) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// let array = [1, 2, 3 ,4 ,5] ;
// let check = 7;


// console.log(Elements(array, check));
