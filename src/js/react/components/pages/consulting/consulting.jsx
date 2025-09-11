import React from "react";
import "./consulting.scss";

const Consulting = () => {
	return (
		<>
			<section className="questions">
				<div className="questions__container">
					<div className="questions__wrapper">
						<div className="questions__border">
							<div className="questions__content question">
								<div className="question__title title">
									<h1 className="title__title">Техническая консультация</h1>
								</div>
								<div className="question__body">
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Сделаем расчёт</span> на ваш дом
										</div>
									</div>
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Подберем</span> размер системы
										</div>
									</div>
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Проконсультируем</span> по монтажу
										</div>
									</div>
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Посоветуем</span> как сделать дешевле
										</div>
									</div>
								</div>
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