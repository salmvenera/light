const accordeon = () => {

	const accordeon = document.querySelector('.accordeon')
	const elTitle = document.querySelectorAll('.accordeon > .element > .title') // кнопка title
	//const elementContent = parentElem.querySelectorAll('.accordeon > .element > .element-content') //  контент внутри кнопки
	const selectElements = document.querySelector('.accordeon > .element.active') 
	const selectElementsNode = document.querySelectorAll('.accordeon > .element') 
	const elementContent = document.querySelectorAll('.accordeon > .element > .element-content')

	const cssStyle =`
	<style>
		accordeon > div:first-of-type .element-content {
			display: none;

	`; 
 
	accordeon.insertAdjacentHTML('beforeEnd', cssStyle);
	//elementContent[0].classList.add('active')
	

	selectElementsNode.forEach((elems) => {
		elems.addEventListener('click', (e) => {
			selectElementsNode.forEach((elem) => {
				elem.classList.remove('active')
				e.target.closest('.accordeon > .element').classList.add('active')

			})
		})

	})

	
}

export default accordeon


	/* elTitle.forEach((elem) => {
		elem.addEventListener('click', () => {
			let parentElem = this.parentNode;
			let elementContent = parentElem.querySelectorAll('.accordeon > .element > .element-content')
			if(elementContent.classList.contains('active')) {
				elementContent.classList.remove('active');
			}
			else {
				elementContent.classList.add('active');
			}
		})
	})
 */




/* 
    const selectElements = document.querySelector('.accordeon > .element')  //первый активный элемент
    const elementContent = document.querySelectorAll('.accordeon > .element > .element-content') // контент внутри кнопки
	const elTitle = document.querySelectorAll('.accordeon > .element > .title') // кнопка title
	const element = document.querySelectorAll('.accordeon > .element')
 
   
    const selects = document.querySelectorAll('.accordeon > .element') // весь нод лист
    const accordeon = document.querySelector('.accordeon') // весь блок аккордеон
 */

