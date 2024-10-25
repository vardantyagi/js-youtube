// let URL = 'https://cat-fact.herokuapp.com/facts';
// // console.log(URL)

// const para = document.querySelector('#para');
// const btn = document.querySelector('#btn');

// // let fact = JSON.parse(URL);
// // console.log(fact)

// const getFacts = async ()=>{
//     console.log('getting data...');
//     let response = await fetch(URL);
//     // console.log(response);
//     let data = await response.json();
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].text);
//     para.innerText = data[0].text;
    
//     console.log(response.status);
// }
// // btn.addEventListener('click',getFacts);
// // getFacts();

// function getFactsByPromiseChaining(){
//     let promise = fetch(URL);

//     promise
//     .then((response)=>{
//     // console.log(response)
//     return response.json();
//     })
//     .then((data)=>{
//     console.log(data);
//     })
//     .catch((error)=>{
//     console.log(error);
//     })
// }

// btn.addEventListener('click' ,getFactsByPromiseChaining)

// // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies

// // old format------>>
// // json = fetchJSON(`/currencies/{fromCurrency}/{toCurrency}`)
// // rate = json[toCurrency]

// // new format ------->>>
// // json = fetchJSON(`/currencies/{fromCurrency}`)
// // rate = json[fromCurrency][toCurrency]


const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';


fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})