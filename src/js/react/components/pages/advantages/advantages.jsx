
import React from 'react';
import './advantages.scss';

const Advantages = () => {
	return (
		<>
			<section className="advantages">
				<div className="advantages__title title">
					<h1 className="advantages__text title__text">Преимущества</h1>
				</div>
				<div className="advantages__control control">
					<div className="control__pagination swiper-pagination"></div>
					<div className="control__icons">
						<img className='control__icon' src='@img/main/advantage/icon-bar/bar-item-1-selected.png' alt='Иконка симметричного жолоба' />
						<img className='control__icon' src="@img/main/advantage/icon-bar/bar-item-2-selected.png" alt='Иконка усиленный кронштейн желоба' />
						<img className='control__icon' src='@img/main/advantage/icon-bar/bar-item-3-selected.png' alt='Иконка защелка фиксатор с креплениями' />
						<img className='control__icon' src='@img/main/advantage/icon-bar/bar-item-4-selected.png' alt='Иконка убодный регулируемый угол' />
						<img className='control__icon' src='@img/main/advantage/icon-bar/bar-item-5-selected.png' alt='Иконка чесная гарантия' />
					</div>
				</div>
				<div className="advantages__slider swiper">
					<div className="advantages__wrapper swiper-wrapper">
						<article className="advantages__item item swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-1/adventage-item-1.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-1/adventage-item-1.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__text'>Симметричный желоб</h2>
								</div>
								<p className="item__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
							</div>
						</article>
						<article className="advantages__item item swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-2/adventage-item-2.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-2/adventage-item-2.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__text'>Усиленный держатель желоба</h2>
								</div>
								<p className="item__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
							</div>
						</article>
						<article className="advantages__item item swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-3/adventage-item-3.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-3/adventage-item-3.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__text'>Симметричный желоб</h2>
								</div>
								<p className="item__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
							</div>
						</article>
						<article className="advantages__item item swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-4/adventage-item-4.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-4/adventage-item-4.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__text'>Симметричный желоб</h2>
								</div>
								<p className="item__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
							</div>
						</article>
						<article className="advantages__item item swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-4/adventage-item-4.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-4/adventage-item-4.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__text'>Симметричный желоб</h2>
								</div>
								<p className="item__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
							</div>
						</article>
					</div>
				</div>
			</section>
		</>
	)
};

export default Advantages;