document.querySelectorAll('.inner-img a').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

    });
});

function dangKi() {
    alert("Đăng kí thành công");
}

function thanhToan() {
    alert("Giỏ hàng đã được thêm vào");
}

let lastScrollY = window.scrollY;
const headerBottom = document.querySelector('.header-bottom');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        headerBottom.classList.add('hide');
        headerBottom.classList.remove('show');
    } else {
        headerBottom.classList.add('show');
        headerBottom.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});

function capNhat() {
    alert("Cập nhật thông tin thành công !");
}

function thayDoi() {
    alert("Đổi mật khẩu thành công !");
}

function tinhTien() {
    alert("Đặt hàng thành công !");
}