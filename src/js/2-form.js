let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();

    if (!fieldValue) {
        return;
    }
    formData[fieldName] = fieldValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(formData);
    formData = { email: "", message: "" };
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
});

function loadFormData() {
    const storageData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (!storageData) {
        return;
    }
    Object.keys(storageData).forEach((key) => {
        form.elements[key].value = storageData[key];
        formData[key] = storageData[key];
    });
}

loadFormData();
