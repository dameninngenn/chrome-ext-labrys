restore_options();
var btn = document.getElementById("save_btn");
var btn_listener = function(e){
    save_options();
};
btn.addEventListener('click', btn_listener, false);

function save_options() {
  set_local_storage_checkbox("on_basic_auth");
  set_local_storage_checkbox("on_send_url");
  set_local_storage_value("username");
  set_local_storage_value("password");
  set_local_storage_value("api_url");
  set_local_storage_type("type");

  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function restore_options() {
  restore_option_checkbox("on_basic_auth");
  restore_option_checkbox("on_send_url");
  restore_option_value("username");
  restore_option_value("password");
  restore_option_value("api_url");
  restore_option_selectbox("type");
}

function set_local_storage_checkbox(name) {
  var e = document.getElementById(name);
  if( e.checked == true ) {
    localStorage[name] = 1;
  } else {
    localStorage[name] = 0;
  }
}

function set_local_storage_value(name) {
  var e = document.getElementById(name);
  if( e.value ) {
    localStorage[name] = e.value;
  } else {
    localStorage[name] = '';
  }
}

function set_local_storage_type(name) {
  var e = document.getElementById(name);
  var value = e.children[e.selectedIndex].value;
  if( value ) {
    localStorage[name] = value;
  } else {
    localStorage[name] = 0;
  }
}

function restore_option_checkbox(name) {
  var value = localStorage[name];
  var e = document.getElementById(name);
  if( value == 1 ) {
    e.checked = true;
  } else {
    e.checked = false;
  }
}

function restore_option_value(name) {
  var value = localStorage[name];
  var e = document.getElementById(name);
  if( value ) {
    e.value = value;
  } else {
    e.value = '';
  }
}

function restore_option_selectbox(name) {
  var value = localStorage[name];
  var e = document.getElementById(name);
  for (var i = 0; i < e.children.length; i++) {
    var child = e.children[i];
    if (child.value == value) {
      child.selected = "true";
      break;
    }
  }
}
