import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer__container">
					<div className="footer__top footer-top">
						<div className="footer-top__left">
							<div className="footer-top__logo footer-logo">
								<div className="footer-logo__icon -ibg_contain">
									<img className="footer-logo__img" src="img/headers/regenau-logo.png" alt="Логотип Regenau"></img>
								</div>
								<div className="footer-logo__text">Официалиный поставщик в России</div>
							</div>
						</div>
						<div className="footer-top__right footer-right">
							<div className="footer-right__menu footer-menu">
								<nav className="footer-menu__body">
									<ul className="footer-menu__list">
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Каталог</a></li>
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Калькулятор</a></li>
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Про нас</a></li>
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Монтаж</a></li>
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Доставка и оплата</a></li>
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Гарантии и возврат</a></li>
										<li className="footer-menu__item"><a href="" className="footer-menu__link">Политика конфиденциальности</a></li>
									</ul>
								</nav>
							</div>
							<div className="footer-right__info footer-info">
								<div className="footer-info__column">
									<div className="footer-info__item info-item">
										<div className="info-item__icon -ibg_contain">
											<img src="@img/icons/phone.svg" alt="Телефон" />
										</div>
										<div className="info-item__body">
											<a href="tel:+01234567890" className="info-item__sublabel">+0 (123) 456-78-90</a>
											<a href="mailto:mail@gmail.com" className="info-item__label">mail@gmail.com</a>
										</div>
									</div>
								</div>
								<div className="footer-info__column">
									<div className="footer-info__item info-item">
										<div className="info-item__icon -ibg_contain">
											<img src="@img/icons/www.svg" alt="Телефон" />
										</div>
										<div className="info-item__body">
											<a href="tel:+01234567890" className="info-item__sublabel">График работы</a>
											<a href="mailto:mail@gmail.com" className="info-item__label">пн-пт 09:00 - 18:00</a>
										</div>
									</div>
								</div><div className="footer-info__column">
									<div className="footer-info__item info-item">
										<div className="info-item__icon -ibg_contain">
											<img src="@img/icons/location.svg" alt="Телефон" />
										</div>
										<div className="info-item__body">
											<a href="tel:+01234567890" className="info-item__sublabel">Центральный офис</a>
											<a href="mailto:mail@gmail.com" className="info-item__label">г.Москва проспек Ленина д.1</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer__bottom footer-bottom">
						<div className="footer-bottom__copyright">© 2024 MIZOL. All Rights Reserved.</div>
					</div>
				</div>
			</footer>
		</>
	)
};
export default Footer;