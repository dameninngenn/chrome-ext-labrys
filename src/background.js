chrome.extension.onConnect.addListener(function(port,name) {
  port.onMessage.addListener(function(info,con){
    sendUrl(info,con);
  });
});

function sendUrl(info,con) {
  var api_url = localStorage["api_url"];
  var type = localStorage["type"];
  var on_basic_auth = localStorage["on_basic_auth"];
  xhr = new XMLHttpRequest();
  if( on_basic_auth == 1 ) {
    var username = localStorage["username"];
    var password = localStorage["password"];
    xhr.open("POST", api_url, true, username, password);
  } else {
    xhr.open("POST", api_url, true);
  }
  xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
  xhr.send("type=" + type + "&url=" + encodeURIComponent(info.url));
}
