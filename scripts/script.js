/* Модальное окно */

const editBtn = document.querySelector(".profile__edit-btn");
const editForm = document.querySelector(".edit-form");
const closeBtn = document.querySelector(".edit-form__close-btn");
const closeOverlay = document.querySelector(".edit-form__overlay");


function openEditForm() {
    editForm.classList.add("edit-form_active")
    document.body.classList.add("body_overflow_hidden")
}


function closeEditForm() {
    editForm.classList.remove("edit-form_active")
    document.body.classList.remove("body_overflow_hidden")
}


editBtn.addEventListener('click', openEditForm);
closeBtn.addEventListener('click', closeEditForm);
closeOverlay.addEventListener('click', closeEditForm);


/* Изменение инфы в профиле */
let username = document.querySelector('.profile__title');
let profession = document.querySelector('.profile__subtitle');
let formElement = document.querySelector(".edit-form__form");
let usernameInput = document.querySelector('.input__text_type_username');
let professionInput = document.querySelector('.input__text_type_profession');
let saveInfoBtn = document.querySelector('.edit-form__submit-btn');


formElement.onsubmit = function(evt)  {
    evt.preventDefault();
    username.textContent = usernameInput.value;
    profession.textContent = professionInput.value;
};

saveInfoBtn.addEventListener('click', closeEditForm);