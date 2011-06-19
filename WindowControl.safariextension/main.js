function injectJavaScript(text) {
  var id = "windowcontrol-" + (new Date()).getTime();
  text += "document.body.removeChild(document.getElementById('" + id + "'));";
  
  var data    = document.createTextNode(text);
  var script  = document.createElement('script');
  script.type = 'text/javascript';
  script.id   = id;
  script.appendChild(data);
  document.body.appendChild(script);
}

function injectBaseFunctions() {
  var script  = document.createElement('script');
  script.type = 'text/javascript';
  script.src  = safari.extension.baseURI + 'windowcontrol.js';
  document.body.appendChild(script);
}

function handleMessage(event) {
  if(event.name === "injectThis"){
    injectJavaScript(event.message);
  }
}

// Setup page
injectBaseFunctions();

// Listen for messages from global.html
safari.self.addEventListener("message", handleMessage, false);