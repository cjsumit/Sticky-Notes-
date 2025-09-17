const addButton = document.getElementById('add');

const updateLSData = () => {
    const textAreaData = document.querySelectorAll("textarea");
    const Input = document.querySelectorAll("input");
    const notes = [];
    const headings = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });
    Input.forEach((heading) => {
        return headings.push(heading.value);
    });


    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('headings', JSON.stringify(headings));
    console.log(headings);


};

const addNewNote = (text = '', text1 = '') => {
    const note = document.createElement('div');
    note.classList.add('note');

    const HTMLData = `<div class="operation">
    <div class="main1 ${text1 ? "hidden" : ""}"></div><input type="text" class="head ${text1 ? "" : "hidden"}" id="head">
        <button class="edit"><i class="fa-solid fa-edit"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div><hr>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea> `;
    note.insertAdjacentHTML('afterbegin', HTMLData);

    // Taking references
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const mainDiv1 = note.querySelector('.main1');
    const textArea = note.querySelector('textarea');
    const Input = note.querySelector('#head');


    // Deleting the textarea
    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    });

    // Toggle edit button

    Input.value = text1;
    textArea.value = text;
    mainDiv.innerHTML = text;
    mainDiv1.innerHTML = text1;
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        mainDiv1.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        Input.classList.toggle('hidden');
        textArea.style.backgroundColor = "#edede9";
        Input.style.backgroundColor = "#edede9";
    });

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        updateLSData();
    });
    Input.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv1.innerHTML = value;

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