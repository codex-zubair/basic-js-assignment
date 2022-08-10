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

console.log(isJavaScriptFile("abul.js"));
// * Problem Two End
