function makeItBinary(number){

    let array = [] ;

    while (number > 0) {
        if (number%2 == 0){
            array.push(0);
            number /= 2;
        }else{
            array.push(1);
            number /= 2;
            number -= 0.5;
        }
    }
    let binaryCode = array.reverse().join('');
    console.log(binaryCode);
}
makeItBinary(500);
