const doc ={
    div: document.querySelector('#divA'),
    mehet: document.querySelector('#mehet'),
    ertek: document.querySelector('#meret')
}

doc.mehet.addEventListener('click', tervezes)


function tervezes()
{
    let meret = String(doc.ertek.value)
    const pattern = /[a-zA-Z]/;
    let n = pattern.test(meret)
    console.log(n)
    if (n==true) {
        alert("A meret nem lehet betu!!")
        doc.ertek.value=""
    }else{
        epites(meret)  
    }
}

function epites(meret)
{
    const szamStr = meret
    const szamNmb = parseInt(szamStr, 10)
    const star = "*"
    const nothing = " "
    const torzs = "I"
    const br = "<br>"
    let csilagSzam = 1
    let nothingSzam = szamNmb-1
    var div =``

        for (let i = 0; i < szamNmb; i++){
            for (let i = 0; i < nothingSzam; i++) {
                    console.log(nothing) 
                    div += nothing
            }
            nothingSzam -= 1
            for (let i = 0; i < csilagSzam; ++i){
                console.log(star)
                div += star
            }
            csilagSzam+=2
            div += br
        }
        for (let i = 0; i < szamNmb-1; i++) {
            div += nothing
        }
    div += torzs

    console.log(div)
    doc.div.innerHTML = div
}
