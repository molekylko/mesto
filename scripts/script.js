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