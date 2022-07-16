let user = {
    name: "Джон",
    go: function() { console.log(this.name) }
}; 
/** ';' or need either no '()' in 'user.go();'*/

(user.go()); 

/************************************************* */

let obj, method;

obj = {
    go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/************************************************* */

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};
  
let user2 = makeUser();
  
console.log( user2.ref.name ); // Каким будет результат?

function makeUser1() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};
  
let user1 = makeUser1();
  
  console.log( user1.ref().name ); // Джон

/************************************************* */

let calculator = {

    read() {
        this.a = +prompt('a = ', 4);
        this.b = +prompt('b = ', 5);
    },

    sum() {
        console.log(this.a + this.b);
    },

    mul() {
        console.log(this.a * this.b);
    },
    
};
  
calculator.read();
( calculator.sum() );
( calculator.mul() );

/************************************************* */

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this;
    }
};

ladder.up().up().down().showStep();