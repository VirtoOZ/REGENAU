import React from 'react';
import './about.scss'

const About = () => {
	return (
		<section className="about">
			<div className="about__container">
				<div className="about__contant contant-about">
					<div className="content-about__logo">
						<img src="@img/headers/regenau-logo.png" alt="Логотип" />
					</div>
					<h1 className="content-about__title">это водосточная система, которая является результатом опыта</h1>
					<p className="content-about__text">Стремление к <span>совершенству австрийских инженеров.</span>В ней объединено все наилучшее: первичное сырье, превосходное качество, герметичность и элегантный минимализм по доступной цене.</p>
					<p className="content-about__text"><a href="#">Regenau</a> создана для тех, кто <span>ценит функциональность и хочет, что бы их дом был действительно <span>защищен</span> от непогоды.
					</span></p>
				</div>
				<div className="about__media">
					<img src="@img/main/kollage.png" alt="Коллаж" />
				</div>
			</div>
		</section>
	)
};
export default About;