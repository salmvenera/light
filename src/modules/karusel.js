const karusel = () => {
    window.addEventListener('load', () => {

    //// стрелки карусели
    const arrowLeft = document.querySelector('.arrow-left') 
    const arrowRight = document.querySelector('.arrow-right')

    let column = document.querySelectorAll('.col-md-4')   //отдельно колонки 
    let images = document.querySelectorAll('.services-elements img')  // отдельно нод лист с изображ

    let oneBlock = document.querySelector('.services-elements relative') // один блок карусели с img и text
    let blockNode = document.querySelectorAll('.services-elements .element') // нод лист всех блоков карусели
    let carousel = document.querySelector('.services-carousel')
    let carouselNode = document.querySelectorAll('.services-elements .col-sm-6')

    // счетчики
    let counter = 0;
    const stepSize = `400`;
    console.log(stepSize)

    const cssStyle = `
    <style> 
    
    .services-elements {
        display: flex;
        width: 100%;
        height: 460px;
        margin: auto;
        overflow: hidden;
    }
    .services-carousel .element {
        display: block;
        width: 100%;
        
    }
    .services-carousel {
        display: flex;
        
    }
    .transformAnimation {
        transition: .4s all ease-in-out;
    }
    .col-md-4 {
        width: 400px;
    }
    .services-elements .title-h5 {
        margin-bottom: 45px;
    }
    .services-elements .element-price {
        margin-top: -48px;
       
    }
    ` 
    carousel.insertAdjacentHTML('beforeEnd', cssStyle);

    carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)` 
    
    arrowRight.addEventListener('click', () => {
        if (document.documentElement.clientWidth > 768) {
            if (counter >= 4 - 1) counter = -1;
            carousel.classList.add('transformAnimation')
            counter++;
            carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)` 
        } else {
            if (counter >= 6 - 1) counter = -1;
            carousel.classList.add('transformAnimation')
            counter++;
            carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)` 
        }
    })

    arrowLeft.addEventListener('click', () => {
        if (document.documentElement.clientWidth > 768) {
            if (counter <= 0 ) counter = 4
            carousel.classList.add('transformAnimation')
            counter--;
            carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)` 
        } else {
            if (counter <= 0 ) counter = 6
            carousel.classList.add('transformAnimation')
            counter--;
            carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)` 
        }
    })
         
})
}
export default karusel