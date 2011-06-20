var __windowcontrol_disallowResize;
var __windowcontrol_disallowMove;

var __window_open = window.open;
window.open = function(url, name, properties) {
  // TODO: remove disallowed properties on window open
  return __override_windowcontrols(__window_open(url, name));
};

function __override_windowcontrols(win) {
  var __window_resizeTo = win.resizeTo;
  win.resizeTo = function(w, h) {
    if(__windowcontrol_disallowResize){
      return null;
    }
    return __window_resizeTo(w, h);
  };
  
  var __window_resizeBy = win.resizeBy;
  win.resizeBy = function(w, h) {
    if(__windowcontrol_disallowResize){
      return null;
    }
    return __window_resizeBy(w, h);
  };
  
  var __window_moveTo = win.moveTo;
  win.moveTo = function(x, y){
    if(__windowcontrol_disallowMove){
      return null;
    }
    return __window_moveTo(x, y);
  };
  
  var __window_moveBy = win.moveBy;
  win.moveBy = function(x, y){
    if(__windowcontrol_disallowMove){
      return null;
    }
    return __window_moveBy(x, y);
  };
  
  return win;
}

__override_windowcontrols(window);