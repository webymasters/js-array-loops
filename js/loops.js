
/*
## Exercises

1. Given the Array `[1, 2, 4, 8, 16, 32, 64]`, use a counted `for` loop to:
    - Print each values from the Array to a new line of the console, ***forward***
    - Print each values from the Array to a new line of the console, ***backward***

*/


const arr=[1, 2, 4, 8, 16, 32, 64]


//Forward
for (var i=0; i<arr.length; i++)
{
  console.log(arr[i])
  
}

//Backward
for (var i=arr.length-1; i>=0; i--)
{
  console.log(arr[i])
  
}

/*
2. Using a JavaScript speed benchmarking tool (like [https://jsbench.me/](https://jsbench.me/) or [https://jsben.ch/](https://jsben.ch/)), determine which looping method, between `for`, `for-of`, and `forEach()`, is the fastest for iterating over the following Arrays:
    - `[1, 2, 3, 4, 5]`
    - `['hello', 'world]`
    - `[1, 'hello', 3, 'world, 5]`
    - `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]`
    - `['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']`
    - In HTML, create a `<ul>` with *ten* children `<li>`. Use `querySelectorAll` to select all `<li>`, then iterate over the resulting `NodeList`
    - The String: `'Hello, world!'`
        - Note, `forEach()` cannot iterate a String because it's not part of the String prototype, so a function must first convert the String to an Array (or similar)

*/

//Part1

const arr1 = [1, 2, 3, 4, 5];
arr.forEach(value=>{
  console.log(value);
});

//part2
const arr2 = ['hello', 'world'];
arr2.forEach(value=>{
  console.log(value);
});

//part3
const arr3 = [1,'hello', 3, 'world', 5];
arr3.forEach(value=>{
  console.log(value);
});

//part4
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arr4.forEach(value=>{
  console.log(value);
});

//part5
const arr5= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
arr5.forEach(value=>{
  console.log(value);
});

//part6
  const liElements = document.querySelectorAll('li')
  liElements.forEach(ele => {
    console.log(ele.textContent)
  })

var words = 'Hello, world!';
const arr6 = words.split(',');
arr6.forEach(value=>{
  console.log(value);
});

/*

3. Do the answers to the above question change if using a browser with a different JavaScript engine (Firefox vs Chrome, for example)?
    - Note, Chrome and Edge now use the same engine, so like have relatively similar outcomes

Ans: The result seems very much same in chrome and mozila.

*/