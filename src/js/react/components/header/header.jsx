import React from 'react';

const Header = () => {
	return (
		<header data-scroll="80" className="header" >
			<div className="header__wrapper">

				<div className="header__body header-body">
					<div className="header__container">
						<div className="header-body__top header-top">
							<div className="header-top__logo logo">
								<div className="logo__icon icon-logo -ibg_contain">
									<img className="icon-logo__img" src="img/headers/regenau-logo.png" alt="Логотип Regenau"></img>
								</div>
								<div className="logo__text">Официалиный поставщик в России</div>
							</div>
							<div className="header-top__info info-top">
								<div className="info-top__column column-info">
									<div className="column-info__text">График работы:</div>
									<div className="column-info__text"><span>Пн-Пт 09:00-18:00</span></div>
								</div>
								<div className="info-top__column column-info">
									<a href="tel:+7123456789" className="column-info__tel">+7(123)12-34-567</a>
									<a href="tel:+7123456789" className="column-info__tel">+7(123)12-34-567</a>
								</div>
								<div className="info-top__column column-info">
									<div className="column-info__text">Есть вопросы: <span>Закажите</span></div>
									<button type='button' className="column-info__button btn">Бесплатный звонок</button>
								</div>
							</div>
							<button type="button" className="header__icon icon-menu"><span></span></button>
						</div>
					</div>
					<div className="header__container">
						<div className="header-body__bottom header-bottom">
							<div className="header-bottom__left">
								<nav className="menu__body">
									<ul className="menu__list">
										<li className="menu__item"><a href="" className="menu__link">Каталог</a></li>
										<li className="menu__item"><a href="" className="menu__link">Калькулятор</a></li>
										<li className="menu__item"><a href="" className="menu__link">Про нас</a></li>
										<li className="menu__item"><a href="" className="menu__link">Монтаж</a></li>
										<li className="menu__item"><a href="" className="menu__link">Контакты</a></li>
									</ul>
								</nav>
							</div>
							<div className="header-bottom__right bottom-right">
								<div className="bottom-right__leng">RU</div>
								<button className="bottom-right__checkout btn-checkout">
									<img src="img/icons/checkout.svg" alt="Корзина"></img>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header >
	)
};

export default Header;