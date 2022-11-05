// при клике на кнопку старта запускаеться функцию startIgra()
//startKnopka.onclick=start;
var igraPole = document.querySelector(".tigen");
var ponedilok = document.querySelector(".ponedilok")
var vivtorok = document.querySelector(".vivtorok")
var sereda = document.querySelector(".sereda")
var chetver = document.querySelector(".chetver")
var patnyca = document.querySelector(".patnyca")
var sobota = document.querySelector(".sobota")
var nedilya = document.querySelector(".nedilya")

var igraPole = document.querySelector("#igra");

function start() {
    block()
    deleteDay()

}
start()

function block() {

    var logo = document.createElement("div");
    logo.id = "logo";
    logo.innerText = "DiabeticHelp";
    igraPole.appendChild(logo);
    var block = document.createElement("div");
    block.id = "block";
    igraPole.appendChild(block);
    var perchTup = document.createElement("div");
    perchTup.id = "perchTup";
    perchTup.innerText = "Другий тип";
    igraPole.appendChild(perchTup);

    var info = document.createElement("div")
    info.id = "info";
    info.innerText = "Більше 400 мільйонів людей живуть з діабетом по всьому світу та прогнозується, що поширеність продовжуватиме зростати. Це була сьома провідна причина смерті у 2016 році. Поширеність діабету в Україні збільшилася за останніх 10 років на половину. Інсулінозалежний діабет (І типу) складає 6,5% усіх випадків захворювання. Майже 3% первинної інвалідності дорослого населення в України є наслідком захворювання на діабет."
    igraPole.appendChild(info)

    var info1 = document.createElement("div")
    info1.id = "info1";
    info1.innerText = "Профілактика діабету ІІ типу полягає у простих заходах з підтримання здорового способу життя:"
    igraPole.appendChild(info1)

    var info2 = document.createElement("div")
    info2.id = "info2";
    info2.innerText = "- досягнути нормальної ваги тіла та підтримувати її;"
    igraPole.appendChild(info2)

    var info3 = document.createElement("div")
    info3.id = "info3";
    info3.innerText = "- бути фізично активним та приділяти не менше 150 хвилин на тиждень регулярній фізичній активності;"
    igraPole.appendChild(info3)

    var info4 = document.createElement("div")
    info4.id = "info4";
    info4.innerText = "- дотримуватись здорового харчування та зменшувати кількість цукру та насичених жирів утримуватись від паління та зловживання алколем"
    igraPole.appendChild(info4)

    var dopInfo = document.createElement("div")
    dopInfo.id = "dopInfo";
    dopInfo.innerText = "Додаткова Інформація"
    igraPole.appendChild(dopInfo)

    dopInfo.onclick = function () {
        logo.style.display = "none"
        igra.style.background = "white"
        perchTup.style.display = "none"
        dryguiTup.style.display = "none"
        info.style.display = "none"
        info1.style.display = "none"
        info2.style.display = "none"
        info3.style.display = "none"
        info4.style.display = "none"
        dopInfo.style.display = "none"
        var moloko = document.createElement("div")
        moloko.id = "moloko";
        moloko.innerText = ""
        igraPole.appendChild(moloko);

        var yagodu = document.createElement("div")
        yagodu.id = "yagodu";
        yagodu.innerText = ""
        igraPole.appendChild(yagodu)

        var hlib = document.createElement("div")
        hlib.id = "hlib";
        hlib.innerText = ""
        igraPole.appendChild(hlib)

        var ruba = document.createElement("div")
        ruba.id = "ruba";
        ruba.innerText = ""
        igraPole.appendChild(ruba)

        var yauca = document.createElement("div")
        yauca.id = "yauca";
        yauca.innerText = ""
        igraPole.appendChild(yauca)

        var korusniYa = document.createElement("div")
        korusniYa.id = "korusniYa";
        korusniYa.innerText = "• полуниця; • вишня; • черешня; • диня; • ківі; • цитрусові. Є таке негласне правило долоні. Денна порція ягід діабетику повинна поміщатися на долоні."
        igraPole.appendChild(korusniYa);

        var korusniUa = document.createElement("div")
        korusniUa.id = "korusniUa";
        korusniUa.innerText = "В залежності вжитого білка  --  не більше 3-х яэць вдень."
        igraPole.appendChild(korusniUa);

        var korusniRu = document.createElement("div")
        korusniRu.id = "korusniRu";
        korusniRu.innerText = "Риба при цукровому діабеті має бути невід’ємною частиною кожної дієти.Їжте рибу, принаймні, один раз в тиждень."
        igraPole.appendChild(korusniRu);

        var korusniHlib = document.createElement("div")
        korusniHlib.id = "korusniHlib";
        korusniHlib.innerText = "Білий хліб необхідно виключати з раціону.Чорний хліб вважається найкориснішим для діабетиків"
        igraPole.appendChild(korusniHlib);

        var korusniMol = document.createElement("div")
        korusniMol.id = "korusniMol";
        korusniMol.innerText = " Кисле молоко при діабеті та кількість кисломолочних продуктів тримайте в межах добової норми – до 100-150 г нежирного сиру, 1 стакан кефіру або йогурту."
        igraPole.appendChild(korusniMol);

        var backs = document.createElement("div")
        backs.id = "backs";
        backs.innerText = "Повернутися назад"
        igraPole.appendChild(backs)

        backs.onclick = function () {
            backs.remove()
            logo.style.display = "block"
            igra.style.backgroundImage = "url(images/fon.jpg)"
            perchTup.style.display = "block"
            dryguiTup.style.display = "block"
            info.style.display = "block"
            info1.style.display = "block"
            info2.style.display = "block"
            info3.style.display = "block"
            info4.style.display = "block"
            dopInfo.style.display = "block"
            moloko.remove()
            yagodu.remove()
            hlib.remove()
            ruba.remove()
            yauca.remove()
            korusniHlib.remove()
            korusniMol.remove()
            korusniRu.remove()
            korusniUa.remove()
            korusniYa.remove()


        }
    }

    perchTup.onclick = function () {

        logo.style.display = "none"
        igra.style.backgroundImage = "none"
        perchTup.style.display = "none"
        dryguiTup.style.display = "none"
        info.style.display = "none"
        info1.style.display = "none"
        info2.style.display = "none"
        info3.style.display = "none"
        info4.style.display = "none"
        dopInfo.style.display = "none"



        blockDay()
        setTimeout(function () {
            pokaznuk()
        }, 500)
    }
    var dryguiTup = document.createElement("div");
    dryguiTup.id = "dryguiTup";
    dryguiTup.innerText = "Перший тип";
    igraPole.appendChild(dryguiTup);

    dryguiTup.onclick = function () {
        logo.style.display = "none"
        igra.style.background = "none"
        perchTup.style.display = "none"
        dryguiTup.style.display = "none"
        info.style.display = "none"
        info1.style.display = "none"
        info2.style.display = "none"
        info3.style.display = "none"
        info4.style.display = "none"
        dopInfo.style.display = "none"

        blockPershiyTup()
        setTimeout(function () {
            var zastav = document.createElement("div");
            zastav.id = "zastav";
            zastav.innerText = "Цукровий діабет 1 типу це аутоімунний стан  при якому імунні клітини організма людини атакують  і назавжди вимикають свої ж клітини що виробляють інсулін у підшлунковій залозі";
            igraPole.appendChild(zastav);
        }, 500)
    }
}
/* Дні тижня */




