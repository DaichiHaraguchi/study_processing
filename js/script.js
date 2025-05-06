function runAnimation() {
    document.getElementById('console').innerHTML += '<br>>> x is stored in memory';
    document.getElementById('variableText').classList.add('moving');
    setTimeout(() => {
        document.getElementById('insideText').textContent = '5';
        document.getElementById('insideText').classList.add('show');
    }, 1500);
}