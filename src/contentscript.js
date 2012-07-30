var con = chrome.extension.connect({name: "Labrys"});
var url = location.href;
// クエリのついてないgoogle検索は省く
if( !url.match(/www\.google\.co\.jp\/webhp\?sourceid=chrome-instant&ie=UTF-8$/) ){
  con.postMessage({url: url});
}
