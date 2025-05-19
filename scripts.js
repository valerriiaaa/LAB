// Діалог з користувачем
// function userDialog() {
//     let choice;
//     let attempts = 0;

//     do {
//         choice = prompt("Який розділ вас цікавить найбільше?\n1 - Романи\n2 - Огляди\n3 - Автори");
//         attempts++;
//         if (choice === "1") {
//             alert("Розділ 'Романи' містить список класичних і сучасних творів.");
//         } else if (choice === "2") {
//             alert("У розділі 'Огляди' ви знайдете рецензії та думки читачів.");
//         } else if (choice === "3") {
//             alert("Розділ 'Автори' містить інформацію про письменників.");
//         } else {
//             alert("Будь ласка, введіть число від 1 до 3.");
//         }
//     } while ((choice !== "1" && choice !== "2" && choice !== "3") && attempts < 3);
// }

// // Інформація про розробника
// function showDeveloperInfo(surname, name, position = "веб-розробник") {
//     alert(`Розробник сторінки:\n${surname} ${name}\nПосада: ${position}`);
// }

// //Порівняння двох рядків
// function compareStrings() {
//     var str1 = document.getElementById("string1").textContent;
//     var str2 = document.getElementById("string2").textContent;

//     if (str1.length > str2.length) {
//         alert(`Рядок з більшою довжиною: "${str1}"`);
//     } else if (str2.length > str1.length) {
//         alert(`Рядок з більшою довжиною: "${str2}"`);
//     } else {
//         alert(`Рядки однакової довжини: "${str1}" та "${str2}"`);
//     }
// }

// // Фон на 30 секунд
// function changeBackgroundTemporarily() {
//     const originalColor = document.body.style.backgroundColor;
//     document.body.style.backgroundColor = "#fceabb"; 

//     setTimeout(() => {
//         document.body.style.backgroundColor = originalColor;
//     }, 30000); 
// }

// // Перенаправлення на іншу сторінку через 15 секунд
// function redirectAfterDelay() {
//     setTimeout(() => {
//         location.href = "novels.html";
//     }, 15000); 
// }

// // 4. Вставка елементів і робота з вузлами
// function manipulateDOM() {
//     const container = document.querySelector(".announcement");

//     // innerHTML / outerHTML / textContent / data
//     const announcementText = container.querySelector(".announcement-text");
//     console.log("innerHTML:", announcementText.innerHTML);
//     console.log("outerHTML:", announcementText.outerHTML);
//     console.log("textContent:", announcementText.textContent);
//     console.log("nodeValue/data:", announcementText.firstChild?.data || "немає текстового вузла");

//     // createElement, createTextNode, append, prepend, after
//     const newPara = document.createElement("p");
//     const textNode = document.createTextNode("✨ Дякуємо, що завітали на наш сайт про книги!");
//     newPara.appendChild(textNode);
//     container.append(newPara); // додає в кінець

//     const welcome = document.createElement("h4");
//     welcome.textContent = "👋 Вітаємо, книголюбе!";
//     container.prepend(welcome); // додає на початок

//     const note = document.createElement("div");
//     note.textContent = "Оцініть літературні новинки та світову класику!";
//     container.after(note); // після блоку

//     // replaceWith
//     const oldHeading = document.querySelector("h1");
//     const newHeading = document.createElement("h1");
//     newHeading.textContent = "📖 Літературна подорож починається!";
//     oldHeading.replaceWith(newHeading);

//     // remove 
//     const banner = document.getElementById("banner");
//     banner.remove();
// }

// function highlightLinks() {

//     const links = document.querySelectorAll(".section a");
//     console.log(links);
//     links.forEach(link => {
//         link.style.backgroundColor = "#87CEFA"; 
//         link.style.border = "1px solid rgb(13, 63, 170)";
//         link.style.padding = "4px";
//         link.style.borderRadius = "5px";
//     });

// }

// function writeWelcomeMessage() {
//     document.write("<p style='color: white; font-weight: bold;'>📅 Сьогодні: " + new Date().toLocaleDateString("uk-UA") + "</p>");
// }

//userDialog();
//showDeveloperInfo("Темко", "Валерія");
//compareStrings();
//changeBackgroundTemporarily();
//redirectAfterDelay();
//manipulateDOM();
//highlightLinks();


