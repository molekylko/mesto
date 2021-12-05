/* Модальное окно */

const editBtn = document.querySelector(".profile__edit-btn");
const editForm = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__close-btn");
const closeOverlay = document.querySelector(".popup__overlay");
let username = document.querySelector('.profile__title');
let profession = document.querySelector('.profile__subtitle');
let formElement = document.querySelector(".popup__form");
let usernameInput = document.querySelector('.popup__text_type_username');
let professionInput = document.querySelector('.popup__text_type_profession');
let saveInfoBtn = document.querySelector('.popup__submit-btn');

function openEditForm() {
    editForm.classList.add("popup_active")
    usernameInput.value = username.textContent;
    professionInput.value = profession.textContent;
}


function closeEditForm() {
    editForm.classList.remove("popup_active")
}


editBtn.addEventListener('click', openEditForm);
closeBtn.addEventListener('click', closeEditForm);
closeOverlay.addEventListener('click', closeEditForm);


/* Изменение инфы в профиле */
formElement.onsubmit = function(evt)  {
    evt.preventDefault();
    username.textContent = usernameInput.value;
    profession.textContent = professionInput.value;
    closeEditForm();
};