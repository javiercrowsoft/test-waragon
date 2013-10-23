var permArr = [],
    usedChars = [];

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i += 1) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length === 0) {
            var v = usedChars.slice();
            if (!contains(permArr, v))
                permArr.push(v);
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};

function contains(list, elem) {
    for(var i = 0; i < list.length; i += 1) {
        var found = true;
        for(var j = 0; j < elem.length; j += 1) {
            if (list[i][j] !== elem[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

function isItSuperTastyA(input) {
    var n = Math.sqrt(input.length);
    for (var i = 0; i < n; i += 1) {
        var k = n * i;
        var sum = 0;
        for (var j = 0; j < n; j += 1) {
            sum += Math.pow(input[j + k], n);
        }
        if (Math.pow(input[k], n) * n !== sum) return false;
    }

    return true;
}
function isItSuperTastyB(input) {
    var n = Math.sqrt(input.length);    
    for (var i = 0; i < n; i += 1) {
        var sum = 0;
        for (var j = 0; j < n; j += 1) {
            sum += Math.pow(input[n * j + i], n);
        }
        if (Math.pow(input[i], n) * n !== sum) return false;
    }
    
    return true;    
}

function isItTasty(input) {
    var n = Math.sqrt(input.length);
    for (var i = 0; i < n; i += 1) {
        var k = n * i;
        var sum = 0;
        for (var j = 0; j < n; j += 1) {
            sum += Math.pow(input[j + k], n);
        }
        if (Math.pow(input[k], n) * n === sum) return true;
    }
    for (var i = 0; i < n; i += 1) {
        var sum = 0;
        for (var j = 0; j < n; j += 1) {
            sum += Math.pow(input[n * j + i], n);
        }
        if (Math.pow(input[i], n) * n === sum) return true;
    }
    
    return false;
}

function howManyTastyHere(input) {
    var count = 0;
    permArr = [];
    usedChars = [];
    for (var i = 0; i < input.length; i += 1) {
        if (isItTasty(input[i])) {
            if (isItSuperTastyA(input[i])) {
                count += 9;
            }
            else if (isItSuperTastyB(input[i])) {
                count += 9;                
            }
            else {
                count += 6;                
            }
        }
    }
    return count;
}

onmessage = function (oEvent) {
  postMessage(howManyTastyHere(permute([1,1,1,2,2,2,3,3,3])));
};


//postMessage(howManyTastyHere(permute([1,1,2,2])));
