let name = 'Satyam C';
// console.log(this.name);
let k = 5;

let fun = function () {
    // console.log(`hello ${name} chaubey`);    
    // console.log(`hello ${this.name} chaubey`);  
    (function() {name = 'devaraj singh'}()) 
}

let obj = {
    name: 'devaraj',
    print: function() {
        console.log(this.name);
        console.log(name);
        let k = () => {
            console.log(this.name);
        }
        let te = {
            print : () =>  {
                console.log(this.name);
            }
        }
        k();
        te.print();
    },
    arrFunc: () => {
        console.log(this.name);
        console.log(name);
    }
}

fun();
// console.log(name);

obj.print();
obj.name = "rahul";
obj.arrFunc();