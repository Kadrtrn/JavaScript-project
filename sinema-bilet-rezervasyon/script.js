const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

container.addEventListener('click',function(e){
    
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        //selected varsa sil yoksa ekle
        e.target.classList.toggle('selected');
        calculateTotal();
        

    }});


select.addEventListener('change',function(e){

    calculateTotal();

});


function calculateTotal(){

    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    let price = select.value;
    amount.innerText = selectedSeatCount*price;
    count.innerText = selectedSeatCount;

};