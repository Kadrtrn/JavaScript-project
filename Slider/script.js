var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'}];

let i=0;



display();

function display(keeper=models[i]){
    document.querySelector('h5.card-title').textContent=keeper.name;
    document.querySelector('img.card-img-top').setAttribute('src',keeper.image);
    document.querySelector('div.card-body a.card-link').setAttribute('href',keeper.link);
   
}


function right(){
    clearInterval(interval)
    i++;
    if(i==models.length){
        i=0;
    }

    display();
    interval = setInterval(function(){
        i++;
        if(i==models.length){
            i=0;
        }
        
        display();
        
    },2000);
}

function left(){
    clearInterval(interval)
    i--;
    if(i<0){
        i=models.length-1;
    }
    
    display();

    interval = setInterval(function(){
        i++;
        if(i==models.length){
            i=0;
        }
        
        display();
        
    },2000);
}


interval = setInterval(function(){
    i++;
    if(i==models.length){
        i=0;
    }
    
    display();
    
},2000);







