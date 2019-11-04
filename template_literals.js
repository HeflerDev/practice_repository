var a = 5;
var b = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log(values[3]);
}

foo`Sum ${a + b}
Product ${a * b}
Division or ${b / a}
Another ${1}`;
