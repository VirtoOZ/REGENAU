import React from 'react';

const PortfolioPopup = () => {
	return (
		<>
			<div className="popup portfolio-popup">
				<div className="portfolio-popup__wrapper">
					<form className="portfolio-popup__form" action="" method="post">
						<button className="portfolio-popup__close" type="submit" aria-description="button close popup" ></button>
						<div className="portfolio-popup__title title-line">
							<h1 className="title__title">Добавить фото</h1>
						</div>
						<div className="portfolio-popup__body">
							<input className="portfolio-popup__input portfolio-popup__input-name" autoComplete="off" type="text" name="form[]" data-error="Ошибка" data-value="" />
							<input className="portfolio-popup__input portfolio-popup__input-tel" autoComplete="off" type="tel" name="form[]" data-value="Телефон" />
							<input className="portfolio-popup__input portfolio-popup__input-mail" autoComplete="off" type="email" name="form[]" data-value="Email" id="" />
							<div className="portfolio-popup__input choose">
								<button type="button" className="choose__button button button-green">Выбрать файл</button>
								<div className="choose__box">
									<div className="choose__image-ibg">
										<img src="@img/main/portfolio/image-1.png" alt="выбранное изображение" />
									</div>
									<span>файл не выбран</span>
								</div>
							</div>
							<button type="button" className="portfolio-popup__more button button-green">Добавить еще</button>
						</div>
						<button className="portfolio-popup__button button" type="submit" >Отправить фото</button>
					</form>
				</div>
			</div>
		</>
	)
};

export default PortfolioPopup;