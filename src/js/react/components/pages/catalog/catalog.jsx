import React from "react";

const Catalog = () => {
	return (
		<>
			<section className="catalog">
				<div className="catalog__container">
					<div className="catalog__title title">
						<h1 className="catalog__text title__title">Каталог товаров</h1>
						<p className="title__text">Водосточная система Regenau представлена в трех популярных на рынке цветах: <span>белый, коричневый и графит;</span> и двух типоразмерах: <span>125/100 и 125/80,</span> где первая цифра означает диаметр желоба, а другая - диаметр трубы.</p>
					</div>
					<div className="catalog__wrapper">
						<div className="catalog__contant contant-catalog">
							<div className="contant-catalog__info">
								<div className="contant-catalog__image">
									<img src="@img/icons/info.svg" alt="Иконка стравки" />
								</div>
								<span>Нажмите на элемент, что бы узнать больше!</span>
							</div>
							<ul className="contant-catalog__navigation catalog-list">
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Желоб</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Угол желоба 90</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Заглушка</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Держатель желоба ПВХ</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Колено 67,5</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Труба</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Лейка</button></li>
								<li className="catalog-list__item active"><button type="button" className="catalog-list__button">Соединитель желоба</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Тройник</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Слединитель трубы</button></li>
								<li className="catalog-list__item"><button type="button" className="catalog-list__button">Держатель трубы металлический</button></li>
							</ul>
							<img src="@img/main/catalog/all-items.png" alt="Каталог" />
							<div className="contant-catalog__slider slider swiper">
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
											<img src="@img/main/advantage/item-2/adventage-item-2.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/advantage/item-3/adventage-item-3.png" alt="Защелка-фиксатор" />
										</div>
										<div className="slide__name">Защёлка фиксатор и дополнительные крепления</div>
									</div>
									<div className="slider__slide slide swiper-slide">
										<div className="slide__info info-slide">
											<div className="info-slide__kod">Код: 014/114</div>
											<button type="button" className="info-slide__more">Детальнее</button>
										</div>
										<div className="slide__image-ibg_contain">
											<img src="@img/main/advantage/item-4/adventage-item-4.png" alt="Защелка-фиксатор" />
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
						<div className="catalog__filter filter-catalog">
							<div className="filter-catalog__wrapper">
								<div className="filter-catalog__title">
									<p className="filter-catalog__color">Цвет</p>
								</div>
								<div className="filter-catalog__body filter-item">
									<div className="filter-item__border">
										<div className="filter-item__box filter-item__box">
											<button type="button" className="filter-item__contant filter-item__contant-white" aria-placeholder="select button for color white"></button>
										</div>
									</div>
									<div className="filter-item__sublabel">
										<div className="filter-item__color">Белый</div>
										<div className="filter-item__color-number">9010</div>
									</div>
								</div>
								<div className="filter-catalog__body filter-item filter-item_active">
									<div className="filter-item__border">
										<div className="filter-item__box filter-item__box">
											<button type="button" aria-placeholder="select button for color graphite" className="filter-item__contant filter-item__contant-graphite"></button>
										</div>
									</div>
									<div className="filter-item__sublabel">
										<div className="filter-item__color">Графит</div>
										<div className="filter-item__color-number">7024</div>
									</div>
								</div>
								<div className="filter-catalog__body filter-item">
									<div className="filter-item__border">
										<div className="filter-item__box filter-item__box">
											<button type="button" className="filter-item__contant filter-item__contant-brown" aria-placeholder="select button for color brown"></button>
										</div>
									</div>
									<div className="filter-item__sublabel">
										<div className="filter-item__color">Коричневый</div>
										<div className="filter-item__color-number">8017</div>
									</div>
								</div>
							</div>
							<button type="button" className="filter-catalog__button">Пепейти в каталог</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};

export default Catalog;