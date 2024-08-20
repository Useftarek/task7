// 1-

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); 


// ---------------------------------------------------------
// 2-


// function strings(start, end) {

//     return start.toLowerCase() === end.toLowerCase();
// }

// console.log(strings("Eraa", "eraa")); //true 
// console.log(strings("Mohamed", "Moamen")); //false


// --------------------------------------------------------------
// 3-

// function isUpperCase(string) {
//     return string == string.toUpperCase();
// }

// console.log(isUpperCase("HELLO")); 
// console.log(isUpperCase('hello'));


//-----------------------------------------------------------

// 4-

// function slice(str1, start, end) {

//     return str1.slice(start, end);

// }


// console.log(slice("Moamen", 1,5)); 

// ----------------------------------------------------------------
// 5-

// function convert(fName, mName, lName) {
//     return `${fName} ${mName} ${lName}`;
// }


// console.log(convert("usef","Tarek","Tooson"));

// ---------------------------------------------------
// 7-
    // function trimString(string) {
    //     return string.trim();
    // }


    // console.log(trimString("   usef Tarek  "));

// ------------------------------------------------------------

// 8-
// function withE(url) {
//     return url.startsWith("ww.") && url.endsWith(".eraa");
// }

// console.log(withE("ww.moamen.eraa")); //true
// console.log(withE("w3w.sherif.err")); //false

// -----------------------------------------------------------------

// 9-

// function remove(str) {
//     return str.replace(/o/gi,'');
// }

// console.log(remove("Hello WOrld"));  

// ---------------------------------------------------------------------
// 10

// function checkstrings(start, middle, end) {

//     return (start.includes(middle) && start.includes(end)) 
        
   
// }

// console.log(checkstrings("SoWhatYesOhh", "What", "Ohh")); // true

// console.log(checkstrings("So","Ah")); //Flase