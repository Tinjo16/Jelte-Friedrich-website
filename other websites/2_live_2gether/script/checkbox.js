const checkbox = document.getElementById('checkbox');
const textField = document.getElementById('text-field');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    textField.style.display = 'block';
  } else {
    textField.style.display = 'none';
  }
});