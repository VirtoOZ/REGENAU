import React from "react";

const Consulting = () => {
	return (
		<>
			<section className="consulting questions">
				<div className="questions__container">
					<div className="questions__wrapper">
						<div className="questions__border">
							<div className="questions__content bricks">
								<div className="bricks__title title">
									<h1 className="title__title">Техническая консультация</h1>
								</div>
								<div className="bricks__body">
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Сделаем расчёт</span> на ваш дом
										</div>
									</div>
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Подберем</span> размер системы
										</div>
									</div>
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Проконсультируем</span> по монтажу
										</div>
									</div>
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Посоветуем</span> как сделать дешевле
										</div>
									</div>
								</div>
								<button type="button" className="bricks__button button">Перезвонить вам?</button>
							</div>
							<div className="questions__image-ibg">
								<img src="@img/main/consulting/tech-consulting.png" alt="Consulting" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default Consulting;