const form = document.getElementById('forgotForm');
const message = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    message.style.display = 'block';

    // اخفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
        message.style.display = 'none';
    }, 5000);
});