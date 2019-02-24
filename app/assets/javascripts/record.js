$(document).on('turbolinks:load', function(){
  //音声認識APIの使用
  var speech = new webkitSpeechRecognition();
  //認識している途中で暫定の結果を得る
  // speech.interimResults = true;
  //認識を継続する
  speech.continuous = true;
  //言語を日本語に設定
  speech.lang = "ja";
  $("body").on("click", "#btn", function () {
    speech.start();
    console.log("speech start");
  })
  speech.addEventListener('result', function(e) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      var word = e.results[i][0].transcript
      // 音声認識で取得した情報を、コンソール画面に表示
      console.log(word);
    }
  });
});
