import React from "react";

const Question = () => {
	return (
		<>
			<section className="questions">
				<div className="questions__container">
					<div className="questions__wrapper">
						<div className="questions__border">
							<div className="questions__content question">
								<div className="question__title title">
									<h1 className="title__title">Остались вопросы?</h1>
								</div>
								<div className="question__body">
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Поможем</span> определиться с выбором
										</div>
									</div>
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Подскажем</span> где поближе купить
										</div>
									</div>
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Подберём</span> надёжного продавца
										</div>
									</div>
									<div className="question__item">
										<div className="question__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="question__text"><span>Дадим ответы</span> на все вопросы
										</div>
									</div>
								</div>
							</div>
							<div className="questions__image-ibg">
								<img src="@img/main/question/questions.png" alt="Questions" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default Question;