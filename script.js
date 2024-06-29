const signInBtnLink =document.queryselector('.signInBtn-link');
const signUpBtnLink =document.queryselector('.signUpBtn-link');

const wrapper =document.queryselector('.wrapper');

signUpBtnLink=addEventListener('click',() =>{wrapper.classList.toggle('active');
});

signInBtnLink=addEventListener('click',() =>{wrapper.classList.toggle('active');
});