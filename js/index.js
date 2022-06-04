const avatars = document.querySelectorAll('.contact-info__avatar');
const wrapperAvatar = document.querySelector('.contact-info__block--center');
const onClickAvatar = () => {
    avatars.forEach(item => item.classList.toggle('avatar--position'))
};

wrapperAvatar.addEventListener('click', onClickAvatar);