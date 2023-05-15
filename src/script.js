function filterCards() {
    var filters = [];
    var checkboxes = document.getElementsByClassName('form-check-input');
    
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        filters.push(checkboxes[i].getAttribute('id').replace('Switch', ''));
      }
    }
    
    var cards = document.getElementsByClassName('card');
    
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var filterValue = card.getAttribute('data-filter');
      
      if (filters.length === 0 || filters.includes(filterValue)) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    }
  }
  
  function showAllCards(checkbox) {
    var isChecked = checkbox.checked;
    var checkboxes = document.getElementsByClassName('form-check-input');
    
    if (isChecked) {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
      }
    }
    
    filterCards();
  }
  

function showSuccessPopup() {
   var popup = document.getElementById("successPopup");
   popup.style.display = "block";
  popup.innerHTML = "Sikeres vásárlás!";
}