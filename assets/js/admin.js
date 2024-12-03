function addMonAn() {
  alert("Thêm sản phẩm thành công!");
}

function changeMonAn() {
  alert("Sửa sản phẩm thành công!");
}

function deletingMonAn() {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    alert("Xóa sản phẩm thành công !");
    prompt;
  }
}

function khoaKhachHang() {
  if (confirm("Bạn có chắc chắn muốn khóa người dùng này?")) {
    alert("Khóa người dùng thành công !");
    prompt;
  }
}

function unclockkhoaKhachHang() {
  if (confirm("Bạn có chắc chắn muốn mở người dùng này?")) {
    alert("Mở người dùng thành công !");
    prompt;
  }
}

function addKhachHang() {
  alert("Tạo thành công tài khoản !");
}

function changeKhachHang() {
  alert("Bạn đã cập nhật thành công !");
}

function updateOrder() {
  alert("Bạn đã cập nhật thành công !");
}

function xuLy() {
  const orderStatus = document.querySelector("#order-status-1");
  const nut = document.querySelector("#nut");

  if (orderStatus.innerText === "Đã xử lý" || nut.innerText === "Đã xử lý") {
    orderStatus.innerHTML =
      '<span class="status-no-complete">Chưa xử lý</span>';
    nut.innerHTML = '<i class="fa-solid fa-xmark"></i> Chưa xử lý';
    nut.classList.add("status-no-complete");
    nut.classList.remove("status-complete");
    orderStatus.classList.remove("status-complete");
  } else {
    orderStatus.innerHTML = '<span class="status-complete">Đã xử lý</span>';
    nut.innerHTML = '<i class="fa-solid fa-check"></i> Đã xử lý';
    nut.classList.remove("status-no-complete");
    orderStatus.classList.remove("status-no-complete");
    nut.classList.add("status-complete");
  }
}
