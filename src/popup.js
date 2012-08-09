var s_api_url = localStorage["api_url"];
var s_type = localStorage["type"];
if( s_api_url ){
  var api_url = document.getElementById("api_url");
  api_url.innerHTML = s_api_url;
}
if( s_type ){
  var type = document.getElementById("type");
  type.innerHTML = s_type;
}

