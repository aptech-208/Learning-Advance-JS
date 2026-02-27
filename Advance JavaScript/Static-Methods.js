class static {
    constructor(){
        console.log("This Is A Constructor Method-Function");
    }

    customeMet(){
        console.log("Its A Custome Method");
    }

    static staticMet(){
        console.log("Its A Static Method");
    }
}

const Ryan = new static ();
static.staticMet();

Ryan.customeMet();