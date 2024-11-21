function addMonAn() {
  alert("Thêm sản phẩm thành công!");
}

function changeMonAn() {
  alert("Sửa sản phẩm thành công!");
}

function deletingMonAn() {
  if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
    alert('Xóa sản phẩm thành công !');
    prompt
  }
}

function deletingKhachHang() {
  if (confirm('Bạn có chắc chắn muốn xóa khách hàng này?')) {
    alert('Khách hàng đã được xóa');
    prompt
  }
}

function addKhachHang() {
  alert("Tạo thành công tài khoản !");
}


function changeKhachHang() {
  const isChecked = document.querySelector("#customSwitch1").checked;
  const customerStatusElement = document.querySelector("#customer-status-1");

  // Cập nhật trạng thái hiển thị
  if (isChecked) {
    customerStatusElement.innerHTML = `<span class="status-complete">Hoạt động</span>`;
    localStorage.setItem("customerStatus", "active"); // Lưu trạng thái vào Local Storage
  } else {
    customerStatusElement.innerHTML = '<span class="status-no-complete">Bị khóa</span>';
    localStorage.setItem("customerStatus", "locked"); // Lưu trạng thái vào Local Storage
  }

  // Đóng modal sau khi lưu thông tin
  // $('#exampleModal-2').modal('hide');
}

document.addEventListener("DOMContentLoaded", function () {
  const savedStatus = localStorage.getItem("customerStatus");
  const customerStatusElement = document.querySelector("#customer-status-1");
  const switchElement = document.querySelector("#customSwitch1");

  if (savedStatus === "active") {
    customerStatusElement.innerHTML = `<span class="status-complete">Hoạt động</span>`;
    switchElement.checked = true;
  } else if (savedStatus === "locked") {
    customerStatusElement.innerHTML = '<span class="status-no-complete">Bị khóa</span>';
    switchElement.checked = false;
  }
});

function xuLy() {
  const orderStatus = document.querySelector("#order-status-1");
  const nut = document.querySelector("#nut");

  if (orderStatus.innerText === "Đã xử lý" || nut.innerText === "Đã xử lý") {
    orderStatus.innerHTML = '<span class="status-no-complete">Chưa xử lý</span>';
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