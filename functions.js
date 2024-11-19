
function Affichage(word){
     let lenghtW = word.length;
     let inp = document.createElement('input')
     inp.id = "c1"
     inp.value= word[0]
     document.body.append(inp)
     
     for (let index = 1; index <= lenghtW ; index++) {
        let inp = document.createElement('input')
        inp.id = `c${index}`
        document.body.append(inp) 
     }
     let btn = document.createElement('button')
     btn.textContent="send"
     document.body.append(btn)
    
}

function generate_word(){
    let words = [
        "elwafi",
        "sife",
        "hamdi",
        "jaj"
    ]
    let randomWord = ""

    randomWord = words[Math.floor(Math.random()*words.length)]

    return randomWord
}
