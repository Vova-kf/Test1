
function pokaznuk() {
    var rivenGl = document.createElement("div")
    rivenGl.id = "rivenGl";
    rivenGl.innerText = "Ривень глюкози";
    igraPole.appendChild(rivenGl)
    var perchRiv = document.createElement("div")
    perchRiv.id = "perchRiv";
    perchRiv.innerText = "3,5 -- нижний ривень";
    igraPole.appendChild(perchRiv)
    var drygRiv = document.createElement("div")
    drygRiv.id = "drygRiv";
    drygRiv.innerText = "5,5 -- норма";
    igraPole.appendChild(drygRiv)
    var tretRiv = document.createElement("div")
    tretRiv.id = "tretRiv";
    tretRiv.innerText = "7.5 > бильше -- небезпечний ривень";
    igraPole.appendChild(tretRiv)


}
/*
function shovznuk(){
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
}
*/

function menuDenne() {
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA);

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
}

function harchyvanS() {
    var stravaA = document.createElement("div")
    stravaA.id = "stravaA";
    stravaA.innerText = "салат з моркви 70 гр вершкове масло 5 гр  молочна геркулесова каша 200 гр  чай не солодкий"
    var stravaB = document.createElement("div")
    stravaB.id = "stravaB";
    stravaB.innerText = "овочевий борщ 250 гр, салат овочевий 100 гр  рагу овочеве 70 гр  хліб-50"
    var stravaC = document.createElement("div")
    stravaC.id = "stravaC";
    stravaC.innerText = "запіканка сирна 150 гр  свіжий горошок 70 гр чай"

}










