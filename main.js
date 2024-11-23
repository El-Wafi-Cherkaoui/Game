import { generate_word, Affichage } from "./functions.js";

let random_word = generate_word()
let data = ''
let tries_counter = 0
console.log(random_word);

Affichage(random_word, data, {tries: tries_counter})

