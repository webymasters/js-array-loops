/*1. Create an empty Array. Manually assign the String 'Hello' to index `[0]`. Manually add 'World' to index `[3]`.
    - Use `console.log()` to dump the Array; Describe the results.
    - What is the `length` of the Array?
    - What value is stored at index `[1]`?
    - After completing the on loops, return back and use the three most common Array-iteration loops to traverse the values of this Array
*/
const atext=[]
atext[0]="Hello"
atext[3]="World"

console.log(atext)

/* 
0: "Hello"
3: "World"
length: 4

Value stored at index[1] is undefined


*****************************

2. Assign the result of querySelectorAll to a `const` variable `allElements`
    - Use `console.log()` to dump the Array; Describe the results.
    - Is `allElements` actually of type `Array`? If not, read up on its type on *"MDN"*, then summarize its intended use and how it differs from an Array
    - After completing the on loops, return back and use the three most common Array-iteration loops to traverse the values of this Array
*/

allelements = document.querySelectorAll("p");
console.log(allelements) 

/*
No it is not an array, it is an Nodelist Object.
A NodeList has items stored at numeric indices and a length property just like an Array , but it does not have have any of the other Array methods ( push , slice and so on).

*****************************

3. Given the starting Array `planets`, defined below, complete the following in the least number of method calls:
    - Use only the five Array methods `push()`, `pop()`, `unshift()`, `shift()`, and `splice()` to modify the Array, resulting in it holding a string representing all eight planets in their positional order in the solar system (starting from the planet closest to the sun at [0], outward)
    - You must use each of the five functions *at least* once each
    - The operations must be done without adding planet names already in the starting Array (ie, `'Venus'` has to be removed, stored and re-added, not just pushed when needed; where as `'Mars'` can simply be added because it does not already exist)
    - How many of the five functions did you require?

    ```jsx
    const planets = ['Neptune', 'Earth', 'Krypton', 'Jupiter', 'Mercury', 'Saturn', 'Venus']

    // Must result in the Array:
    // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    ```

*/

const planets = ['Neptune', 'Earth', 'Krypton', 'Jupiter', 'Mercury', 'Saturn', 'Venus']
planets.shift()
planets.pop()
planets.unshift('Venus')
planets.unshift('Mercury')
planets.splice(3,0,'Mars')
planets.splice(4,1)
planets.splice(7,0,'Uranus') 
planets.push('Neptune') 



console.log(planets)


//8 functiones were used by me to acheive the desiered results
