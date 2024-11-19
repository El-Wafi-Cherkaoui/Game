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
get_data()
 