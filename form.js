console.log('FORM VALIDATION');


//form validation

const uname = document.querySelector('.name')
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const add = document.querySelector('.add')
const pin = document.querySelector('.pin')
const state = document.querySelector('.state')
const gender = document.querySelector('.gender')
const pass = document.querySelector('.pass')
const check = document.querySelector('.check')
const nameerror = document.querySelector('.nameerror')
const emailerror = document.querySelector('.emailerror')
const phoneerror = document.querySelector('.phoneerror')
const adderror = document.querySelector('.adderror')
const pinerror = document.querySelector('.pinerror')
const stateerror = document.querySelector('.stateerror')
const radioerror = document.querySelector('.radioerror')
const passerror = document.querySelector('.passerror')
const checkerror = document.querySelector('.checkerror')


let result = false;



//main-logic function
function validateform() {
    let user = uname.value;
    let npattern = /[A-Z][a-z]+$/;
    let nout = npattern.test(uname.value);

    let mail = email.value;
    let epattern = /([A-Za-z0-9]*)([\W]*)([a-zA-Z0-9]*)@g|hotmail\.(com|in)/;
    let eout = epattern.test(mail);

    let mob = phone.value;
    let mpattern = /[789][0-9]{9}/;
    let mout = mpattern.test(mob);

    let addr = add.value;
    let apattern = /[0-9]{0,5}\,[A-z]+/;
    let aout = apattern.test(addr);

    let pinn = pin.value;
    let ppattern = /[0-9]{6}/;
    let pout = ppattern.test(pinn);

    let stat = state.value;
    let spattern = /[A-z]+/;
    let sout = spattern.test(stat);

    let word = pass.value;
    let wpattern = /[A-Z]+[a-z0-9-.@!_]{7,}/;
    let wout = wpattern.test(word);

    if (user == '' || nout == false || mail == '' || eout == false || mob == '' || mout == false || addr == '' || aout == false || pinn == '' || pout == false || stat == '' || sout == false || word == '' || wout == false) {
        one();
        two();
        three();
        four();
        five();
        six();
        seven();
        if (result == false) {
            return result;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}


// username function
let one = function () {
    let user = uname.value;
    let npattern = /[A-Z][a-z]+$/;
    let nout = npattern.test(uname.value);
    if (user == '') {
        nameerror.innerHTML = '**Please fill the Name';
        // console.log('space');
        return result;
    }
    else if (nout == false) {
        nameerror.innerHTML = '**First letter must be Capital';
        // console.log(nout);
        return result;
    }
    else {
        nameerror.innerHTML = '';
        console.log('jaii');
        return true;
    }
}

let two = function () {
    let mail = email.value;
    let epattern = /([A-Za-z0-9]*)([\W]*)([a-zA-Z0-9]*)@g|hotmail\.(com|in)/;
    let eout = epattern.test(mail);
    if (mail == '') {
        emailerror.innerHTML = '**Please fill the valid Email Address';
        return result;
    }
    else if (eout == false) {
        emailerror.innerHTML = '**Use Special Characters';
        return result;
    }
    else {
        emailerror.innerHTML = '';
        return true;
    }
}


let three = function () {
    let mob = phone.value;
    let mpattern = /[789][0-9]{9}/;
    let mout = mpattern.test(mob);
    if (mob == '') {
        phoneerror.innerHTML = '**Please fill the Phone Number';
        return result;
    }
    else if (mout == false) {
        phoneerror.innerHTML = '**First Digit must be 7,8 or 9';
        return result;
    }
    else {
        phoneerror.innerHTML = '';
        return true;
    }
}


let four = function () {
    let addr = add.value;
    let apattern = /[0-9]{0,5}\,[A-z]+/;
    let aout = apattern.test(addr);
    if (addr == '') {
        adderror.innerHTML = '**Please fill the Address';
        return result;
    }
    else if (aout == false) {
        adderror.innerHTML = '**First must be Home number';
        return result;
    }
    else {
        adderror.innerHTML = '';
        return true;
    }
}


let five = function () {
    let pinn = pin.value;
    let ppattern = /[0-9]{6}/;
    let pout = ppattern.test(pinn);
    if (pinn == '') {
        pinerror.innerHTML = '**Please fill the Pincode';
        return result;
    }
    else if (pout == false) {
        pinerror.innerHTML = '**Pincode must be 6 digit';
        return result;
    }
    else {
        pinerror.innerHTML = '';
        return true;
    }
}

let six = function () {
    let stat = state.value;
    let spattern = /[A-z]+/;
    let sout = spattern.test(stat);
    if (stat == '') {
        stateerror.innerHTML = '**Please fill the State name';
        return result;
    }
    else if (sout == false) {
        stateerror.innerHTML = '**Use only alphabet and must be Capital';
        return result;
    }
    else {
        stateerror.innerHTML = '';
        return true;
    }
}

let seven = function () {
    let word = pass.value;
    let wpattern = /[A-Z]+[a-z0-9-.@!_]{7,}/;
    let wout = wpattern.test(word);
    if (word == '') {
        passerror.innerHTML = '**Please fill the Password';
        return result;
    }
    else if (wout == false) {
        passerror.innerHTML = '**First Character must be Capital';
        return true;
    }
    else {
        passerror.innerHTML = '';
        return true;
    }
}