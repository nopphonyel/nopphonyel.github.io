inp_name = document.getElementById("inp_name");
btn_enc = document.getElementById("btn_enc");

p_enc_name = document.getElementById("enc_name");

function run() {
    var name = inp_name.value;
    const arr = new Int8Array(name.length);
    var res = "";

    console.log(name.length)

    for(let i = 0; i < name.length; i++){
        var n = name.charCodeAt(i);
        var code_back = n & 15;
        var code_fron = (n & 240) >> 4;
        res += code_fron.toString(16) + code_back.toString(16)
    }
    p_enc_name.innerText = res

};

