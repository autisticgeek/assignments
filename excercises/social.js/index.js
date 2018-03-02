var user = {
    id: 0,
    accountName: "autisticgeek",
    fName: "Matthew",
    lName: "Blakely",
    fullName: function () {
        return this.fName + " " + this.lName;
    },
    age: 40,
    email: "junk@autisticgeek.com",
    address: {
        num: 650,
        street: "W South Temple",
        Apt: null,
        city: "Salt Lake City",
        state: "UT",
        zip: "84116"
    },
    friends: [{
            id: 1,
            accountName: "spydyee",
            email: "spydyee@spydertyme.com",
            fName: "Athena",
            lName: "Blakely",
            fullName: function () {
                return this.fName + " " + this.lName;
            },
            age: 55,
            address: {
                num: 6,
                street: "Sycamore Drive",
                Apt: null,
                city: "Honolulu",
                state: "HI",
                zip: "96815"
            }
        },
        {
            id: 2,
            accountName: "kiba",
            email: "kiba@test.net",
            fName: "Sidney",
            lName: "Blakely",
            fullName: function () {
                return this.fName + " " + this.lName;
            },
            age: 24,
            address: {
                num: 24,
                street: "Dragons Keep Way",
                Apt: null,
                city: "Mankato",
                state: "MN",
                zip: "56001"
            }
        }
    ]
}

console.log(user);