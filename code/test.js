var num = 113;

var nn = 3;

var a = num / nn;

console.log((a))
console.log(parseInt(a))

var b = parseInt(a);

var duoyu = num - nn * b;

console.log('duoyu   ', duoyu)

for (var i = 1; i <= nn; i++) {
    if (duoyu > 0) {
        duoyu--;
        console.info("分配给第 " + (i) + " 个人的任务数：" + (b + 1))
    } else {
        console.info("分配给第 " + (i) + " 个人的任务数：" + b)
    }

}