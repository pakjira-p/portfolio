document.addEventListener('DOMContentLoaded', function () {
  // ฟังก์ชั่นที่จะเลื่อนกลับไปที่ด้านบนของหน้า
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  document.getElementById('backToTop').addEventListener('click', function() {
    scrollToTop();
  });

  // ฟังก์ชั่นที่จะทำให้ปุ่มปรากฏเมื่อเลื่อนหน้าจอลงมา
  window.addEventListener('scroll', function() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
});