// Обробник події через атрибут
// function highlightRow(el) {
//     el.style.backgroundColor = "#7aa8ed";
// }

// Обробник через властивість

// const heading = document.querySelector('h1');

//     heading.onmouseover = function() {
//         heading.style.fontSize = "42px";
//     };

//     heading.onmouseout = function() {
//         heading.style.fontSize = "36px";
//     };

// Метод addEventListener: кілька обробників до однієї події
const buttons = document.querySelectorAll('.toggleDescriptionBtn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling; // <p> йде одразу після <button>

      if (description.style.display === 'none') {
        description.style.display = 'block';
        button.textContent = 'Сховати опис';
      } else {
        description.style.display = 'none';
        button.textContent = 'Показати опис книги';
      }
    });
  });

// Обробник події як об'єкт з handleEvent
// const bookClickHandler = {
//     handleEvent(event) {
//         alert("Ви натиснули на книгу: " + event.currentTarget.innerText.trim());
//         event.currentTarget.removeEventListener("click", bookClickHandler);
//     }
// };

// document.addEventListener("DOMContentLoaded", () => {
//     const bookLinks = document.querySelectorAll("td:nth-child(2) a"); // Вибір другого стовпця - назви книг
//     bookLinks.forEach(link => {
//         link.addEventListener("click", bookClickHandler);
//     });
// });

// Підсвічування елементів списку <ul>
// document.querySelector("#list-reviews").onclick = function(event) {
//     if (event.target.tagName === "LI") {
//         // Знімаємо попередню активність
//         document.querySelectorAll("ul li").forEach(li => li.classList.remove("active"));
//         // Додаємо активність до натиснутого елемента
//         event.target.classList.add("active");
//     }
// };


// document.querySelector(".menu").onclick = function(event) {
//     const button = event.target.closest("button");
//     if (!button) return;

//     const countSpan = button.querySelector(".count");
//     let count = parseInt(button.getAttribute("data-count"), 10) || 0;

//     count++;
//     button.setAttribute("data-count", count);
//     countSpan.textContent = count;
// };


//////

//Використати події mouseover, mouseout та event.target, event.relatedTarget. 
document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll(".books tbody tr");

    tableRows.forEach(row => {
        row.addEventListener("mouseover", function (event) {
            // Перевірка, щоб не спрацьовувало при переході між дочірніми елементами
            if (!row.contains(event.relatedTarget)) {
                row.style.backgroundColor = "#f0f8ff"; // Світло-блакитний фон
                row.style.cursor = "pointer";
            }
        });

        row.addEventListener("mouseout", function (event) {
            // Перевірка, щоб не спрацьовувало при переході між дочірніми елементами
            if (!row.contains(event.relatedTarget)) {
                row.style.backgroundColor = "";
                row.style.cursor = "default";
            }
        });
    });
});

// Перетягування елемента (обкладинка + назва книги)
let draggedElem = null;
let clone = null;
let shiftX = 0;
let shiftY = 0;

document.querySelectorAll('.draggable').forEach(elem => {
    elem.addEventListener('mousedown', (event) => {
        event.preventDefault(); 

        draggedElem = elem;

        const rect = elem.getBoundingClientRect();
        shiftX = event.clientX - rect.left;
        shiftY = event.clientY - rect.top;

        // Створюємо клон
        clone = elem.cloneNode(true);
        clone.classList.add('dragging');
        clone.style.position = 'absolute';
        clone.style.left = event.pageX - shiftX + 'px';
        clone.style.top = event.pageY - shiftY + 'px';
        clone.style.width = rect.width + 'px';
        document.body.appendChild(clone);

        function moveAt(pageX, pageY) {
            clone.style.left = pageX - shiftX + 'px';
            clone.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', function onMouseUp(event) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            // Знаходимо зону під курсором
            clone.hidden = true; // тимчасово ховаємо клон, щоб не заважав elementFromPoint
            const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            clone.hidden = false;

            let dropZone = elemBelow?.closest('.drop-zone');
            if (dropZone) {
                dropZone.appendChild(draggedElem);
            }

            // Повертаємо назад, якщо не потрапили в зону
            else {
                document.getElementById('drag-container').appendChild(draggedElem);
            }

            clone.remove();
            clone = null;
            draggedElem = null;
        });
    });

    elem.ondragstart = () => false; // блокуємо стандартне перетягування
});

