const notifications = [...document.querySelectorAll('.unread-object')];
const notNumber = document.querySelector('.unread-number');
const markButton = document.querySelector('.all-read');

if(notifications.length) {
notNumber.textContent = notifications.length;
notNumber.classList.remove('hidden');
}


const allRead = (e) => {
    e.preventDefault();
    notifications.forEach(notification => {
        notification.classList.remove('unread-object');
        notification.querySelector('.unread-dot').remove();
    });
    notNumber.remove();   
}

markButton.addEventListener("click", allRead);