function blockDeletePershiyTup() {

}
function blockPershiyTup() {
    pershiyDay.style.display = "block"
    drygiyDay.style.display = "block"
    tretiyDay.style.display = "block"
    chetvertuyDay.style.display = "block"
    pytuyDay.style.display = "block"
    shostuyDay.style.display = "block"
    shomuyDay.style.display = "block"
    logo.style.display = "none"

}
/*========== Понеділок Перший Тип =========*/
var pershiyDay = document.createElement("div");
pershiyDay.id = "pershiyDay";
pershiyDay.innerText = "Понеділок";
igraPole.appendChild(pershiyDay);

pershiyDay.onclick = function () {
    blockDeletePershiyTup()

    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()

    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Гречана каша з грибами"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Салат зі свіжої капусти, огірків, помідор + куряче філе на пару"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Запечена риба"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}

/*========== Вівторок  Перший Тип =========*/
var drygiyDay = document.createElement("div");
drygiyDay.id = "drygiyDay";
drygiyDay.innerText = "Вівторок";
igraPole.appendChild(drygiyDay);

drygiyDay.onclick = function () {

    blockDeletePershiyTup()
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Омлет з 2 яєць та брокколі"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Тушкована курка з баклажанами"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Салат з авокадо, варених креветок, болгарського перцю та листя салату"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}

/*========== Середа  Перший Тип =========*/
var tretiyDay = document.createElement("div");
tretiyDay.id = "tretiyDay";
tretiyDay.innerText = "Середа";
igraPole.appendChild(tretiyDay);

tretiyDay.onclick = function () {

    blockDeletePershiyTup()
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Сир з волоськими горіхами"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Парові тефтелі з телятини з тушкованою квасолею та нутом"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Філе індички запечене з овочами"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}

/*========== Четвер  Перший Тип =========*/
var chetvertuyDay = document.createElement("div");
chetvertuyDay.id = "chetvertuyDay";
chetvertuyDay.innerText = "Четверг";
igraPole.appendChild(chetvertuyDay);

chetvertuyDay.onclick = function () {


    blockDeletePershiyTup()
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Оладки з житнього борошна, 1 груша"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Запіканка з броколі та цвітної капусти + курка відварена"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Тушкований кролик з цукіні"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}

/*========== Пятниця  Перший Тип =========*/
var pytuyDay = document.createElement("div");
pytuyDay.id = "pytuyDay";
pytuyDay.innerText = "Пятниця";
igraPole.appendChild(pytuyDay);

pytuyDay.onclick = function () {


    blockDeletePershiyTup()
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Сирна запіканка"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Салат із селери, свіжих огірків, редиски, зелені + грибний суп-пюре"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Салат із квасолею та відвареною індичкою"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}

/*========== Субота Перший Тип =========*/
var shostuyDay = document.createElement("div");
shostuyDay.id = "shostuyDay";
shostuyDay.innerText = "Субота";
igraPole.appendChild(shostuyDay);

shostuyDay.onclick = function () {

    blockDeletePershiyTup()
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Вівсяна каша з яблуком та корицею + варене яйце"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Салат зі свіжої капусти та огірків + яловичі котлети на пару"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Запіканка"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}

/*========== Неділя Перший Тип =========*/
var shomuyDay = document.createElement("div");
shomuyDay.id = "shomuyDay";
shomuyDay.innerText = "Неділя";
igraPole.appendChild(shomuyDay);

shomuyDay.onclick = function () {

    blockDeletePershiyTup()
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Хлібець з м'яким сиром + відварене яйце"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Салат із пекінської капусти, зеленого горошку та огірків + суп із фрикадельками та шпинатом"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Тушкована риба з овочами"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockPershiyTup()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
/*===================== */
function blockPershiyTup() {
    pershiyDay.style.display = "block"
    drygiyDay.style.display = "block"
    tretiyDay.style.display = "block"
    chetvertuyDay.style.display = "block"
    pytuyDay.style.display = "block"
    shostuyDay.style.display = "block"
    shomuyDay.style.display = "block"

}

function blockDeletePershiyTup() {
    pershiyDay.style.display = "none"
    drygiyDay.style.display = "none"
    tretiyDay.style.display = "none"
    chetvertuyDay.style.display = "none"
    pytuyDay.style.display = "none"
    shostuyDay.style.display = "none"
    shomuyDay.style.display = "none"
    zastav.style.display = "none"
}





/*===========      Понеділок Другий тип ==========*/

function ponedilokk() {

    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()


    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Cалат з моркви 70 гр вершкове масло 5 гр  молочна геркулесова каша 200 гр  чай не солодкий"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Oвочевий борщ 250 гр, салат овочевий 100 гр  рагу овочеве 70 гр  хліб-50"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Запіканка сирна 150 гр  свіжий горошок 70 гр чай"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
ponedilok.onclick = function () {
    ponedilokk()
}

/*===== Вівторок  Другий тип ======*/

function vivtorokk() {
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Cалат з капусти 70 гр, відварна риба 50 гр, чай не солодкий, хліб;"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)
    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Овочевий суп 250 гр, відварна курка 70 гр, хліб, яблуко, компот;"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "М'ясні котлети на пару 150 гр, яйце, хліб;"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
vivtorok.onclick = function () {
    vivtorokk();
    shovznuk()
}

/*===== Середа  Другий тип ======*/

function seredaa() {
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Каша гречана 150 гр, нежирний сир 150 гр, чай;"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)
    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Відварне м'ясо 75 гр, овочеве рагу 250 гр, тушкована капуста 100 гр, компот;"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "М'ясні тефтелі 110 гр, овочі тушковані 150 гр, хліб, відвар шипшини;"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)

    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
sereda.onclick = function () {
    seredaa()
}
/*===== Четвер  Другий тип ======*/
function chetverr() {
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Відварений буряк 70 гр, рисова каша 150 гр, сир 1 шматок, кава;"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)
    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Рибний суп 250 гр, кабачкова ікра 70 гр, відварене куряче м'ясо 150 гр, хліб, лимонад домашній без цукру;"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Гречана каша 150 гр, салат з овочів 170 гр, хліб, чай;"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
chetver.onclick = function () {
    chetverr()
}
/*===== Пятниця  Другий тип ======*/
function patnycaa() {
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Cалат з яблука і моркви, нежирний сир 100 гр, чай, хліб;"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)
    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Овочевий суп 200 гр, м'ясний гуляш 150 гр, овочева ікра 50 гр, хліб, компот;"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Риба запечена 150 гр, пшоняна каша на молоці 150 гр, хліб, чай;"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
patnyca.onclick = function () {
    patnycaa()
}
/*===== Субота  Другий тип ======*/
function sobotaa() {
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    menuA.innerText = "Сниданок"
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()
    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Молочна геркулесова каша 250 гр, морквяний салат 70 гр, хліб, кава;"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)
    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Вермішелевий суп 200 гр, тушкована печінка 150 гр, відварений рис 50 гр, хліб, компот;"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Перлова каша 200 гр, кабачкова ікра 70 гр, хліб, чай;"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
sobota.onclick = function () {
    sobotaa()
}
/*===== Неділя  Другий тип ======*/
function nedilyaa() {
    rivenGl.style.display = "none"
    perchRiv.style.display = "none"
    drygRiv.style.display = "none"
    tretRiv.style.display = "none"
    var menuA = document.createElement("div")
    menuA.id = "menuA";
    var h2 = document.createElement("h2");
    menuA.innerText = "Сниданок";
    igraPole.appendChild(menuA)

    var menuB = document.createElement("div")
    menuB.id = "menuB";
    menuB.innerText = "Обид"
    igraPole.appendChild(menuB)

    var menuC = document.createElement("div")
    menuC.id = "menuC";
    menuC.innerText = "Вечеря"
    igraPole.appendChild(menuC)
    deleteDay()

    setTimeout(function () {
        var stravaA = document.createElement("div")
        stravaA.id = "stravaA";
        stravaA.innerText = "Гречана каша 250 гр, нежирний сир 1 шматок, тушкована буряк 70 гр, хліб, чай;"
        igraPole.appendChild(stravaA)
        deleteDay()
    }, 1000)

    setTimeout(function () {
        var stravaB = document.createElement("div")
        stravaB.id = "stravaB";
        stravaB.innerText = "Суп з квасолі 250 гр, плов з куркою 150 гр, тушковані баклажани 70 гр, хліб, морс з журавлини;"
        igraPole.appendChild(stravaB)
        deleteDay()
    }, 2000)
    setTimeout(function () {
        var stravaC = document.createElement("div")
        stravaC.id = "stravaC";
        stravaC.innerText = "Каша з гарбуза 200 гр, м'ясна котлета 100 гр, салат з овочів 100 гр, хліб, компот;"
        igraPole.appendChild(stravaC)
        deleteDay()
    }, 3000)
    setTimeout(function () {
        var back = document.createElement("div")
        back.id = "back";
        back.innerText = "Повернутися назад"
        igraPole.appendChild(back)
        back.onclick = function () {
            blockDay()
            menuA.remove()
            menuB.remove()
            menuC.remove()
            stravaA.remove()
            stravaB.remove()
            stravaC.remove()
            back.remove()
        }
    }, 5000)
}
nedilya.onclick = function () {
    nedilyaa()
}
/*=======================================*/




function deleteDay() {
    ponedilok.style.display = "none";
    vivtorok.style.display = "none";
    sereda.style.display = "none";
    chetver.style.display = "none";
    patnyca.style.display = "none";
    sobota.style.display = "none";
    nedilya.style.display = "none";


}

function blockDay() {
    ponedilok.style.display = "block";
    vivtorok.style.display = "block";
    sereda.style.display = "block";
    chetver.style.display = "block";
    patnyca.style.display = "block";
    sobota.style.display = "block";
    nedilya.style.display = "block";


}










