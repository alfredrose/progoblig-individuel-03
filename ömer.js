document.addEventListener('DOMContentLoaded', function () {
    var tanitimYeri = document.getElementById('tanitim');
    var isim = "Ömer";
    
    tanitimYeri.innerHTML = `<h1>Merhaba, benim adım ${isim}.</h1>
                             <p>Bu bir kişisel tanıtım sayfasıdır.</p>`;
});
