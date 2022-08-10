// TODO add let and const 
// TODO Remove All TODO 
// TODO ADD COMMENTS


// * Problem ONE START

// TODO Check if you need after dot values..
function radianToDegree(radian) {
    degree = radian * 180 / Math.PI;

    return degree;

}


// console.log(radianToDegree(1));

// * Problem ONE END




// * Problem Two Start
function isJavaScriptFile(fileName) {

    if (fileName.includes('.js')) {
        return true;
    }

    else {
        return false;
    }
}

// console.log(isJavaScriptFile("abul.js"));
// * Problem Two End




// *Problem Three  Start
function oilPrice(diesel, petrol, octane) {

    let dieselPrice = 114 * diesel;
    let petrolPrice = 130 * petrol;
    let octenPrice = 135 * octane;

    // Total billing
    const totalBill = dieselPrice + petrolPrice + octenPrice;

    return totalBill;
}

// console.log(oilPrice(2, 1, 2));
// *Problem Three  Start



// TODO Check the Video Of this Section and Full fill the requirement
// *Problem Four Start
function publicBusFare(passenger) {


    // * Sending passenger to bus
    if (passenger % 50 != 0) {

        let extraPassengerOfBus = passenger % 50;
        console.log(extraPassengerOfBus);

        // * Sending passenger to microbus
        if (extraPassengerOfBus > 11) {

            let extraPassengerOfMicro = extraPassengerOfBus % 11;

            console.log(extraPassengerOfMicro);



            // * Checking Extra passenger are exist from Micro bus or not
            if (extraPassengerOfMicro != 0) {

                // * Calculating The Bus Fair For Extra People...
                const busFair = extraPassengerOfMicro * 250;

                return busFair;
            }


        }

    }


}

// console.log(publicBusFare(58))

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


console.log(isBestFriend(someObject1, someObject2));

//*problem five End