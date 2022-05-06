alert("SLoader has been replaced with Coffee, loading that.")
  fetch("https://raw.githubusercontent.com/Silasssssss/Coffee-Loader/main/main.js")
    .then((response) => response.text())
    .then((responseText) => {
      eval(responseText)
    }).catch(function (err) {
      alert("Couldn't be loaded, sry." + err)
    });
