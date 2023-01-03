// Tạo biến để lấy các phần tử trong html
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.form-wrapper');

// Tạo sự kiện click cho nút đăng ký
signUpBtnLink.addEventListener('click', () => {
    // Thêm class active vào form-wrapper
    wrapper.classList.toggle('active');
})

// Tạo sự kiện click cho nút đăng nhập
signInBtnLink.addEventListener('click', () => {
    // Thêm class active vào form-wrapper
    wrapper.classList.toggle('active');
})