var accordionSections = document.querySelectorAll('.accordion');

accordionSections.forEach(function(accSection) {
  var accButton = accSection.querySelector('.accordion_button');
  accButton.addEventListener('click', function(evt) {
    var droppedEl = evt.target.closest('.accordion').querySelector('.accordion_dropdown-element');
    if (droppedEl.classList.contains('show')) {
      droppedEl.classList.remove('show');
      accButton.classList.remove('opened');
    } else {
      droppedEl.classList.add('show');
      accButton.classList.add('opened');
    }
  })
});
