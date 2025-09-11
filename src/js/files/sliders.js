/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Parallax, Controller } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей с scss / libs / swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {

	if (document.querySelector('.swiper')) {
		new Swiper('.content__slider.slider', {
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			autoHeight: true,
			watchOverflow: true,
			speed: 800,
			setWrapperSize: false,
			preloadImages: false,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
			},
			on: {
			},
		});
	}

	// ПРЕИМУЩЕСТВА
	new Swiper('.advantages__slider.swiper', {
		modules: [Pagination, Parallax, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 50,
		watchOverflow: true,
		speed: 800,
		setWrapperSize: true,
		parallax: true,
		pagination: {
			el: '.advantages__control .swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				const controlIcons = document.querySelectorAll('.advantages__control .control__icon');
				return '<div class="' + className + '"><span>' + controlIcons[index].outerHTML + "</span></div>";
			},
		},
		breakpoints: {
			640: {
				spaceBetween: 20,
			},
			992: { spaceBetween: 50 }
		},
		on: {
		},
	});

	// КАТАЛОГ
	new Swiper('.contant-catalog__slider.slider', {
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		autoHeight: true,
		watchOverflow: true,
		speed: 800,
		setWrapperSize: false,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
		},
		on: {
		},
	});

	// ПОРТФОЛИО
	new Swiper('.portfolio__slider', {
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: "auto",
		// slidesPerView: 1,

		// slidesOffsetBefore: 300,
		// autoHeight: false,
		watchOverflow: true,
		speed: 800,
		// loop: true,
		infinity: true,
		setWrapperSize: false,
		// preloadImages: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.portfolio__navigation .swiper-button-next',
			prevEl: '.portfolio__navigation .swiper-button-prev'
		},
		on: {
		},
		breakpoints: {
			320: {
				spaceBetween: 8,
			},
			640: {
				spaceBetween: 10,
			},
			768: {
				spaceBetween: 15,
			},
			992: {
				spaceBetween: 20,
			},
			1268: {
			},
		},
	});

	// БЛОГ-big
	const blogSliderFirst = new Swiper('.blog__slider-big', {
		modules: [Navigation, Pagination, Autoplay, Controller],
		// observer: true,
		// observeParents: true,
		slidesPerView: 2,
		// spaceBetween: 16,
		// slidesOffsetBefore: 300,
		// autoHeight: false,
		// watchOverflow: true,
		speed: 800,
		// loop: true,
		// infinity: true,
		// setWrapperSize: false,
		// preloadImages: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		nested: true,
		navigation: {
			nextEl: '.blog__navigation .swiper-button-next',
			prevEl: '.blog__navigation .swiper-button-prev'
		},
		on: {
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 8,
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
			// 	1268: {
			// 	},
		},
	});

	// БЛОГ-mini
	const blogSliderSecond = new Swiper('.blog__slider-mini', {
		modules: [Navigation, Pagination, Autoplay, Controller],
		observer: true,
		observeParents: true,
		observeChildren: true,
		// slidesPerView: "auto",
		slidesPerView: 2,
		// spaceBetween: 30,
		// slidesOffsetBefore: 300,
		// autoHeight: true,
		// watchOverflow: true,
		direction: 'vertical',
		speed: 800,
		// loop: true,
		// infinity: true,
		// setWrapperSize: false,
		// preloadImages: true,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		// navigation: {
		// 	nextEl: '.blog__navigation .swiper-button-next',
		// 	prevEl: '.blog__navigation .swiper-button-prev'
		// },
		// on: {
		// },
		// breakpoints: {
		// 	320: {
		// 		spaceBetween: 8,
		// 	},
		// 	640: {
		// 		spaceBetween: 10,
		// 	},
		// 	768: {
		// 		spaceBetween: 15,
		// 	},
		// 	992: {
		// 		spaceBetween: 20,
		// 	},
		// 	1268: {
		// 	},
		// },
	});
	blogSliderFirst.controller.control = blogSliderSecond;
	blogSliderSecond.controller.control = blogSliderFirst;
}



//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// }

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});


// if (document.querySelector('.swiper')) { //Указываем класс нужного слайдера
//Создаем слайдер
// new Swiper('.content__slider.slider', { //Указываем класс нужного слайдера
//Подключаем модули слайдера
//для конкретного случая
// modules: [Navigation, Pagination, Autoplay],
// observer: true,
// observeParents: true,
// slidesPerView: 1,
// spaceBetween: 8,
// autoHeight: true,
// watchOverflow: true,
// speed: 800,
// setWrapperSize: false,
//touchRatio: 0,
// simulateTouch: false,
// loop: true,
// preloadImages: false,
// lazy: true,
// parallax: true,
// loopAdditionalSlides: 5,

// Эффекты
// effect: 'fade',
// autoplay: {
// 	delay: 3000,
// 	disableOnInteraction: true,
// },

// Пагинация
// pagination: {
// 	el: '.swiper-pagination',
// 	clickable: true,
// },

// Скроллбар
/*
scrollbar: {
	el: '.swiper-scrollbar',
	draggable: true,
},
*/

// Кнопки "влево/вправо"
// navigation: {
// prevEl: '.swiper-button-prev',
// 	nextEl: '.swiper-button-next',
// },

// Брейкпоинты
// breakpoints: {
// 	640: {
// 		slidesPerView: 1,
// 		spaceBetween: 0,
// 		autoHeight: true,
// 	},
// 	768: {
// 		slidesPerView: 2,
// 		spaceBetween: 20,
// 	},
// 	992: {
// 		slidesPerView: 3,
// 		spaceBetween: 20,
// 	},
// 	1268: {
// 		slidesPerView: 4,
// 		spaceBetween: 30,
// 	},
// },

// События
// 	on: {
// 	},
// });
// }