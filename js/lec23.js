// *
// **
// ***
// ****
// *****
// ******

let result = '';

for (let i = 1; i < 8; i++)
{
    for(let j = 0; j < i; j++ )
    {
        result += '*';
    }

    result += '\n'; 
    
}

console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let resu = '';
// Проверяется именно переменная result, формируйте строку в ней


for(let i = 0; i <= lines; i++)
{
    for (let j = 0; j < lines - i; j++)
    {
         resu += " ";
    }
    
    for(let k = 0; k < 2 * i + 1; k++ )
    {
        resu += '*';
    }
    resu += "\n";
}

console.log(resu);

//-------------------------------------------------------------------------------------------

for(let i = 20; i > 9; i--)
    {
        console.log(i);
    }

// Место для второй задачи

    // Пишем решение вот тут
    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

    let i = 1;
    while(i < 16)
    {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
    const arrayOfNumbers = [];
    for(let i = 0; i < 6; i++)
    {
        arrayOfNumbers[i] = i + 5;

    }
   
    console.log(arrayOfNumbers);

    const data1 = [5, 10, 'Shopping', 20, 'Homework'];
    
    for (let i = 0; i < data.length; i++)
    {
        if(typeof data1[i] === "string")
        {
            data1[i] += " - done"
        } else 
        {
            data1[i] = data1[i] * 2;
        }
    }

    console.log(data);

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const resul = [];

    for(let i = 0; i < data.length; i++)
    {
        resul[i] = data[(data.length - 1) - i];
    }
    console.log(resul);