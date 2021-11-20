const modal = () => {
    const callReq = document.querySelector('.relative [href="#callback"]') // заказать звонок кнопка
    const modalCallback = document.querySelector('.modal-callback')  //  само модальное окно
    const modalOverlay = document.querySelector('.modal-overlay')  // фон, подложка
    const modalClose = document.querySelector('.modal-close')     
    const button = document.querySelector('.button-services') 
    
    callReq.addEventListener('click', () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    })

    modalOverlay.addEventListener('click', (e) => {
        if (e.target.closest('.modal-overlay')) {
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

    button.addEventListener('click', () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    })
    
}
export default modal