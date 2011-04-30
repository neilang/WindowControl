var __window_open = window.open;
window.open = function(url, name, properties) {
  return __override_windowcontrols(__window_open(url, name));
};

function __override_windowcontrols (win) {
  win.resizeTo = function(w, h) {
   return null;
  };
  
  win.resizeBy = function(w, h) {
    return null;
  };
  
  win.moveTo = function(x, y){
    return null;
  }
  
  win.moveBy = function(x, y){
    return null;
  }
  
  return win;
}

__override_windowcontrols(window);
