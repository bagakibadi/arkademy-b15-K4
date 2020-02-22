function username (name) { //membuat function username dengan parameter name;
    let regex = /^(?=.*?[a-z_])[a-z_]{5,8}$/ //membuat regex minimal 1 huruf kecil dan boleh menggunakan spesial karakter _
	if (name[0] == '_') { //membuat if jika parameter ke 0 (huruf pertama) sama dengan '_' maka mereturn false;
    return false;
    }
    if (regex.test(name)) { // membuat if jika dalam parameter name terdapat value berisi data regex maka true;
        return true;
    } else {
    return false;
    }
}
console.log(username('_mustopa')); // false karena huruf pertama adalah _
console.log(username('ibrahim')); // true karena berisi huruf kecil dengan panjang 8
console.log(username('suparma_')); // true karena berisi huruf kecil dan tanda _ di perbolehkan

function password (pass) { //function password yang berisi parameter pass
	var cek = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!]).{9}$/ // membuat variable cek yang berisi regex dengan ketentuan seperti soal
    if (cek.test(pass)) { //if jika isi parameter pass berisi dengan ketentuan regex yang ada di var cek maka mereturn true 
    return true;
    } else { //jika tidak sesuai akan false
    return false;
    }
}
console.log(password('Beeth0v3n')); // akan mereturn false karena tidak ada tanda seru (seperti contoh di soal)
console.log(password('c4rlMax!!')); // aka mereturn true karena sesuai