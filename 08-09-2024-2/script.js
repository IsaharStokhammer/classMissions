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


