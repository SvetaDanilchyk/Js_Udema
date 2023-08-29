const shoppingMallData = {
    shops: [ {  width: 10,  length: 5 }, { width: 15, length: 7}, {width: 20, length: 5 }, { width: 8, length: 10 }],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shops => {
        square += shops.width * shops.length; 
    } );

    volume = square * data.height;

   if(volume * data.moneyPer1m3 <= data.budget) {
        return "Бюджета достаточно";
   } else { 
        return "Бюджета недостаточно";      
   }
    
}

console.log(isBudgetEnough(shoppingMallData));


//------------------------------------------------------------------------- 2 -------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Tim', 'Qw', 'Sam'];

function sortStudentsByGroups(arr) {

    let group1 = [],
        group2 = [],
        group3 = [];

    let count = 0;

        let rest = [];

        arr.sort();

        for (let i = 0; i < arr.length; i++) {

            if(i < 3) {          
                group1.push(arr[i]);
            } else if ( i < 6 ) {                
                group2.push(arr[i]);
            } else if(i < 9) {
                group3.push(arr[i]);
            }  else {
                rest.push(arr[i]);
            }            
            
        }
        
        return [group1,group2,group3, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));