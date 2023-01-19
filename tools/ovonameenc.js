inp_name = document.getElementById("inp_name");
btn_enc = document.getElementById("btn_enc");

p_enc_name = document.getElementById("enc_name");

function run() {
    let name = inp_name.value;
    let res = "";

    console.log(name.length)

    let n, code_back, code_fron;
    for (let i = 0; i < name.length; i++) {
        n = name.charCodeAt(i);
        code_back = n & 15;
        code_fron = (n & 240) >> 4;
        res += code_fron.toString(16) + code_back.toString(16)
    }
    p_enc_name.innerText = res

}

