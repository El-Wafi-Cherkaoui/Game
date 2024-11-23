function get_data() { 
    const inputs = []
    const inputsdata = document.querySelectorAll('input')
    let inser = ""
    
    inputsdata.forEach(input=> {
        inputs.push(input.value)
        inser+=input.value
    })    
    return inser;

 }

function Affichage(word, data_cont, tries){
    
    let lenghtW = word.length;
     let inp = document.createElement('input')
     inp.id = "c0"
     inp.value= word[0]
     document.body.append(inp)

     inp.setAttribute('maxlength', '1');
     inp.style.width = '20px';
     inp.style.marginRight = '5px';
     inp.style.margin= '10px';

 
     for (let index = 1; index < lenghtW ; index++) {
        let inp = document.createElement('input')
        inp.id = `c${index}`
        document.body.append(inp) 
        
        inp.setAttribute('maxlength', '1');
        inp.style.width = '20px';
        inp.style.marginRight = '5px';
        inp.style.margin= '10px';

     }
     let btn = document.createElement('button')
     btn.textContent="send"
     
     btn.onclick = ()=>{
        let answer_is_correct = verify_answer(get_data(), word)
        
         if(word.length== tries.tries+1){            
            youlose()    
        }
        else if(answer_is_correct){
            alert('congrats!')
        }
        
        else{
            fill_next(word, tries)
        }
     }
     document.body.append(btn)
    

    btn.style.backgroundColor = '#007bff';
    btn.style.color = '#fff';             
    btn.style.padding = '8px 16px';        
    btn.style.border = 'none';           
    btn.style.borderRadius = '4px';        
    btn.style.cursor = 'pointer';
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
function verify_answer(answer, correct_answer) {
    // console.log('answer', answer);
    if(correct_answer == answer){
        return true
    }
    else{
        return false
    }
}
function fill_next(correct_answer, tries_counter) {
    // console.log(tries_counter);
    let inputs = document.getElementById(`c${Number(tries_counter.tries+1)}`)
    tries_counter.tries += 1
    inputs.value = correct_answer[tries_counter.tries]
}

function youlose() {
    alert('You Lose -- No guess')

}
     


export{generate_word, Affichage}