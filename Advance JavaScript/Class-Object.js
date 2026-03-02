class Organization {
    constructor() {
        console.log("This Is A Constructor For Organization");
    }

    Student(name) {
        this.name=name
        console.log(`This Is A Method For Student: ${this.name}`);
    }

    Staff() {
        console.log("This Is A Method For Staff");
    }
}

const ryan = new Organization(); // Object
const jagdesh = new Organization(); // Object

ryan.Student("Ryan"); // Method Calling
jagdesh.Staff("Jagdesh"); // Method Calling