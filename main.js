// by .nulltrace on discord
window.onload = function() {
  alert("backwoods was here, .nulltrace on discord");

  setTimeout(function() {
    const spanElement = document.querySelector('span[data-set="user-profile"]');
    if (spanElement) {
      const imgElement = spanElement.querySelector('img');
      if (imgElement) {
        imgElement.src = 'x';
      } else {
        console.warn('1!');
      }
    } else {
      console.warn('2!');
    }
  }, 1500);
};
