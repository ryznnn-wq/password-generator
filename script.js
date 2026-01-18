const pass = document.getElementById("password");
const panjang = 15;

const kapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kapitil = "abcdefghijklmnopqrstuvwxyz";
const nomor = "1234567890";
const simbol = "!@#$%^&*()_+{}|[]";
const semua = kapital + kapitil + nomor + simbol;

function buatpassword(){
    let password = "";
    password += kapital[Math.floor(Math.random()*kapital.length)];
    password += kapitil[Math.floor(Math.random()*kapitil.length)];
    password += nomor[Math.floor(Math.random()*nomor.length)];
    password += simbol[Math.floor(Math.random()*simbol.length)];

    while(panjang > password.length){
        password += semua[Math.floor(Math.random()*semua.length)];
    }
    pass.value = password;
}

function salinpassword(){
    pass.select();
    document.execCommand("copy");
}