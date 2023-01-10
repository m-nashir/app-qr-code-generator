const wrapper = document.querySelector('.wrapper'),
qrInput = document.querySelector('.form input')
generateBtn = document.querySelector('.form button');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    wrapper.classList.add('active');
})
