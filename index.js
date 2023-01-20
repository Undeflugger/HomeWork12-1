const myData = document.querySelector('button').addEventListener('click', confirmData);
const mySelect = document.forms[0];
const allCountries = document.getElementById('country');
const table = document.getElementsByTagName('body')[0];


function confirmData(ev){
    ev.preventDefault();
    const arr = [['Name', mySelect.name.value], ['Surname', mySelect.surname.value], ['Birthday' , mySelect.birthday.value],
    ['Sex' , mySelect.sex.value], ['Country' , allCountries.value], ['Address', mySelect.address.value], ['Language' , mySelectors(mySelect.language)]];
    console.log(arr);

    
    let list = '';
    let listColumn = '';
    for(let i = 0; i < arr.length; i++){
        listColumn = '';
        for(let j = 0; j < arr[i].length; j++){
            listColumn += `<td>${arr[i][j]}</td>`;
        }
    list += `<tr>${listColumn}</tr>`; 
    }
    table.innerHTML = '<table class = "table table-dark table-hover my-5 d-flex justify-content-center"></table>';
    const newTable = document.getElementsByTagName('table')[0];
    newTable.innerHTML = list;
}

function mySelectors(select){
    const countries  = Array.from(select);
    const checkeds = countries.filter(el => el.checked).map(el => el.value).join(', ');
    return checkeds;
}

