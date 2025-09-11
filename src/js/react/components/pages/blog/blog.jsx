import React from 'react';
import './blog.scss';

const Blog = () => {
	return (
		<>
			<section className="blog">
				<div className="blog__wrapper">
					<div className="blog__container">
						<div className="blog__header">
							<div className="title-line">
								<h1 className="blog__title title__title">Блог</h1>
							</div>
							<div className="blog__box">
								<div className="blog__navigation slider-navigation">
									<button className="slider-navigation__button slider-navigation__button-prev swiper-button-prev" type='button' aria-description='slider button prev'></button>
									<button className="slider-navigation__button slider-navigation__button-next swiper-button-next" type='button' aria-description="slider button next"></button>
								</div>
								<button className="blog__button button" type="button" aria-description=''>Добвавить фото к портфолио</button>
							</div>
						</div>
						<div className="blog__sliders ">
							<div className="blog__slider-big big-slider-blog swiper">
								<div className="big-slider-blog__wrapper swiper-wrapper">
									{/* slide */}
									<div className="big-slider-blog__slide swiper-slide">
										<div className="big-slider-blog__body">
											<div className="big-slider-blog__image-ibg">
												<img src="@img/main/blog/blog-1.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="big-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="big-slider-blog__slide swiper-slide">
										<div className="big-slider-blog__body">
											<div className="big-slider-blog__image-ibg">
												<img src="@img/main/portfolio/image-1.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="big-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="big-slider-blog__slide swiper-slide">
										<div className="big-slider-blog__body">
											<div className="big-slider-blog__image-ibg">
												<img src="@img/main/portfolio/image-2.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="big-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="big-slider-blog__slide swiper-slide">
										<div className="big-slider-blog__body">
											<div className="big-slider-blog__image-ibg">
												<img src="@img/main/portfolio/image-3.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="big-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="big-slider-blog__slide swiper-slide">
									</div>
								</div>
							</div>
							<div className="blog__slider-mini mini-slider-blog swiper">
								<div className="mini-slider-blog__wrapper swiper-wrapper">
									{/* slide */}
									<div className="mini-slider-blog__slide swiper-slide">
										<div className="mini-slider-blog__body">
											<div className="mini-slider-blog__image-ibg">
												<img src="@img/main/blog/blog-1.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="mini-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="mini-slider-blog__slide swiper-slide">
										<div className="mini-slider-blog__body">
											<div className="mini-slider-blog__image-ibg">
												<img src="@img/main/portfolio/image-1.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="mini-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="mini-slider-blog__slide swiper-slide">
										<div className="mini-slider-blog__body">
											<div className="mini-slider-blog__image-ibg">
												<img src="@img/main/portfolio/image-2.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="mini-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="mini-slider-blog__slide swiper-slide">
										<div className="mini-slider-blog__body">
											<div className="mini-slider-blog__image-ibg">
												<img src="@img/main/portfolio/image-3.png" alt="Изображение Блока статья 1" />
											</div>
											<div className="mini-slider-blog__content content-slider-blog">
												<div className="content-slider-blog__title">Новый ассортимент Fasiding vifront</div>
												<div className="content-slider-blog__subtitle">Первый абзац, который очень интересный и стимулирует продолжить читать статью, потому, что...</div>
												<a href="#" className="content-slider-blog__more">Читать полностью</a>
											</div>
										</div>
									</div>
									{/* slide */}
									<div className="big-slider-blog__slide swiper-slide">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	)
};

export default Blog;