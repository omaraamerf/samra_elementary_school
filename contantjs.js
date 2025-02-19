const alertBox = document.getElementById('alert');

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
});