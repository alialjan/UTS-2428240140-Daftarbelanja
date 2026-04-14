// simpan ke local storage
localStorage.setItem("nama barang", 123);

//baca data local storage
//tampilkan di consol
console.log(localStorage.getItem("nama barang"))

//tampilkan di paragraf id npm
document.getElementById("nama barang").innerHTML = localStorage.getItem("nama barang")