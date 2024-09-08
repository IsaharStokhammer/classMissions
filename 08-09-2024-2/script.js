function mission1(num, dir) {
    let str = "";
    if (dir) {
        for (let i = 0; i < num; i++) {
            str += "-";
        }
        str += ">";
    } else {
        str = "<";
        for (let i = 0; i < num; i++) {
            str += "-";
        }
    }
    console.log(str);
}
mission1(3, true);

function findMax(numArr) {
    let max = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    return max;
}
function mission2() {
    let numArr =[];
    while (true) {
        let inputNum = Number(prompt("הכנס מספר"));
        numArr.push(inputNum);
        if (inputNum === 0) {
            console.log("המספר הגבוה ביותר הוא " + findMax(numArr));
            console.log("מספרים נוספו: " + numArr.length);
            console.log("סך כל המספרים: " + numArr.reduce((a, b) => a + b, 0));
            console.log("ממוצע המספרים הוא: " + numArr.reduce((a, b) => a + b, 0) / numArr.length);
            if (numArr.length >= 4) {
                console.log("המספר הרביעי שנקלט הוא: " + numArr[4]);                
            }
            else {
                console.log(
                "לא נמצא מספר רביעי, המספר החרון שנקלט הוא: " + numArr[numArr.length - 1]
                );}
            break;
        }
    }
}

