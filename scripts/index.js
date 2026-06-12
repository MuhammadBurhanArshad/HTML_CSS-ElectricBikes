document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }
    });

    const specButtons = document.querySelectorAll('.spec-btn');
    const specModal = document.getElementById('specModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    specButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalTitle.textContent = btn.getAttribute('data-model') + " Specifications";
            modalBody.textContent = btn.getAttribute('data-specs');
            specModal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        specModal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === specModal) {
            specModal.classList.remove('active');
        }
    });

    const bookingForm = document.getElementById('bookingForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const modelSelect = document.getElementById('modelSelect');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    const validateName = () => {
        if (nameInput.value.trim().length < 3) {
            nameInput.classList.add('input-error');
            nameError.classList.add('active');
            return false;
        } else {
            nameInput.classList.remove('input-error');
            nameError.classList.remove('active');
            return true;
        }
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailInput.value.trim())) {
            emailInput.classList.add('input-error');
            emailError.classList.add('active');
            return false;
        } else {
            emailInput.classList.remove('input-error');
            emailError.classList.remove('active');
            return true;
        }
    };

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isModelValid = modelSelect.value !== "";

        if (isNameValid && isEmailValid && isModelValid) {
            alert('Test ride booked successfully for ' + modelSelect.value + '!');
            bookingForm.reset();
        } else {
            if (!isModelValid) {
                modelSelect.classList.add('input-error');
            }
        }
    });

    modelSelect.addEventListener('change', () => {
        if (modelSelect.value !== "") {
            modelSelect.classList.remove('input-error');
        }
    });
});
