document.querySelectorAll(".inner-img a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

function dangKi() {
  alert("Đăng kí thành công");
}

function thanhToan() {
  alert("Món ăn đã được thêm vào giỏ hàng !");
}

let lastScrollY = window.scrollY;
const headerBottom = document.querySelector(".header-bottom");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    headerBottom.classList.add("hide");
    headerBottom.classList.remove("show");
  } else {
    headerBottom.classList.add("show");
    headerBottom.classList.remove("hide");
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
  alert("Thanh toán thành công !");
}

function notLogin() {
  alert("Chưa đăng nhập tài khoản !");
}

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các nút accordion
  const accordionButtons = document.querySelectorAll(".PhuongThuc .btn");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Xóa lớp grayscale khỏi tất cả các nút
      accordionButtons.forEach((btn) => btn.classList.remove("grayscale"));

      // Áp dụng lớp grayscale cho tất cả các nút trừ nút đang được nhấn
      accordionButtons.forEach((btn) => {
        if (btn !== this) {
          btn.classList.add("grayscale");
        }
      });
    });
  });
});

let result = document.querySelector("#tanggiam").value;
let tang = document.querySelector("#tang");
let giam = document.querySelector("#giam");

tang.addEventListener("click", () => {
  result++;
  document.querySelector("#tanggiam").value = result;
});

giam.addEventListener("click", () => {
  if (result > 1) {
    result--;
    document.querySelector("#tanggiam").value = result;
  }
});
