const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');


for (const key in map) {
  console.log(key); 
}  // now it does not print anything and not gives us error because




//Correct Way: Use for...of

for (const [key, value] of map) {
  console.log(key, value);  // IN India
}