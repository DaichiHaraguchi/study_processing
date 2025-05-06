function startAnimation() {
    let programConsole = document.getElementById('programConsole');
    let outputConsole = document.getElementById('outputConsole');
    let variableValue = document.getElementById('variableValue');
    let newvariableValue = document.getElementById('newvariableValue');

    console.log(programConsole, outputConsole, variableValue, newvariableValue);
    // **🔹 実行ボタンを押した瞬間にリセット**
    // resetAnimation();

    let code1 = document.getElementById("code1");
    let code2 = document.getElementById("code2");
    let ifcode = document.getElementById("if-statement");
    let elseifcode = document.getElementById("else-if-statement");
    let elsecode = document.getElementById("else-statement");
    console.log(code1, code2, ifcode, elseifcode, elsecode);

    let currentIndex = 0; // 現在の画像のインデックス

    // **1️⃣ 5が箱に入る**
    setTimeout(() => {
        code1.classList.add("highlight");
        currentIndex += 1
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
    }, 1000);
    // **3️⃣ 5が表示される (`println(x);` を実行)**
    setTimeout(() => {
        code1.classList.remove("highlight");
        code2.classList.add("highlight");
        outputConsole.innerHTML += "<br> x=4"; // 普通の5を表示
        currentIndex += 1
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
    }, 3000);
    setTimeout(() => {
        code2.classList.remove("highlight");
        ifcode.classList.add("highlight");
        currentIndex += 1
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
    }, 5000);
    setTimeout(() => {
        ifcode.classList.remove("highlight");
        elseifcode.classList.add("highlight");
        currentIndex += 1
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
    }, 7000);
    setTimeout(() => {
        elseifcode.classList.remove("highlight");
        elsecode.classList.add("highlight");
        outputConsole.innerHTML += "<br> xは5より小さいです"; 
        currentIndex += 1
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
    }, 9000);
    setTimeout(() => {
        currentIndex += 1;
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
    }, 11000);
    setTimeout(() => {
        elsecode.classList.remove("highlight");
        currentIndex = 0;
        document.getElementById("image").src = "../fig/if/"+ currentIndex + ".svg";
        outputConsole.innerHTML = "";
    }, 14000);
}


// // **🔵 アニメーションをリセットする関数**
// function resetAnimation() {
//     let programConsole = document.getElementById('programConsole');
//     let outputConsole = document.getElementById('outputConsole');
//     let variableValue = document.getElementById('variableValue');
//     let newvariableValue = document.getElementById('newvariableValue');

//     // **コンソールをリセット**
//     programConsole.innerHTML = `
//                     <div id="code1"> float x = (int)random(10);</div>
//                     <div id="code2"> println("x="+x);</div>
//                     <div id="if-statement">
//                         <span class="keyword">if</span> (x>5) { <br>
//                         &nbsp;&nbsp;println("xは5より大きいです");<br>
//                         }
//                     </div>
        
//                     <div id="else-if-statement">
//                         <span class="keyword">else if</span> (x==5) { <br>
//                         &nbsp;&nbsp;println("xは5です");<br>
//                         }
//                     </div>
        
//                     <div id="else-statement">
//                         <span class="keyword">else</span> { <br>
//                         &nbsp;&nbsp;println("xは5より小さいです");<br>
//                         }
//                     </div>
//     `;
//     outputConsole.innerHTML = "";

//     // **アニメーションをリセット**
//     variableValue.style.display = "block"; // 初期表示
//     newvariableValue.style.opacity = "0";
//     newvariableValue.style.display = "none"; // 初期は非表示
// }
