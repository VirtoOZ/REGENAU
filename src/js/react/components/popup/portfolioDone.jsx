import React from 'react';

const PortfolioPopupDone = () => {
	return (
		<>
			<div className="popup portfolio-popup-done">
				<div className="portfolio-popup-done__wrapper">
					<div className="portfolio-popup-done__body">
						<button className="portfolio-popup-done__close" type="submit" aria-description="button close popup" ></button>
						<div className="portfolio-popup-done__title title-line">
							<h1 className="title__title">Благодарим!</h1>
							<div className="title__text">Форму <span>успешно отправлено!</span> Наши менеджеры скоро свяжутся с вами</div>
						</div>
						<button type="button" className="portfolio-popup-done__button button">Главная страница</button>
					</div>
				</div>
			</div>
		</>
	)
};

export default PortfolioPopupDone;