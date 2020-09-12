const btns = Array.from(document.getElementsByTagName('button'));
const map = [4,1,2,7,5,3,8,9,6];
let labels = new Array(9);
document.getElementById('btn5').onclick = function() {
    btns.forEach((b, i) => labels[i] = b.innerHTML);
    btns.forEach((b, i) => b.innerHTML = labels[map[i] - 1]);
};