import React from 'react';
import './portfolio.scss';

const Portfolio = () => {
	return (
		<>
			<section className="portfolio">
				<div className="portfolio__container">
					<div className="portfolio__wrapper">
						<div className="portfolio__content">
							<div className="portfolio__title title-line">
								<h1 className="title__title">портфолио</h1>
								<div className="title__text">Примеры работ, которыми <span>гордится наша компания</span></div>
							</div>
							<div className="portfolio__buttons">
								<button className="portfolio__button button" type="button" aria-description=''>Добвавить фото к портфолио</button>
								<button className="portfolio__button portfolio__button-gift button-ico button" type="button" aria-description='button get gift'></button>
							</div>
						</div>
						<div className="portfolio__slider swiper">
							<div className="swiper-wrapper">
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-1.png" alt="Картинка 1" />
									</div>
								</div>
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-2.png" alt="Картинка 2" />
									</div>
								</div>
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-3.png" alt="Картинка 3" />
									</div>
								</div>
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-1.png" alt="Картинка 1" />
									</div>
								</div>
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-2.png" alt="Картинка 2" />
									</div>
								</div>
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-3.png" alt="Картинка 3" />
									</div>
								</div>
								<div className="portfolio__slide swiper-slide">
									<div className="portfolio__image-ibg">
										<img src="@img/main/portfolio/image-1.png" alt="Картинка 1" />
									</div>
								</div>
							</div>
						</div>
						<div className="portfolio__navigation slider-navigation">
							<button className="slider-navigation__button slider-navigation__button-prev swiper-button-prev" type='button' aria-description='slider button prev'></button>
							<button className="slider-navigation__button slider-navigation__button-next swiper-button-next" type='button' aria-description="slider button next"></button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};

export default Portfolio;