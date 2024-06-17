const swiper = new Swiper('.reviews-slider', {
	breakpoints: {
		321: {
			slidesPerView: 1,
			grid: {
				rows: 2,
				fill: 'row',
			},
			navigation: {
				nextEl: '.reviews__item-prev',
				prevEl: '.reviews__item-next',
			},
			loop: true,
			spaceBetween: 22,
		},
		641: {
			slidesPerView: 2,
			grid: {
				rows: 1,
				fill: 'row',
			},
			navigation: {
				nextEl: '.reviews__item-prev',
				prevEl: '.reviews__item-next',
			},
			loop: true,
			spaceBetween: 22,
		},
	},
});

const swiperTeam = new Swiper('.team__inner', {
	breakpoints: {
		0: {
			slidesPerView: 2,
			navigation: {
				nextEl: '.team__item-prev',
				prevEl: '.team__item-next',
			},
			loop: true,
			spaceBetween: 40,
		},
		361: {
			slidesPerView: 0,
		},
	},
});

// Кнопка меню
const menuBtn = document.querySelector('.menu__btn')
const menuList = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('menu--open')
})

// Аккордеон
const accordeonTitle = document.querySelectorAll('.accordeon__title')

accordeonTitle.forEach(item => {
	item.addEventListener('click', () => {

		const parent = item.parentNode

		if (parent.classList.contains('accordeon__item--active')) {
			parent.classList.remove('accordeon__item--active')
		} else {
			accordeonTitle.forEach(element => {
				element.parentNode.classList.remove('accordeon__item--active')
			})
			parent.classList.add('accordeon__item--active')
		}
		// item.parentNode.classList.toggle('accordeon__item--active')
	})
})
