// 18:SEEING THE WORLD: Think of at least five places in the world youd'd like to visit.
// .Store the locations in a Array.Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let locationArr:string[] = ["Malaysia", "Korea", "Canada", "Turkey", "America"]

// .Print your array in its original order.
console.log(locationArr)
// .Print your array in alphabetical order without modifying the actual list.
locationArr.sort()
console.log(locationArr)

// .Show that your array is still in its original order by printing it.
console.log(locationArr)

// .Print your array in reverse alphabetical order without changing the order of the original list
locationArr.reverse()
console.log(locationArr)

// • Show that your array is still in its original order by printing it again.
console.log("\nReverse order after sorting")
console.log(locationArr)

// • Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of the array
locationArr.reverse();

// Print the reversed array
console.log(locationArr);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// Reverse the order again to get back to the original order
locationArr.reverse();

// Print the array to show it's back to its original order
console.log(locationArr);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Sort the array in alphabetical order
locationArr.sort();

// Print the sorted array
console.log(locationArr);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Sort the array in reverse alphabetical order
locationArr.sort().reverse();

// Print the reversed array
console.log(locationArr);