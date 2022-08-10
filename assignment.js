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
function oilPrice(diesel, petrol, octen) {

    dieselPrice = 114 * diesel;
    petrolPrice = 130 * petrol;
    octenPrice = 135 * octen;

    // Total billing
    totalBill = dieselPrice + petrolPrice + octenPrice;

    return totalBill;
}

// console.log(oilPrice(2, 1, 2));
// *Problem Three  Start