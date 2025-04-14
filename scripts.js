// Діалог з користувачем
function userDialog() {
    let choice;
    let attempts = 0;

    do {
        choice = prompt("Який розділ вас цікавить найбільше?\n1 - Романи\n2 - Огляди\n3 - Автори");
        attempts++;
        if (choice === "1") {
            alert("Розділ 'Романи' містить список класичних і сучасних творів.");
        } else if (choice === "2") {
            alert("У розділі 'Огляди' ви знайдете рецензії та думки читачів.");
        } else if (choice === "3") {
            alert("Розділ 'Автори' містить інформацію про письменників.");
        } else {
            alert("Будь ласка, введіть число від 1 до 3.");
        }
    } while ((choice !== "1" && choice !== "2" && choice !== "3") && attempts < 3);
}

// Інформація про розробника
function showDeveloperInfo(surname, name, position = "веб-розробник") {
    alert(`Розробник сторінки:\n${surname} ${name}\nПосада: ${position}`);
}

//Порівняння двох рядків
function compareStrings() {
    var str1 = document.getElementById("string1").textContent;
    var str2 = document.getElementById("string2").textContent;

    if (str1.length > str2.length) {
        alert(`Рядок з більшою довжиною: "${str1}"`);
    } else if (str2.length > str1.length) {
        alert(`Рядок з більшою довжиною: "${str2}"`);
    } else {
        alert(`Рядки однакової довжини: "${str1}" та "${str2}"`);
    }
}

// Фон на 30 секунд
function changeBackgroundTemporarily() {
    const originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#fceabb"; 

    setTimeout(() => {
        document.body.style.backgroundColor = originalColor;
    }, 30000); 
}

// Перенаправлення на іншу сторінку через 15 секунд
function redirectAfterDelay() {
    setTimeout(() => {
        location.href = "novels.html";
    }, 15000); 
}

// 4. Вставка елементів і робота з вузлами
function manipulateDOM() {
    const container = document.querySelector(".announcement");

    // innerHTML / outerHTML / textContent / data
    const announcementText = container.querySelector(".announcement-text");
    console.log("innerHTML:", announcementText.innerHTML);
    console.log("outerHTML:", announcementText.outerHTML);
    console.log("textContent:", announcementText.textContent);
    console.log("nodeValue/data:", announcementText.firstChild?.data || "немає текстового вузла");

    // createElement, createTextNode, append, prepend, after
    const newPara = document.createElement("p");
    const textNode = document.createTextNode("✨ Дякуємо, що завітали на наш сайт про книги!");
    newPara.appendChild(textNode);
    container.append(newPara); // додає в кінець

    const welcome = document.createElement("h4");
    welcome.textContent = "👋 Вітаємо, книголюбе!";
    container.prepend(welcome); // додає на початок

    const note = document.createElement("div");
    note.textContent = "Оцініть літературні новинки та світову класику!";
    container.after(note); // після блоку

    // replaceWith
    const oldHeading = document.querySelector("h1");
    const newHeading = document.createElement("h1");
    newHeading.textContent = "📖 Літературна подорож починається!";
    oldHeading.replaceWith(newHeading);

    // remove 
    const banner = document.getElementById("banner");
    banner.remove();
}

function highlightLinks() {

    const links = document.querySelectorAll(".section a");

    links.forEach(link => {
        link.style.backgroundColor = "#87CEFA"; 
        link.style.border = "1px solid rgb(13, 63, 170)";
        link.style.padding = "4px";
        link.style.borderRadius = "5px";
    });

}

//userDialog();
//showDeveloperInfo("Темко", "Валерія");
//compareStrings();
//changeBackgroundTemporarily();
//redirectAfterDelay();
//manipulateDOM();
//highlightLinks();
