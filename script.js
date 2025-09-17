const addButton = document.getElementById('add');

const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea");
    const notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));


};

const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');

    const HTMLData = `<div class="operation">
        <button class="edit"><i class="fa-solid fa-edit"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea> `;
    note.insertAdjacentHTML('afterbegin', HTMLData);

    // Taking references
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');


    // Deleting the textarea
    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    });

    // Toggle edit button


    textArea.value = text;
    mainDiv.innerHTML = text;
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        updateLSData();
    });

    document.body.appendChild(note);

};

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) { notes.forEach((note) => addNewNote(note)) };

addButton.addEventListener('click', () => addNewNote());






const Theme = document.getElementById('theme');
const Heading = document.getElementById('heading');
const Circle = document.getElementById('circle');
const Keep = document.getElementById('keep');
const FA = document.getElementById('fakeep');

const changeTheme = document.createElement("input");
changeTheme.type = "color";
changeTheme.style.display = "none"; // keep it invisible


Theme.addEventListener("click", () => {
    changeTheme.click();
});

changeTheme.addEventListener("input", () => {
    Heading.style.backgroundColor = changeTheme.value;
    Circle.style.backgroundColor = changeTheme.value;
});