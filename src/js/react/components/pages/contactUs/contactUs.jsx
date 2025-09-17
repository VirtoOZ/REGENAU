import React from 'react';

const ContactUs = () => {
	return (
		<>
			<section className="contactuse">
				<div className="contactuse__container">
					<div className="contactuse__box">
						<div className="contactuse__question title">
							<h1 className="title__title">Не можете определиться?</h1>
							<div className="title__text"><span>Бесплатно проконсультируем</span>по телефону и поможем <span>подобрать лучший вариант</span> </div>
						</div>
						<div className="contactuse__callback bricks">
							<div className="bricks__title title">
								<h1 className="title__title">Вам перезвонит наш специалист</h1>
							</div>
							<div className="bricks__body">
								<div className="bricks__item">
									<div className="bricks__icon">
										<img src="@img/icons/good.svg" alt="Icon good" />
									</div>
									<div className="bricks__text"><span>Поможем</span> определиться с выбором</div>
								</div>
								<div className="bricks__item">
									<div className="bricks__icon">
										<img src="@img/icons/good.svg" alt="Icon good" />
									</div>
									<div className="bricks__text"><span>Подскажем</span> где поближе преобрести
									</div>
								</div>
								<div className="bricks__item">
									<div className="bricks__icon">
										<img src="@img/icons/good.svg" alt="Icon good" />
									</div>
									<div className="bricks__text"><span>Подберем</span> нажёжного продавца
									</div>
								</div>
								<div className="bricks__item">
									<div className="bricks__icon">
										<img src="@img/icons/good.svg" alt="Icon good" />
									</div>
									<div className="bricks__text"><span>Дадим ответы</span> на любые вопросы
									</div>
								</div>
							</div>
							<button type="button" className="bricks__button button">Перезвонить вам?</button>
						</div>
						<div className="contactuse__gocontact">
							<div className="contactuse__gotel gotel">
								<div className="gotel__body">
									<h3 className="gotel__title">Звоните</h3>
									<div className="gotel__text">Будние дни 9:00 - 18:00</div>
									<img className="gotel__ico" src="@img/icons/tel.svg" alt="tel" />
									<div className="gotel__telbox">
										<a className="gotel__tel" href="tel:+123123456">+12 123 456 789</a>
										<a className="gotel__tel" href="tel:+123123456">+12 123 456 777</a>
									</div>
								</div>
							</div>
							<div className="contactuse__gomail gomail">
								<div className="gotel__body">
									<h3 className="gotel__title">Пишите</h3>
									<div className="gotel__text">Мы онлайн, спрашивайте</div>
									<img className="gotel__ico" src="@img/icons/mail.svg" alt="mail" />
									<div className="gotel__telbox">
										<a className="gotel__mail gotel__tel" href="mailto:detail@regenau.com.ru">detail@regenau.com.ru</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default ContactUs;