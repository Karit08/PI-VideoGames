export default function validate (input){
    let err ={};
    let validateLetters = /^[a-zA-Z]+$/
    let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/
    let validateDigits = /^[0-9]+$/

    if(!input.name || input.name ===' ' || !validateLetters.test(input.name)) err.name = 'You have to write a name and don´t have to a space y espacios';
    if(!validateUrl.test(input.image)) err.image ='You need a Image';
    if(!input.description ) err.description = 'You have to write a escription';
    if(!input.released) err.released = 'Your relesed need a form like DD/MM/AAAA';
    if(!validateDigits.test(input.rating) || !input.rating || input.rating < 0 || input.rating > 5) err.rating = 'You need to write a number bewteen 1-5';
    
    return err;
}

// || !validateLetters.test(input.description)