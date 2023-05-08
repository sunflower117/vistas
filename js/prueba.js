const buttons = document.querySelectorAll('.b');


buttons.forEach(function(btn) {
  btn.addEventListener("click", buttonClick); 
});

function buttonClick() {
  alert(`You clicked ${this.getElementsByTagName("a")[0].innerHTML}`);
}
