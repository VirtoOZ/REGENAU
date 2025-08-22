import React from 'react';
import './main.scss';

const Main = () => {
	return (
		<main className="page__main main">
			<div className="main__image-ibg bg">
				<img className='bg__image' src="@img/main/bg.png" alt="Основной фон" />
				<div className="bg__cloudes"></div>
				<div className="bg__brend"></div>
				<div className="bg__mountains"></div>
				<div className="bg__forest"></div>
				<div className="main__content content">
					<div className="content__container">
						<div className="content__subtitle">ПВХ водосток от <span>австрийских профи</span></div>
						<div className="content__box">
							<div className="content__slider-box"></div>
							<div className="content__slider slider swiper">
								<div className="swiper-wrapper">
									<div className="slider__slide slide swiper-slide" >
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
};

export default Main;