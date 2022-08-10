// TODO add let and const 
// TODO Remove All TODO 
// TODO ADD COMMENTS
// TODO Remove all unneeded console. 
// TODO Fixed undefined error message.


// * Problem ONE START
function radianToDegree(radian) {
    if (typeof radian == "number") {

        // Formula radian to Number.
        let subDegree = radian * 180 / Math.PI;

        // Converting Two Decimals
        const degree = subDegree.toFixed(2);
        return degree;
    }

    else {
        console.log("Please provide valid input!")
    }

}

// radianToDegree(5);
// * Problem ONE END










// * Problem Two Start
function isJavaScriptFile(fileName) {

    if (typeof fileName == "string") {
        if (fileName.includes('.js')) {
            return true;
        }

        else {
            return false;
        }
    }

    else {
        console.log("Please provide correct input!")

    }
}

// isJavaScriptFile(4);
// * Problem Two End













// *Problem Three  Start
function oilPrice(diesel, petrol, octane) {

    let dieselPrice = 114 * diesel;
    let petrolPrice = 130 * petrol;
    let octanePrice = 135 * octane;

    // Total billing
    const totalBill = dieselPrice + petrolPrice + octanePrice;

    return totalBill;
}

console.log(oilPrice(0, 0, 2));
// *Problem Three  Start











// TODO Send Error For Zero People and type check....
// *Problem Four Start
function publicBusFare(passenger) {


    // * Checking people for bus
    if (passenger % 50 != 0) {

        let extraPassengerOfBus = passenger % 50;
        console.log(extraPassengerOfBus);

        // * Checking People for micro bus
        if (extraPassengerOfBus % 11 != 0) {

            let extraPassengerOfMicro = extraPassengerOfBus % 11;

            console.log(extraPassengerOfMicro);



            // * Checking Extra passenger are exist for public bus.
            if (extraPassengerOfMicro != 0) {



                // * Calculating The Bus Fair For Extra People...
                const busFair = extraPassengerOfMicro * 250;

                return busFair;
            }
        }

    }
}

// console.log(publicBusFare(8))

// *Problem Four End




//*problem five Start
function isBestFriend(obj1, obj2) {
    if (obj1.foo == obj2.bar) {
        return true;
    }

    else {
        return false;
    }
}


let someObject1 = {
    foo: "Tom",
    bar: "Rock"
};

let someObject2 = {
    foo: "Rock",
    bar: "Tm"
};


// console.log(isBestFriend(someObject1, someObject2));

//*problem five End