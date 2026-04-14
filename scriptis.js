let namabarang = document.getElementById("nama barang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");
function simpan(){
    console.log(namabarang.value)
    console.log(namabarang.value)
        
    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    // jika lokal storage belum ada isi/ value
    if (localStorage.getItem("Daftar belanja")===null){
        //simpan array kosong
        localStorage.setItem("Daftar belanja", "[]")
    }

    //panggil local storage (konversi string ke object)
    let data = JSON.parse(localStorage.getItem("Daftar belanja"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        namabarang: namabarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value,

    })
    console.log(data)

    //simpan data ke dalam local storage
    //konversikan dari object ke string 
    localStorage.setItem("Daftar belanja", JSON.stringify(data))

    //panggil tampil
    tampil()
}

function tampil(){
    //panggil local storage
    let hasil = JSON.parse(localStorage.getItem("Daftar belanja"))
    //clear element ul id = list-mhs
    document.getElementById("list-mhs").innerHTML = ""

    //lakukan perulangan menggunkan  forEach
    hasil.forEach(element => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `<div class ="col-lg-4 col-md-6" >
        <h4 class ="text-danger">${element.keterangan}</h4><class ="text-primary">${element.jumlah}</><h6 class ="text-danger"> ${element.namabarang}</h6> 
        </div>`
        

    });
}
//jalankan fuction tampil()
tampil()
