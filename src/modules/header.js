const header = () => {

    const blockHeader = document.querySelectorAll('.visible-lg-inline-block > ul > li')

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', (e) => {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
    let up = document.querySelector('.up');

    window.addEventListener('scroll', trackScroll);
    up.addEventListener('click', () => {});
   
    function trackScroll() {
        let scrolled = window.pageYOffset;up
        let coords = document.documentElement.clientHeight;
    
        if (scrolled > coords) {
          up.classList.add('up-up');
        }
        if (scrolled < coords) {
          up.classList.remove('up-up');
        }
      }
    
}
export default header
