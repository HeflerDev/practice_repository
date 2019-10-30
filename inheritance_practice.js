//Create a Class, a method and atributes for that class


class SupClass {
    constructor(numberA,numberB){
        this.numberA = numberA ;
        this.numberB = numberB ;
    }
    sumNumbers(){
        return this.numberA + this.numberB ;
    }
}
var obj = new SupClass(1,2);
console.log('Object Log '+obj.sumNumbers());

class SubClass extends SupClass {
    constructor(numberA,numberB){
        super();
        this.numberA = numberA+1;
        this.numberB = numberB+1;
    }
}

var obj2 = new SubClass(1,2);
console.log('Obj2 Log '+ obj2.sumNumbers());
