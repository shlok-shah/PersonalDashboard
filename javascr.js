
const Add = () => {
    let x = document.getElementsByClassName("addtask")[0].value;
    let y = document.getElementsByClassName("tasks")[0];
    console.log(x);
    console.log(y);
    y.innerHTML += `<li class="todo">${x}</li><hr>`;

}
let i=4;
const AddStock = () => {
    let x = document.getElementsByClassName("addstock")[0].value;
    let y = document.getElementsByClassName("stocks")[0];
    console.log(x);
    console.log(y);
    if(x!="")
        {
            y.innerHTML += `<div class="ticker tick${i}"></div>`;
            StockAPI(x,`tick${i}`);
            i++;
        }

}




let api_key= "chqctl9r01qv883frg0gchqctl9r01qv883frg10";

//https://finnhub.io/api/v1/quote?symbol=AAPL&token=chqctl9r01qv883frg0gchqctl9r01qv883frg10

const StockAPI = (sym, class1) => {
    let tick = document.getElementsByClassName(class1)[0];
    fetch(`https://finnhub.io/api/v1/quote?symbol=${sym}&token=chqctl9r01qv883frg0gchqctl9r01qv883frg10`).then(response => {
        console.log(response);
        return response.json();
    }).then(
        data => {
            // console.log(data);
            // console.log(tick);
            if(data.dp >= 0){
                change = "pchange"
            }
            else{
                change = "nchange"
            }
            
            tick.innerHTML = `<div class="symbol">${sym}</div><div class="stockvalues"><div class="value">${data.c}</div><div class="${change}">${data.dp}%</div></div>`;

        })

}

StockAPI("AAPL", "tick1");
StockAPI("TSLA", "tick2");
StockAPI("PFE", "tick3");

