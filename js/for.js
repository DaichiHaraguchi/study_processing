function startAnimation() {
    let programConsole = document.getElementById('programConsole');
    let outputConsole = document.getElementById('outputConsole');
    let variableValue = document.getElementById('variableValue');
    let newvariableValue = document.getElementById('newvariableValue');

    console.log(programConsole, outputConsole, variableValue, newvariableValue);
    // **🔹 実行ボタンを押した瞬間にリセット**
    // resetAnimation();


    let forcode = document.getElementById("for-statement");
    let printcode = document.getElementById("print");
    console.log(forcode, printcode);

    let currentIndex = 0; // 現在の画像のインデックス 
    setTimeout(() => {
        forcode.classList.add("highlight");
        currentIndex += 1
        document.getElementById("image").src = "../fig/for/1.svg"; //if
    }, 1000);
    setTimeout(() => {
        currentIndex += 1
        document.getElementById("image").src = "../fig/for/2.svg";// i < 5?
    }, 3000);

    for (let i=0;i<5;i++){
        let baseTime = i * 5000; 
        setTimeout(() => {
            document.getElementById("image").src = "../fig/for/3.svg"; // i++
        }, 5000+baseTime);
        setTimeout(() => {
            forcode.classList.remove("highlight");
            printcode.classList.add("highlight");
            outputConsole.innerHTML += "<br> " + i; // print(i)
            document.getElementById("image").src = "../fig/for/4.svg"; // print
        }, 7000+baseTime);
        setTimeout(() => {
            printcode.classList.remove("highlight");
            forcode.classList.add("highlight");
            document.getElementById("image").src = "../fig/for/5.svg"; // print
        }, 9000+baseTime);
    }
    let finalBaseTime = 5 * 5000; 
    setTimeout(() => {
        document.getElementById("image").src = "../fig/for/3.svg"; // i++
    }, 5000+finalBaseTime);
    setTimeout(() => {
        printcode.classList.remove("highlight");
        forcode.classList.add("highlight");
        document.getElementById("image").src = "../fig/for/6.svg"; // print
    }, 7000+finalBaseTime);
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
