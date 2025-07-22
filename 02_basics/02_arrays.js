const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// push
marvel.push(dc);   // They doesn't merge instead of that it bcomes array within an array which we doesn't want 
console.log(marvel);     

// like if we access 3rd elements from array now it's itself an array so we access it like that
console.log(marvel[3][1]);

// concat => it merges two arrays together it doesn't modify original array
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const allHeores = marvel_heros.concat(dc_heros)
console.log(marvel_heros);
console.log(allHeores);

// spread

// When we use spread then elements of an array become individual. So, now the values that we will get in all new heroes are actually spread out values,
// that is , we will get only one element
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// we prefer spread over concat because in concat we can give only one value but in spread we can give as much value as we want

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// flat => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

// 

console.log(Array.isArray("Tanisha")); // it's tell about that tanisha is an array or not
// from => creates an array
console.log(Array.from("Tanisha"));  

// from method
console.log(Array.from({name: "Tanisha"})); // interesting it give empty string

// of method
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));   // Returns a new array
