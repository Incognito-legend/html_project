/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function infoFunction() {
    document.getElementById("infoDropdown").classList.toggle("show");
}

function newsFunction() {
	document.getElementById("newsDropdown").classList.toggle("show");
}

function profileFunction() {
	document.getElementById("profileDropdown").classList.toggle("show");
}

function helpFunction() {
	document.getElementById("helpDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.infoDropbtn')) {

    var dropdowns = document.getElementsByClassName("infoDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.newsDropbtn')) {

    var dropdowns = document.getElementsByClassName("newsDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.profileDropbtn')) {

    var dropdowns = document.getElementsByClassName("profileDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.helpDropbtn')) {

    var dropdowns = document.getElementsByClassName("helpDropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
