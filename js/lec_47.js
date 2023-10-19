"use strict";
/*
function pow1(x,n) {
    let res = 1;

    if(n === 1) {
        return x;
    } else {
        for(let i = 0; i < n; i++) {            
            res *= x;
        }

        return res;
    }
}


function pow(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow(x, n-1);
    }
};

console.log(pow(2,1)); //2
console.log(pow(2,2)); //4
console.log(pow1(2,3)); //8
*/

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Anna',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            studens: [{
                name: 'Test',
                progress: 100
            }]
        }       
    }
    

};

function getTotalProgressByIteration(data) {
    let students = 0;
    let progress = 0;

    for(let curse of Object.values(data)){

        if(Array.isArray(curse)) {            
            students += curse.length;

            for(let i = 0; i < curse.length; i++) {
                progress += curse[i].progress;
            }
        } else {
            for(let subCurse of Object.values(curse)) {
                if(Array.isArray(subCurse)) {
                   students += subCurse.length;
            
                for(let j = 0; j < subCurse.length; j++) {
                    progress += subCurse[j].progress;
                } 
                } else {
                    students += subCurse.length;
                    for(let i = 0; i < curse.length; i++) {
                        progress += subCurse[i].progress;
                    } 
                }
            }
        }

    }
    return progress / students;
};

function getTotalProgressByRecursion(data){
    
    if(Array.isArray(data)) {            
        let total = 0;

        for(let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length]
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            
            const subDataArr= getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
    
}

//console.log(getTotalProgressByIteration(students));

let result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

function factorial(x) {

    if(x <= 0 || x == 1 ) {
        return 1;
    } else if( x % 1 == 0 && typeof x  == 'number') {  
        return x * factorial(x - 1);
    } else {
        return 'Invalid data type';
    }
    
}

console.log("1! " + factorial(1));
console.log("2! " + factorial(0.2));
console.log("3! " + factorial(3));
console.log("4! " + factorial(4));

console.log(typeof 4);
