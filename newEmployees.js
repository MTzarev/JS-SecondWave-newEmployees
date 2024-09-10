function newEmployees (arr){
    let newArr = [];

    for(let line of arr){
        let nameObj = {};
        nameObj.name = line;
        newArr.push(nameObj);
    }
for (let toPrint of newArr){
    if(toPrint.hasOwnProperty(`name`)){
        let length = toPrint.name.length
        console.log(`Name: ${toPrint.name} -- PersonalNumber: ${length} `);
        
    }
}

    console.log();
}
newEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);