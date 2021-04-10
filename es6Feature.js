//default parameter value

function print(value = 'Devaraj') {
    console.log(value);
} 
print('satyam');
print();


// Rest Parameter
console.log("Rest Parameter :");

function printNames (name) {
    var a = Array.prototype.slice.call(arguments, 2);
    console.log(name , a);
}

printNames('Sataym', 2, 4, 5);

function es6PrintNames( name, ...rest) {
        var a = rest.length;
        console.log(name, a);
}

es6PrintNames('satyam', 'devaraj', 3, 4, 5.6, true);

// Blocke - scope function 
console.log("Blocke - scope function ");
//IIF
(function add(a=2, b= 1) {
    console.log(a + b);   
}());
(function add(a=2, b= 1) {
    console.log(a + b);   
}());

{
    console.log( 1 + 2);
}

// Shorthand Property
console.log(`Shorthand Property`);

var name = "satyam";
var gf = "mili nhi";

var obj = {
    name: name,
    gf: gf
};
console.log(obj);

var objES6 = {
    name,      //name: name
    gf
};
console.log(objES6);

// Computed Property Name
function getName() {
    return 'dev'
}
var computedObj = {
    "name": 'satyam',
    age: 108,
    ["name"+ getName()]: 'rahul'
}
console.log(computedObj);

//Method Properties

var methodObj = {
    print: function() {
        console.log('Satyam ');
    },
    printES(name) {
        console.log(name);        
    }
}
methodObj.print();
methodObj.printES("devaraj");
