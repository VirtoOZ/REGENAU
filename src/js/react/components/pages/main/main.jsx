import React from 'react';
import './main.scss';

const Main = () => {
	return (
		<main className="page__main main">
			<div className="main__image-ibg bg">
				<img src="@img/main/bg.png" alt="Основной фон" />
				<div className="bg__cloudes"></div>
				<div className="bg__brend"></div>
				<div className="bg__mountains"></div>
				<div className="bg__forest"></div>
			</div>
			<div className="main__content content">
				<div className="content__container">
					<div className="content__subtitle">ПВХ водосток от <span>австрийских профи</span></div>
					<div className="content__slider slider">
						<div className="slider__slides">
							<div className="slider__slide slide">
								<div className="slide__item item-slide">
									<div className="item-slide__info info-item-slide">
										<div className="info-item-slide__kod">Код: 014/114</div>
										<button type="button" className="info-item-slide__more">Детальнее</button>
									</div>
									<div className="item-slide__image-ibg">
										<img src="@img/main/item-1.png" alt="Защелка-фиксатор" />
									</div>
									<div className="item-slide__name">Защёлка фиксатор и дополнительные крепления</div>
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