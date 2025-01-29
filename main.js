window.onload = function() {
  setTimeout(function() {
    const spanElement = document.querySelector('.first');
    if (spanElement) {
      spanElement.innerText = 'backwoods was here';
    } else {
      console.warn('Element with class "first" not found!');
    }
  }, 1500); 
};
