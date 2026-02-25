class Organization {
    constructor() {
        console.log("This Is A Constructor For Organization");
    }

    Student() {
        console.log("This Is A Method For Student");
    }

    Staff() {
        console.log("This Is A Method For Staff");
    }
}

const ryan = new Organization(); // Object
const jagdesh = new Organization(); // Object

ryan.Student(); // Method Calling
jagdesh.Staff(); // Method Calling