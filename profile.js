const startBtn = document.querySelector('.startBtn');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const articleList = document.querySelectorAll('#article');

let presentNumber=0;
const MAX_NUMBER = articleList.length-1;
const MIN_NUMBER = -1;


// init
articleList.forEach((article)=>{
    article.setAttribute('style','display:none');
})

startBtn.addEventListener('click', ()=>{
    startBtn.setAttribute('style','display:none');
    nextBtn.setAttribute('style','display:flex');
    prevBtn.setAttribute('style','display:flex');
    if(presentNumber===MIN_NUMBER) presentNumber++;
    articleList[presentNumber].setAttribute('style','display:flex');
})

nextBtn.addEventListener('click',()=>{
        
        articleList[presentNumber].setAttribute('style','display:none');
        presentNumber++;
        if(presentNumber===MAX_NUMBER){
            nextBtn.setAttribute('style','display:none');
        }
        articleList[presentNumber].setAttribute('style','display:flex');
    }
)

prevBtn.addEventListener('click',()=>{
    articleList[presentNumber].setAttribute('style','display:none');
    presentNumber--;
    console.log(presentNumber);
    if(presentNumber === MIN_NUMBER){
        prevBtn.setAttribute('style','display:none');
        nextBtn.setAttribute('style','display:none');
        startBtn.setAttribute('style','display:flex');
    }else{
        nextBtn.setAttribute('style','display:flex');
    }
    articleList[presentNumber].setAttribute('style','display:flex');

    
})


