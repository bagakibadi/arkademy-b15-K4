function test(input){
  //membuat statement jika inputan adalah string maka akan menampilkan 'Input harus berupa angka!'
  if (typeof input == 'string'){
    console.log('Input harus berupa angka!');
  }
  //memberhentikan jika input string atau menggunakan ''/""
  else
  //looping
  for (var i=1; i <= input; i++){
  //membuat statement jika i habis dibagi tiga dan 7 atau i modulus 3 dan 7 akan menampilkan 'Arkademy' 
		if (i % 3 == 0 && i % 7 == 0) {
			console.log('Arkademy')
		}
    	//jika i habis dibagi 3 atau i modulus 3 akan menampilkan 'Arka'
		else if (i % 3 == 0) {
			console.log('Arka')
		}
    	//jika i habis dibagi 7 atau i modulus 7 akan menampilkan 'Demy'
		else if (i % 7 == 0){
			console.log('Demy')
		}
    	//menampilkan looping i
		else{
			console.log(i)
		}
	}
}
test('solay'); //Input harus berupa angka! (dikarenakan input bukan number)
test('15'); //Input harus berupa angka! (dikarenakan masih menggunakan tanda '' yang berarti string)
test(21); // 1, 2, Arka, 4, 5, Arka, Demy, ... 20, Arkademy dll.