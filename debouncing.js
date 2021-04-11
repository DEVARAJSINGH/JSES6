const getData =()=> {
    console.log("call")
};

const debounce = function(fn, d) {
    let timer;   
    return function() {
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args)
        }, d);
    }
}

const betterFuction = debounce(getData, 300);

// use case 
// resize event handler
// scroll event handler
// auto save 
// auto search api call`