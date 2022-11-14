import fruits from './foods.js';
import {choice, remove} from './helpers.js';

const randFruit = choice(fruits);
console.log(`I'd like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log('Delicious! May I have another?');
remove(fruits, randFruit);
console.log(`I'm sorry we're all out. We have ${fruits.length} left`);