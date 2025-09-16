import React from "react";

const Question = () => {
	return (
		<>
			<section className="questions">
				<div className="questions__container">
					<div className="questions__wrapper">
						<div className="questions__border">
							<div className="questions__content bricks">
								<div className="bricks__title title">
									<h1 className="title__title">Остались вопросы?</h1>
								</div>
								<div className="bricks__body">
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Поможем</span> определиться с выбором
										</div>
									</div>
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Подскажем</span> где поближе купить
										</div>
									</div>
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Подберём</span> надёжного продавца
										</div>
									</div>
									<div className="bricks__item">
										<div className="bricks__icon">
											<img src="@img/icons/good.svg" alt="Icon good" />
										</div>
										<div className="bricks__text"><span>Дадим ответы</span> на все вопросы
										</div>
									</div>
								</div>
								<button type="button" className="bricks__button button">Перезвонить вам?</button>
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