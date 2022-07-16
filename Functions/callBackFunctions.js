// function callAndAdd(n, callbackFunction) {
//   return n + callbackFunction();
// }

// function returnsThree() {
//   return 3;
// }

// console.log(callAndAdd(2, returnsThree));

// function logIfOdd(n) {
//   if (n % 2 !== 0) {
//     console.log(n);
//   }
// }

// [1, 5, 2, 4, 6, 3].forEach(function logIfOdd(n) { // callback named function
//   if (n % 2 !== 0) {
//     console.log(n);
//   }
// });

// [1, 5, 2, 4, 6, 3].forEach(function (n) { // anonymous function
//   if (n % 2 !== 0) {
//     console.log(n);
//   }
// });

// function logIfOdd(n) {
//   if (n % 2 !== 0) {
//     console.log(n);
//   }
// }

// [1, 5, 2, 4, 6, 3].forEach(logIfOdd);


// Array's map() method is similar to forEach() in that it invokes a callback function for each element in an array. 
// However, map() returns a new array based on what's returned from the callback function. 
// const names = ["David", "Richard", "Veronika"];

// const nameLengths = names.map(function (name) {
//   return name.length;
// });

// console.log(nameLengths);



/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

// const musicData = [
//     { artist: 'Adele', name: '25', sales: 1731000 },
//     { artist: 'Drake', name: 'Views', sales: 1608000 },
//     { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
//     { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
//     { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
//     { artist: 'Original Broadway Cast Recording', 
//       name: 'Hamilton: An American Musical', sales: 820000 },
//     { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
//     { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
//     { artist: 'Rihanna', name: 'Anti', sales: 603000 },
//     { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
// ];

// const albumSalesStrings = musicData.map(function());

console.log(albumSalesStrings);

// checking github ssh key
