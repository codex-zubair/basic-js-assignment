// Convert Radian to degree Start...
// !Problem:- 1
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

// radianToDegree(10);
//! Problem:- 1
// Convert Radian to degree End...









// Checking wether the given file name is a javascript or not Start... 
// ! Problem:- 2
function isJavaScriptFile(fileName) {

    if (typeof fileName == "string") {
        if (fileName.includes('.js') && fileName.endsWith('.js')) {
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

// isJavaScriptFile('iamge.jpg.js');
// ! Problem:- 2
// Checking wether the given file name is a javascript or not End... 











//  Calculate the total oil price that have to pay (Start)
// !Problem:- 3
function oilPrice(diesel, petrol, octane) {

    if (typeof diesel == "number" && typeof petrol == "number" && typeof octane == "number") {
        let dieselPrice = 114 * diesel;
        let petrolPrice = 130 * petrol;
        let octanePrice = 135 * octane;

        // Total billing
        const totalBill = dieselPrice + petrolPrice + octanePrice;
        return totalBill;
    }
    else
        (
            console.log("Please Provide Number!")
        )
}

// console.log(oilPrice(1, 0, 2));
// !Problem:- 3
// Calculate the total oil price that have to pay (End)











// Bus Fair for N passenger...
// !Problem:- 4
function publicBusFare(passenger) {
    let busFair = 0;

    if (typeof passenger == 'number') {
        // * Checking people for bus
        if (passenger % 50 != 0) {

            let extraPassengerOfBus = passenger % 50;


            // * Checking People for micro bus
            if (extraPassengerOfBus % 11 != 0) {

                let extraPassengerOfMicro = extraPassengerOfBus % 11;



                // * Checking Extra passenger are exist for public bus.
                if (extraPassengerOfMicro != 0) {



                    // * Calculating The Bus Fair For Extra People...
                    let busFair = extraPassengerOfMicro * 250;
                    // TODO NOT GETTING RETURN VALUE FROM IT... FIXED.

                    return busFair;

                }
            }

        }

        // IF passengers are 50...
        else {
            return 0;
        }




    }

    else {
        console.log("Please provide Number!")
    }
}

// publicBusFare(365);
// !Problem:- 4
// Bus Fair for N passenger...













// Checking Two Best Friends...
//!Problem:- 5
function isBestFriend(obj1, obj2) {

    // *Checking of type.
    if (typeof obj1 == 'object' && typeof obj2 == 'object') {

        if (obj1.name == obj2.bestFriend) {
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


const object1 = {
    name: "rock",
    bestFriend: "tom"
};

const object2 = {
    name: "tom",
    bestFriend: "rock"
};


// isBestFriend(object1, object2);

//! problem:- 5
// Checking Two Best Friends...