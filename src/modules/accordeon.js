const accordeon = () => {

	const selectElementsNode = document.querySelectorAll('.accordeon > .element') 

	selectElementsNode.forEach((elems) => {
		elems.addEventListener('click', (e) => {
			selectElementsNode.forEach((elem) => {
				elem.classList.remove('active')
				if (e.target.closest('.accordeon > .element').classList.add('active') && e.target.closest('.accordeon > .element > .element-content') ) {
					true
				} else {
					false
				}
			})
		})
	})
}

export default accordeon