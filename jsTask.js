// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;
// let count5 = 0;
// document.getElementById("increase1").onclick = function (){
//     count1 +=1;
//     document.getElementById("count1").innerHTML = count1;
// }
// document.getElementById("reset1").onclick = function (){
//     count1 = 0;
//     document.getElementById("count1").innerHTML = count1;
// }
//
// document.getElementById("increase2").onclick = function (){
//     count2 +=1;
//     document.getElementById("count2").innerHTML = count2;
// }
// document.getElementById("reset2").onclick = function (){
//     count2 = 0;
//     document.getElementById("count2").innerHTML = count2;
// }
//
// document.getElementById("increase3").onclick = function (){
//     count3 +=1;
//     document.getElementById("count3").innerHTML = count3;
// }
// document.getElementById("reset3").onclick = function (){
//     count3 = 0;
//     document.getElementById("count3").innerHTML = count3;
// }
//
// document.getElementById("increase4").onclick = function (){
//     count4 +=1;
//     document.getElementById("count4").innerHTML = count4;
// }
// document.getElementById("reset4").onclick = function (){
//     count4 = 0;
//     document.getElementById("count4").innerHTML = count4;
// }
//
// document.getElementById("increase5").onclick = function (){
//     count5 +=1;
//     document.getElementById("count5").innerHTML = count5;
// }
// document.getElementById("reset1").onclick = function (){
//     count5 = 0;
//     document.getElementById("count1").innerHTML = count5;
// }

let counts = [0, 0, 0, 0, 0];

function increase(index) {
    counts[index] += 1;
    document.getElementById(`count${index + 1}`).innerHTML = counts[index];
}

function reset(index) {
    counts[index] = 0;
    document.getElementById(`count${index + 1}`).innerHTML = counts[index];
}

for (let i = 0; i < counts.length; i++) {
    document.getElementById(`increase${i + 1}`).onclick = function() {
        increase(i);
    };
    document.getElementById(`reset${i + 1}`).onclick = function() {
        reset(i);
    };
}