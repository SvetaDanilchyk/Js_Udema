//----------------------------------------------1--------------------------------------
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let str = '';
        let length = Object.keys(plan.skills.languages).length;
        
        for( let i = 0; i < length; i++) {
            if (i != length - 1) {                
                str += plan.skills.languages[i] + " ";
            } else {             
                str += plan.skills.languages[i];
            }
        }
        return `Мне ${plan.age} и я вледию языками: ${str.toLocaleUpperCase()}`
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

// first
/* 
console.log(showExperience(personalPlanPeter));

function showExperience(plan) {
    for(let key in plan) {
        if ( typeof plan[key] == 'object')
        {
            for(let item in plan[key]) {
                if(item === 'exp') {
                    return plan[key][item];
                }
            }
            
        }
    } 

}

// second

function showProgrammingLangs(plan) {
    let str = '';
    let ProgrammingLangs = {...plan.skills.programmingLangs};


    for (let i in ProgrammingLangs) {
        str += `Язык ${i} изучен на ${ProgrammingLangs[i]}\n`;
    }
    return str;
}; */ 

/* function showProgrammingLangs(plan) {
    let str = '';

    for (let i in plan) {
        if(typeof plan[i] === 'object') {
            for(let j in plan[i]) {
                if(j === 'programmingLangs') {
                    for(k in plan[i][j])
                    {
                        str += `Язык ${k} изучен на ${plan[i][j][k]}\n`
                    }

                    return str;
                }
            }
        }
    }

    return str;
} */

function showProgrammingLangs(plan) {
    let str = '';
    for (let i in plan.skills.programmingLangs)
    {
        str += `Язык ${i} изучен на ${plan.skills.programmingLangs[i]}\n`
    }
    
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

//--------------------------------------------------2---------------------------------------


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: "; 

    arr.forEach(item => {
        str += `${item} `;
    });
   
   /*  for (let item of arr) {
        str += `${item} `;
    } */
    
    return str.slice(0, -1);
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let  favoriteCities = '';
    
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });

   /*  for( let i = 0; i < arr.length; i++) {
        if(i == arr.length -1){
            favoriteCities += arr[i];
        } else {
            favoriteCities += arr[i] + '\n';       
        }
    } */
}

console.log(standardizeStrings(favoriteCities));

//-------------------------------------------------3--------------------------------------------------

const someString = 'This is some strange string';
function reverse(str) {
    let strimg = '';
    if(typeof(str) === 'string') {
        for(let i = 0; i < str.length; i++) {
        strimg += str[(str.length - 1) - i];
        }

        return strimg;
    } else {
        return "Ошибка!"
    }

    //  return str.split('').reverse().join('');
}
console.log(reverse(someString));
console.log(typeof someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют!' : str = 'Доступные валюты:\n';   
   
    for(let i = 0; i < arr.length; i++) {

        if (arr[i] != missingCurr) {
            str += arr[i] + '\n';
        }                
    }   
    
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies],'CNY'));