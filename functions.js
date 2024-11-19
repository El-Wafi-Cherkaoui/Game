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
console.log(generate_word())