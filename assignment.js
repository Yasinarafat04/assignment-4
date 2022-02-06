//problem-1 anaToVori

function anaToVori(ana) {
    let vori = ana / 16;
    return vori;
}
let myAna = 96;
vori = anaToVori(myAna);
console.log(vori)



//problem-2: pandaCost
function pandaCost(singara, comuca, jilapi) {
    const singaraPrice = 7;
    const comucaPrice = 10;
    const jilapiPrice = 15;

    let totalSingaraPrice = singaraPrice * singara;
    let totalComucaPrice = comuca * comucaPrice;
    let totalJilapiPrice = jilapi * jilapiPrice;

    let totalPandacost = totalSingaraPrice + totalComucaPrice + totalJilapiPrice;
    return totalPandacost;
}

let productQuantity = pandaCost(10, 12, 15);
console.log(productQuantity);



//problem-3: picnicBudget

function picnicBudget(mambers) {
    let costPerMamber = 5000;

    if (mambers <= 100) {
        costPerMamber = 5000;
    }
    else if (mambers <= 200) {
        costPerMamber = 4000;
    }
    else {
        costPerMamber = 3000
    }
    return costPerMamber;
}

const numberOfMamber = picnicBudget(20000);
console.log(numberOfMamber);

//problem-4: oddFriend

function oddFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 != 0) {
            return friends[i];
            break;
        }
    }
}
const friends = ['rakib', 'shakib', 'rony', 'jony', 'riham', 'mohit'];
const oddFriendName = oddFriend(friends);
console.log(oddFriendName);