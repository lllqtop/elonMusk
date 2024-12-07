var header = document.querySelector('header');

window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    // Вычисляем значение альфа-канала в зависимости от прокрутки
    var alpha = Math.min(scrolled / 200, 0.6); // 200 - высота, на которой будет максимальная матовость

    // Применяем изменения к цвету фона
    header.style.backgroundColor = 'rgba(211, 211, 211, ' + (0.9 - alpha) + ')';
});

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("active");
}
var header = document.querySelector('header');
var dropdown = document.getElementById("myDropdown");

window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    // Вычисляем значение альфа-канала в зависимости от прокрутки
    var alpha = Math.min(scrolled / 200, 0.6); // 200 - высота, на которой будет максимальная матовость

    // Применяем изменения к цвету фона
    header.style.backgroundColor = 'rgba(211, 211, 211, ' + (0.9 - alpha) + ')';
});

function toggleDropdown() {
  dropdown.classList.toggle("active");

  if (dropdown.classList.contains("active")) {
    // Добавляем обработчик события клика на документ
    document.addEventListener('click', closeDropdown);
  } else {
    // Удаляем обработчик события клика при закрытии блока
    document.removeEventListener('click', closeDropdown);
  }
}

// Функция для закрытия блока
function closeDropdown(event) {
  if (!event.target.closest('.dropdown')) {
    dropdown.classList.remove("active");
    document.removeEventListener('click', closeDropdown);
  }
}
