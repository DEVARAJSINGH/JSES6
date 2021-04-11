const btnClicked = () => {
    console.log("btn Clicked");
    
}

const smartClicked =(fn, limit) => {
    let flag = true;
    return function() {
        const args = arguments;
        const context = this;
        if(flag) {
            fn.apply(context, args);
            setTimeout( () => flag = true, limit );
            flag = false;
        }
    }
}

const smartBtnClicked = smartClicked(btnClicked, 1000);
// use Case
// API call, button clicked, mouse move     