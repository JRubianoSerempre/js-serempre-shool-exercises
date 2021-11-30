//Declaration variables(get values)
let names = document.getElementById('name');
let cel = document.getElementById('phone-number');
let email = document.getElementById('email');
let country = document.getElementById('country');


//Declaration variables for error(set values)
let errorname = document.getElementById('errorname');
let errcel = document.getElementById('errorphone');
let errmail = document.getElementById('errmail');
let errcountry = document.getElementById('errcountry');


function validate(){
    const space=/^\s+$/;//RegEx for space

// Validation of Contact Name
    if(names.value==null || names.value ==''){
        errorname.innerHTML='Campo requerido';
    }
//validation cellphone
    if(cel==null || cel.value ==''|| space.test(cel.value)){
        errcel.innerHTML='Campo requerido';
    }else if(isNaN(cel.value)){
            errcel.innerHTML='No es un número';
    }else if(cel.toString().length != 10){
    errcel.innerHTML='Debe ser un número de 10 digitos';
}

//Validation email
//Regular Expression
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
/****************************************************************************/
    if(email.value == null || email.value ==''){
        errmail.innerHTML = 'Campo requerido';
    }else if(!emailRegex.test(email.value)){  //format validation with regular expressions
        errmail.innerHTML = 'Correo no válido';
    }
//Validation country
    if(country.value=='default-option'){
        errcountry.innerHTML='Campo requerido';
    }else if(country.value=='CO'){
        alert(`Gracias por suscribirte ${names.value} parcero`);
    }else if(country.value=='ESP'){
        alert(`Gracias por suscribirte ${names.value} tio`);
    }else if(country.value=='ARG'){
        alert(`Gracias por suscribirte ${names.value} pibe`);
    }else if(country.value=='BRA'){
        alert(`Obrigado por subscrever ${names.value}`);

    }


    return false;
}