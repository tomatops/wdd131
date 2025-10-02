const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
    });

    input.value = "";
    input.focus();
}

function setChapterList() {
    localStorage.setItem("scriptureList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("scriptureList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}