// const BASE_URL = 'https://latest.currency-api.pages.dev/v1/currencies/eur.json';
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');
// let img = document.querySelectorAll('img');

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.appendChild(newOption);
        if(select.name=='from' && currCode=='USD'){
            newOption.selected = 'selected';
        }
        else if(select.name=='to' && currCode=='INR'){
            newOption.selected = 'selected';
        }
        // console.log(currCode,countryList[currCode]);
    }
    select.addEventListener('change',(event)=>{
        updateFlag(event.target)
    })
}
const updateFlag = (element)=>{
    console.log(element);
    let currCode = element.value;
    console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img')
    img.src = newSrc;
    
}

btn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})
const updateExchangeRate = async ()=>{
    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal = 1;
        amount.value = "1";
    }
    console.log(amtVal);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amtVal*rate;
    msg.innerText = `${amount.value} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

window.addEventListener('load',()=>{
    updateExchangeRate();
})

// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";



// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies

// old format------>>
// json = fetchJSON(`/currencies/{fromCurrency}/{toCurrency}`)
// rate = json[toCurrency]

// new format ------->>>
// json = fetchJSON(`/currencies/{fromCurrency}`)
// rate = json[fromCurrency][toCurrency]