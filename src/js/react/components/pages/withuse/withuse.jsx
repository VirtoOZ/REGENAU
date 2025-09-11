import React from 'react';
import './withuse.scss';

const Withuse = () => {
	return (
		<>
			<section className="withuse">
				<div className="withuse__wrapper">
					<div className="withuse__container">
						<div className="withuse__contant">
							<div className="withuse__title title title-line">
								<h1 className="title__title">Сотрудничество</h1>
								<p className="title__text">Когда дело доходит до долговечности и эстетика вашего дома, важно подобрать материалы, которые идеально сочетаются как по фунциональности так и по дизайну</p>
								<p className="title__text"><span>Водосточная система <a>REGENAU</a></span> в сочетании с <span>софитом айДахо</span>создает гармоничный дуэт, который не только защищает ваш дом от погодных невзгод, но и добавляет ему законченный вид.</p>
								<p className="title__text">Оба материала доступны в трёх популярных цветах: <span>белый, коричневый и графит.</span> А покупая вместе можно экономить на доставке.</p>
							</div>
							<button type='button' className='withuse__button button' aria-description='button to АйДахо'>В каталог АйДахо</button>
						</div>
						<div className="withuse__image-ibg">
							<img src="@img/main/portfolio/image-2.png" alt="image withuse" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
export default Withuse;