/**
 * 分隔函数
 * @param char 指定分隔字符
 * @param str  待分隔字符串
 * @returns    拆分后得到的数组
 */
function splitBy(char, str) {
    if (str.length === 0) return [str];
    // 用于拼接子串的临时变量
    var temp = "";
    // 最终返回的数组
    var arr = new Array();
    for (var i = 0; i < str.length; i++) {
        // 匹配指定的分隔字符
        if (str[i] === char) {
            arr.push(temp);
            // 重置字符串
            temp = "";
        } else {
            if (str[i] === '/' && str[i + 1] === '/') {
                // 识别转义符
                temp += str[i];
                i += 1;
            } else if (str[i] === '/' && str[i + 1] === char) {
                // 跳过分隔字符
                temp += str[i + 1];
                i += 1;
            } else {
                temp += str[i];
            }
        }
    }
    arr.push(temp);
    return arr;
}


console.log(splitBy(".", "1.1"))   // [ "1", "1" ]
console.log(splitBy(".", "1/.1"))   // ["1.1"]
console.log(splitBy(".", "."))   // ["", ""]
console.log(splitBy(".", "//.1"))   // ['/', '1']],