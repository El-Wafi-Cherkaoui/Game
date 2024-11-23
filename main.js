import { generate_word, Affichage } from "./functions.js";

let btn = document.createElement('button')
btn.textContent="start"
document.body.append(btn)

btn.onclick = ()=>{
    let br = document.createElement('br');
    document.body.append(br)
    let random_word = generate_word()
    let data = ''
    let tries_counter = 0
    console.log(random_word);
    
    Affichage(random_word, data, {tries: tries_counter})

};