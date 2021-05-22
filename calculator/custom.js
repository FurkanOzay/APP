const buton = document.getElementsByTagName('button')
const hesapla = document.getElementById('calculate')
const sifirla = document.getElementById('reset')
const sonuc = document.getElementById('result')


function islem(){
    sonuc.value = eval(sonuc.value)
}

hesapla.addEventListener('click', islem)


function yazdir(){
    sonuc.value = sonuc.value + this.value
}

for(let i = 0; i <= 15 ; i++){
    if(i != 12 && i != 14){
        buton[i].addEventListener('click', yazdir)
    }
}

function temizle(){
    sonuc.value = ""
}

sifirla.addEventListener('click', temizle)




