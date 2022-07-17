function A() {
    this.user = "Vasyandr",
    this.checkAdmin = "false",
    this.summary = function() {
        if (this.checkAdmin == 'true') {
            console.log(`${this.user} is Admin`);
        } else console.log(`${this.user} is not Admin`); 
        return this;
    }
}

function B() {
    return a;
}

let a = new A;
let b = new B;

console.log(a);
console.log( a == b ); // true  console.log(this.summary);

/* ********************************************************** */

function Calculator() {

    this.read = function() {
        this.a = +prompt('a = ', 4);
        this.b = +prompt('b = ', 5);
    },

    this.sum = function() {
        alert(this.a + this.b);
        return(this.a + this.b);
    },

    this.mul = function() {
        alert(this.a * this.b);
        return (this.a * this.b);
    }

}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/* ********************************************************** */

function Accumulator(startingValue) {

    this.sums = startingValue;

    this.value = function() {
        alert(this.sums + this.readings);
        return (this.sums + this.readings);
    },

    this.read = function() {
        this.readings = prompt('enter smth for read = ', 1);
    }
}

let str = prompt('enter smth = ', 1);
let accumulator = new Accumulator(str);

accumulator.read();
alert('value = ' + accumulator.value());