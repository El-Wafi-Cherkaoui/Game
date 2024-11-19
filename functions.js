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
let genrated_word = generate_word()
let tries = 0
function verify_answer(answer) {
    // console.log('answer', answer);
    if(answer == genrated_word){
        return true
    }
    else{
        false
    }
}
function fill_next(correct_answer, tries) {
    let inputs = document.querySelectorAll('input')
    tries += 1
    inputs[tries].value = correct_answer[correct_answer[tries]]
}
// verify_answer(genrated_word)