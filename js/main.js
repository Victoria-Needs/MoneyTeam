
    const spendings = document.querySelector('.spendings-input');
    const expenses = document.querySelector('.expenses-input');
    const savings = document.querySelector('.savings-input');
  

    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx,{
    
      type:'pie',
      data: {
    
        labels: ['Spendings', 'Expenses', 'Savings'],
        datasets : [
          {
    
            label:'# of votes',
            data : [0,0,0],
            backgroundColor:['#2adece', '#dd3b79', '#ff766b'],
            borderWidth:1
          }
        ]
    
      }
    
    });
    
    
    const updateChartValue =(input, dataOrder)=> {
    
      input.addEventListener ('change', e => {
        myChart.data.datasets[0].data[dataOrder] = e.target.value;
        myChart.update();
      });
    
    };
    
    updateChartValue(spendings,0);
    updateChartValue(expenses, 1);
    updateChartValue(savings, 2);



var total_calc = document.getElementById("total");

var spendings_calc = document.getElementById("spendings");
var expenses_calc = document.getElementById("expenses");
var savings_calc = document.getElementById("savings");

spendings.addEventListener('change',  updateValue);
expenses.addEventListener('change',  updateValue);
savings.addEventListener('change',  updateValue);

function updateValue(e){
  var total = parseInt(spendings_calc.value, 10) +  parseInt(expenses_calc.value, 10) + parseInt(savings_calc.value, 10);
 total_calc.value = total;
}



   

