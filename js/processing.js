// CodeMirror を利用してエディタを初期化
var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,
    mode: "text/x-java", // Processing のコードは Java に近いので
    theme: "default"
  });
  
  document.getElementById("run-button").addEventListener("click", function() {
    var canvas = document.getElementById("processing-canvas");
    
    // すでに Processing インスタンスがある場合は破棄（再生成のため）
    if (canvas.processingInstance) {
      canvas.processingInstance.exit();
    }
    
    // エディタから Processing のコードを取得
    var code = editor.getValue();
    
    // 新たに Processing インスタンスを生成して、canvas 上でコードを実行
    canvas.processingInstance = new Processing(canvas, code);
  });