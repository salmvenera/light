const slider = () => {

    const topSlider = document.querySelector('.top-slider')
    const item = document.querySelectorAll('.item')
    const table = document.querySelectorAll('.table')

    const cssStyle = `
    <style>
        .top-slider .item.relative.active {
            opacity: 1;
            z-index: 3;
        }
        
        .top-slider .item.relative {
            opacity: 0;
            transition: all 200ms ease-out;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
        }
    `;
    topSlider.insertAdjacentHTML('beforeEnd', cssStyle);
    table[0].classList.add('active')
    item[0].classList.add('active')
     
    let currentSlide = 0  

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => { 
        prevSlide(table, currentSlide, 'active')
        prevSlide(item, currentSlide, 'active')
        currentSlide++

        if (currentSlide >= table.length) {
            currentSlide = 0
        }
        nextSlide(table, currentSlide, 'active')
        nextSlide(item, currentSlide, 'active')
    } 
 
    const startSlide = () => {
        setInterval(autoSlide, 3000)
    }
    startSlide()

}
export default slider