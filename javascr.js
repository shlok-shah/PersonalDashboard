
const Add = () => {
    let x = document.getElementsByClassName("addtask")[0].value;
    let y = document.getElementsByClassName("tasks")[0];
    console.log(x);
    console.log(y);
    y.innerHTML += `<li class="todo">${x}</li><hr>`;

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








const weatherAPI = () => {
    let cityname = document.getElementsByClassName("cityname")[0];
    let region = document.getElementsByClassName("regionname")[0];
    let temp = document.getElementsByClassName("temp")[0];
    let icon2 = document.getElementsByClassName("icon2")[0];
    let area = "Chennai";
    fetch(`https://api.weatherapi.com/v1/current.json?key=a5734f426b354ff9aab61937230203&q=${area}&aqi=no`).then(response => {
        console.log('response', response)
        return response.json()
    }).then(data => {
        console.log(data);
        console.log(data.current.condition.text);
        console.log(data.current.condition.icon);
        cityname.innerText = data.location.name +", " + data.location.region;
        region.innerText = "Region: " + data.location.region;
        temp.innerHTML = 
        `<i class="wi wi-thermometer"></i> Temperature: ${data.current.temp_c} deg C`;
        let icon = `${data.current.condition.icon}`
        console.log(icon2);
        console.log(icon)
        icon2.innerHTML = `<img src=${icon} width=80px>`;
        
    }).catch(err => {
        console.log('Cannot Find Area');
    })
    
    
    return false

    
}; 

weatherAPI();
