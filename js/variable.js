function startAnimation() {
    let programConsole = document.getElementById('programConsole');
    let outputConsole = document.getElementById('outputConsole');
    let variableValue = document.getElementById('variableValue');
    let newvariableValue = document.getElementById('newvariableValue');

    // **🔹 実行ボタンを押した瞬間にリセット**
    resetAnimation();

    let code1 = document.getElementById("code1");
    let code2 = document.getElementById("code2");
    let code3 = document.getElementById("code3");
    let code4 = document.getElementById("code4");

    // **1️⃣ 5が箱に入る**
    setTimeout(() => {
        code1.classList.add("highlight");
        variableValue.classList.add("move-in");
        variableValue.style.opacity = "1";
    }, 1000);

    // **2️⃣ `x = 5;` のハイライトを解除**
    setTimeout(() => {
        code1.classList.remove("highlight");
    }, 3000);

    // **3️⃣ 5が表示される (`println(x);` を実行)**
    setTimeout(() => {
        code2.classList.add("highlight");
        outputConsole.innerHTML += "<br> 5"; // 普通の5を表示
    }, 4000);

    // **4️⃣ `println(x);` のハイライトを解除**
    setTimeout(() => {
        code2.classList.remove("highlight");
    }, 5000);

    // **5️⃣ 5が箱の外に出る**
    setTimeout(() => {
        code3.classList.add("highlight");
        variableValue.classList.add("move-out");
    }, 6000);

    // **6️⃣ 5をフェードアウト**
    setTimeout(() => {
        variableValue.style.display = "none";
    }, 9000);

    // **7️⃣ 10が箱に入る**
    // **7️⃣ 10が箱に入る（アニメーションを適用）**
    setTimeout(() => {
        newvariableValue.style.display = "block"; // 🔹 表示を許可
        newvariableValue.style.opacity = "0"; // 🔹 最初は透明
        newvariableValue.style.transform = "translate(-20%, -100px)"; // 🔹 初期位置（上の方）

        // **🔹 ブラウザのリフローを強制的に発生させる**
        newvariableValue.offsetHeight; // これでリフローが発生し、アニメーションが機能するようになる

        setTimeout(() => {
            newvariableValue.style.transition = "transform 2s ease-out, opacity 2s ease-out"; // 🔹 アニメーションを適用
            newvariableValue.style.opacity = "1"; // 🔹 徐々に表示
            newvariableValue.style.transform = "translate(-20%, 0)"; // 🔹 ゆっくり降りる
        }, 100); // 100ms 後にアニメーションを開始
    }, 10000);


    // **8️⃣ `x = 10;` のハイライトを解除**
    setTimeout(() => {
        code3.classList.remove("highlight");
    }, 12000);

    // **9️⃣ 10が表示される (`println(x);` を実行)**
    setTimeout(() => {
        code4.classList.add("highlight");
        outputConsole.innerHTML += "<br> 10"; // 普通の10を表示
    }, 14000);

    // **🔹 `println(x);` のハイライトを解除**
    setTimeout(() => {
        code4.classList.remove("highlight");
    }, 16000);
}


// **🔵 アニメーションをリセットする関数**
function resetAnimation() {
    let programConsole = document.getElementById('programConsole');
    let outputConsole = document.getElementById('outputConsole');
    let variableValue = document.getElementById('variableValue');
    let newvariableValue = document.getElementById('newvariableValue');

    // **コンソールをリセット**
    programConsole.innerHTML = `
        <div id="code1"> int x = 5;</div>
        <div id="code2"> println(x);</div>
        <div id="code3"> int x = 10;</div>
        <div id="code4"> println(x);</div>
    `;
    outputConsole.innerHTML = "";

    // **アニメーションをリセット**
    variableValue.classList.remove("move-in", "move-out", "fade-out");
    variableValue.style.opacity = "0";
    variableValue.style.display = "block"; // 初期表示

    newvariableValue.classList.remove("move-in");
    newvariableValue.style.opacity = "0";
    newvariableValue.style.display = "none"; // 初期は非表示
}
