'use strict'

{
	function addList() {
		const input = document.getElementById('input');
		const li = document.createElement('li');
		li.textContent = input.value;
		const items = '<span class="flex"><i class="check fas fa-check"></i><i class="trash fas fa-trash"></i></span>';
		li.insertAdjacentHTML('beforeend', items);
		document.querySelector('.lists').appendChild(li);
		input.value = '';

		correctList();
		removeList();
	}
	
	const addBtn = document.querySelector('.addbtn');
	addBtn.addEventListener('click', () => {
		addList();
	});

	function correctList() {
		// document.querySelectorAll('.lists > li').forEach((value,index) => {
		// const checks = document.getElementsByClassName('check');
		// checks[index].addEventListener('click', () => {
		// 	value.classList.toggle('correct');
		// 	console.log('click');
		// 	});
		// })

		document.querySelector('.lists').addEventListener('click', e => {
			if (e.target.classList.contains('check')) {
				e.target.parentElement.parentElement.classList.add('correct');
			}
		});
	};

	function removeList() {
		// document.querySelectorAll('.lists > li').forEach((value,index) => {
		// const trashs = document.getElementsByClassName('trash');
		// trashs[index].addEventListener('click', () => {
		// 	value.remove();
		// 	});
		// })
		document.querySelector('.lists').addEventListener('click', e => {
			if (e.target.classList.contains('trash')){
				e.target.parentElement.parentElement.remove();
			}
		});
	};


	// document.querySelectorAll('.lists > li').forEach((value,index) => {
	// 	const checks = document.getElementsByClassName('check');
	// 	checks[index].addEventListener('click', () => {
	// 		value.classList.add('correct');
	// 		console.log('click');
	// 	});
	// });
}