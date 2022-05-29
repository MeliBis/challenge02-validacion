let inputEmail = document.getElementById('email');
/* console.log(inputEmail.value) */

let btn = document.getElementById('btn');

/* validacion */
btn.addEventListener('click', (e) => {
    e.preventDefault();  /* envia info al repo, desabilita las validaciones de html */
//console.log( expReg.test(email)); //testear si en el correo tenemos elemento

    validateEmail(inputEmail.value); /* devuelve lo que ingreso usuario */

});
function validateEmail(email){
    /* expresion regular: */
    let expReg = /@/;
    console.log( expReg.test(email)); //testear si en el correo tenemos elemento

    if(expReg.test(email) == true){
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
        inputEmail.value = '';
    }else{
        inputEmail.style.border = '1px solid red';  /* cambiamos el colora rojo cuando da errorla expresion regular */
        error.style.visibility = 'visibible'; /* acceder al elemento #error, a los estilos y cambiar propiedad visible */
    }
}