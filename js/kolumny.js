const oferty = [
    {
        url: "https://ecsmedia.pl/c/komputer-stacjonarny-action-actina-ryzen-2600-16-gb-ram-512-gb-ssd-geforce-gtx-1660-windows-10-b-iext58594946.jpg",
        znizka: "-30%",
        tag: "Nowe",
        nazwa: "Komputer 3000X V4",
        cena: "1599zł",
    },
    {
        url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
        znizka: "-50%",
        nazwa: "NOVONOX 8999 V78",
        cena: "2999zł",
    },
    {
        url: "https://www.apollo.pl/gfx/apollo/_thumbs/sklep_oferta/000/164/817/bandit_bv_green,rH17n6ummWegU83dV6Kf.jpg",
        tag: "Nowe",
        nazwa: "JADE jinn 444",
        cena: "1799zł",
    },
    {
        url: "https://sprzetowo.pl/userdata/public/gfx/46117/Zrzut-ekranu-2021-10-20-141511.png",
        znizka: "-10%",
        tag: "Nowe",
        nazwa: "ACER 7893 V&",
        cena: "6399zł",
    },
    {
        url: "https://ecsmedia.pl/c/komputer-pc-ntt-office-basic-i5-9400-int-8-gb-ram-480-gb-ssd-windows-10-pro-w-iext63325976.jpg",
        znizka: "-30%",
        nazwa: "SAMSUNG 8903 V444",
        cena: "3999zł",
    },
    {
        url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/7/pr_2019_7_31_9_15_59_380_00.jpg",
        znizka: "-90%",
        nazwa: "ACER 777 V1",
        cena: "3299zł",
    },
    {
        url: "https://ecsmedia.pl/c/komputer-stacjonarny-action-actina-ryzen-2600-16-gb-ram-512-gb-ssd-geforce-gtx-1660-windows-10-b-iext58594946.jpg",
        znizka: "-70%",
        tag: "Nowe",
        nazwa: "ASUS 023838 V678",
        cena: "2999zł",
    }
]

let kolumny = document.querySelector("#kolumny")

const like = (i) => {
    i.style.backgroundImage === 'url("img/heart.png")' ?
        i.style.backgroundImage = "url(img/like.png)" :
        i.style.backgroundImage = "url(img/heart.png)"
}

oferty.map(oferta => {
    let div = document.createElement("div")
    div.className = "oferta"

    let image = document.createElement("div")
    image.style.backgroundImage="url(" + oferta.url + ")"
    image.className = "ofertaZdjęcie"

    let znizka = document.createElement("div")
    znizka.innerHTML = oferta.znizka
    znizka.className = "ofertaZnizka"

    let tag = document.createElement("div")  
    tag.innerHTML = oferta.tag
    tag.className = "ofertaTag"       

    let desc = document.createElement("p")
    desc.innerHTML = oferta.nazwa
    desc.className = "ofertaNazwa"

    let cena = document.createElement("p")
    cena.innerHTML = oferta.cena
    cena.className = "ofertaCena"

    let heart = document.createElement("div")
    heart.onclick = () => like(heart)
    heart.style.backgroundImage = "url(img/heart.png)"
    heart.className = "ofertaSerce"

    znizka.innerHTML !== "undefined" && image.appendChild(znizka)
    tag.innerHTML !== "undefined" && image.appendChild(tag)
    image.appendChild(heart)
    div.appendChild(image)
    div.appendChild(desc)
    div.appendChild(cena)
    kolumny.appendChild(div)
})