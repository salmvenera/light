const modal = () => {
    const modalCallback = document.querySelector('.modal-callback')  //  само модальное окно
    const modalOverlay = document.querySelector('.modal-overlay')  // фон, подложка
    const modalClose = document.querySelector('.modal-close')     
    const body = document.querySelector('body')
    
    body.addEventListener('click', (e) => {
        if (e.target.closest('.header .fancyboxModal') ||
           (e.target.closest('.button-services')) || 
           (e.target.closest('.services-elements .fancyboxModal ')) || 
           (e.target.closest('.mob-menu-btn'))) { 
                modalCallback.style.display = 'block';
                modalOverlay.style.display = 'block';
        } else if (e.target.matches('.modal-close') || (e.target.closest('.modal-overlay'))) {
                modalCallback.style.display = 'none';
                modalOverlay.style.display = 'none';
        }
    })

    modalClose.addEventListener('click', (e) => {
        if (e.target.closest('.modal-close')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    }) 

}
export default modal