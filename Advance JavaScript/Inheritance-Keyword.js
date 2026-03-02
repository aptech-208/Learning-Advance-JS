class Lab208 {
    constructor() {
        console.log("Lab208 constructor");
    }

    Computer1(name) {
        this.name = name;
        console.log(`Lab208 Computer1 method with name: ${this.name}`);
    }

    Computer2() {
        console.log("Lab208 Computer2 method");
    }

    Computer3() {
        console.log("Lab208 Computer3 method");
    }
}

class Lab209 extends Lab208 {
    constructor() {
        super();
        console.log("Lab209 constructor");
    }

    Computer1(name) {
        super.Computer1(name);
        console.log("Lab209 Computer1 Lab209 method");
    }

    Computer4() {
        console.log("Lab209 Computer4 method");
    }
}

const ryan = new Lab208();
const jagdesh = new Lab209();
const ryan2 = new Lab209();

ryan.Computer1("Ryan");
jagdesh.Computer1("Jagdesh");