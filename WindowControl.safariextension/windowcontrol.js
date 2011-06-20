var __windowcontrol_disallowResize;
var __windowcontrol_disallowMove;
var __windowcontrol_disallowStatusBar;
var __windowcontrol_disallowMenuBar;

var __window_open = window.open;
window.open = function(url, name, properties) {
  var props = properties.split(',');
  
  // Override properties
  for (var i=0; i < props.length; i++) {
    
    if(__windowcontrol_disallowStatusBar && props[i].match(/status/i)){
      props[i] = 'status=1';
    }
    
    if(__windowcontrol_disallowMenuBar && props[i].match(/(toolbar|location|menubar)/i)){
      var menubar = props[i].match(/(toolbar|location|menubar)/i)[0];
      props[i] = menubar + '=1';
    }
    
    if (__windowcontrol_disallowResize && props[i].match(/(width|height)/i)){
      props[i] = '';
    }
    
  }
  
  properties = props.join(',');
  
  return __override_windowcontrols(__window_open(url, name, properties));
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