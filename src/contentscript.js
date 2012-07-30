var con = chrome.extension.connect({name: "Labrys"});
var url = location.href;
// クエリのついてないgoogle検索は省く
if( !url.match(/www\.google\.co\.jp\/webhp/) ){
  con.postMessage({url: url});
}
