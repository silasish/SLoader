//
// SLoader - Silasss 2021
//
function downloadScript(url) {
  fetch(url)
    .then((response) => response.text())
    .then((responseText) => {
      eval(responseText)
    }).catch(function () {
      alert("Error: Script couldn't be downloaded.")
    });
}

// Load stylesheet
var sloader_style = document.createElement("style");
sloader_style.innerHTML = `#sloader-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(100, 100, 100, 0.3);
  display:flex;
  align-items:center;
  justify-content: center;
  z-index: 500000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#sloader-box {
  padding: 15px;
  position: fixed;
  background-color: #FFF;
  display:flex;
  align-items:center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #AAA;
}

#sloader-select {
  margin: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: white;
  color: black;
}

#sloader-download {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: black;
}

#sloader-download:hover {
  cursor: pointer;
}

#sloader-download:active {
  padding: 3.5px;
}

#sloader-text {
  font-size: 1.5em;
  margin: 5px;
  text-align: center;
  color: black;
}

.sloader-option {
  background-color: white;
  color: black;
}
`;
document.getElementsByTagName("head")[0].appendChild(sloader_style);
// Load UI
var htmlUI = `
<div id="sloader-overlay">
  <div id="sloader-box">
    <span id="sloader-text">SLoader</span>

    <select id="sloader-select">
    </select>

    <button id="sloader-download">Download</button>
  </div>
</div>
`
// Append UI
document.body.innerHTML += htmlUI;
var mainUIElement = document.getElementById("sloader-overlay")
var selectElement = document.getElementById("sloader-select")
var downloadElement = document.getElementById("sloader-download")

// Fancy stuff
downloadElement.onclick = function () {
  downloadScript(selectElement.value)
  mainUIElement.remove()
}

fetch("https://raw.githubusercontent.com/Silasssssss/SLoader/main/program_map.json", {cache: "no-store"})
  .then((response) => response.json())
  .then((responseJSON) => {
    responseJSON.programs.forEach(function (program) {
      var option = document.createElement("option")
      option.innerText = program.name
      option.value = program.url
      selectElement.appendChild(option)
    })
  });
