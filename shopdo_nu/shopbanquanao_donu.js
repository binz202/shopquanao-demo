function showContent() {
    var hiddenContent = document.querySelector('#hidden-content');
    hiddenContent.classList.toggle('hidden'); // Chuyển đổi lớp 'hidden'
  }
//   window.onload = function() {
//     alert("Xin chào! Chúng tôi chào mừng bạn đến với cửa hàng của chúng tôi.");
// };
window.addEventListener('DOMContentLoaded', function() {
  var notificationDiv = document.getElementById('notificationDiv');
  var closeBtn = document.getElementById('closeBtn');
  
  // Hiển thị hộp thông báo ngay khi trang web đã được tải lại
  notificationDiv.classList.remove('hidden');
  
  // Xử lý sự kiện click vào nút close
  closeBtn.addEventListener('click', function() {
    notificationDiv.classList.add('hidden');
  });
});
//  end
var searchBox = document.querySelector('.search-box');
var label = document.querySelector('label[for="search-input"]');
var input = document.querySelector('#search-input');

searchBox.addEventListener('mouseenter', function() {
  label.style.display = 'inline-block';
  input.style.display = 'inline-block';
});

searchBox.addEventListener('mouseleave', function() {
  label.style.display = 'none';
  input.style.display = 'none';
});

// end
var myButton = document.getElementById("myButton");
var myDiv = document.getElementById("myDiv");

myButton.addEventListener("click", function() {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
    myButton.innerHTML = "";
  } else {
    myDiv.style.display = "none";
    myButton.innerHTML = "";
  }
});
// end
var marquee = document.querySelector('marquee');

marquee.addEventListener('mouseover', function () {
    marquee.stop();
});

marquee.addEventListener('mouseout', function () {
    marquee.start();
});
