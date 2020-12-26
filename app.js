// get button icons 
const chevron = document.querySelectorAll('.fas');
// get items list
const list = document.querySelectorAll('.slider-container');
console.log(list)

// get btns
const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

// iterate in list
list.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
});

// lanuch my resize function
resizeIcons()
 

let counter = 0;


// next btn
nextBtn.addEventListener('click', function(){
    counter = counter +1
    console.log(counter);
    carousel()
});

// prev btn
prevBtn.addEventListener('click', function(){
    counter = counter -1
    console.log(counter);
    carousel()
});

// carousel function
function carousel(){
    // working with slider
    let sum = list.length
    if (counter === sum){
       // console.log('is it', sum, 'you should rest to 0');
        counter = 0;
    }
    if (counter < 0){
       // console.log('is lower', sum -1,'you should rest up!');
        counter = sum -1
    }
    // add translateX on each click - or +
    list.forEach(function (slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
};

// this function for resize icons in large screen
function resizeIcons(){
    //get a width of the screen;
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    //console.log(width);
    chevron.forEach(function(item){
        if ( width > 1200){
            item.classList.remove('fa-2x');
            item.classList.add('fa-3x');
        }
    })
}


//window.location.reload(true); 
//location = window.location
//window.reload()
