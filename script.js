function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdown = document.getElementByClassName("dropdown-content");
        dropdown.classList.toggle('show')
    }
  }

  function aFunction() {
    document.getElementById("aDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.adropbtn')) {
      let dropdown = document.getElementByClassName("adropdown-content");
       openDropdown.classList.toggle('show')
        }
      }
    
  