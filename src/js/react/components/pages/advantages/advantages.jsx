
import React from 'react';

const Advantages = () => {
	return (
		<>
			<section className="advantages">
				<div className="advantages__title title">
					<h1 className="advantages__text title__title">Преимущества</h1>
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
						<article className="advantages__item item item_right swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-1/adventage-item-1.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-1/adventage-item-1.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__title'>Симметричный желоб</h2>
									<p className="title__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
								</div>
							</div>
						</article>
						<article className="advantages__item item swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-2/adventage-item-2.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image item__image-left">
								<img src="@img/main/advantage/item-2/adventage-item-2.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__title'>Усиленный держатель желоба</h2>
									<p className="title__text"><span>Держатель желоба</span> в водостоке <span>это фундамент <a href="#">надежности.</a></span> по этому держа это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
								</div>
							</div>
						</article>
						<article className="advantages__item item item_right swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/item-3/adventage-item-3.png" alt="Симметричный жолоб" />
							</div>
							<div className="item__image">
								<img src="@img/main/advantage/item-3/adventage-item-3.png" alt="Симметричный жолоб" />
							</div>
							<div data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" className="item__contant">
								<div className="item__title title">
									<h2 className='title__title'>Симметричный желоб</h2>
									<p className="title__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
								</div>
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
									<h2 className='title__title'>Симметричный желоб</h2>
									<p className="title__text">Желоб <span>имеет одинаковую <a href="#">геометрию</a> с обоих сторон,</span> это позволяет безошибочно совершить монтаж системы без профессиональных навыков.</p>
								</div>
							</div>
						</article>
						<article className="advantages__item item item_warranty item_right swiper-slide">
							<div className="item__image-back">
								<img src="@img/main/advantage/warranty/iso.png" alt="ISO" />
							</div>
							<div className="item__contant" data-swiper-parallax-opacity="0" data-swiper-parallax-x="-150%" >
								<div className="item__title title">
									<h2 className='title__title'>Чесная гарантия</h2>
									<p className="title__text"><span>Качетво водостока  <a href="#">Regenau</a> подтверждена десятилетней</span> чесной <span>гарантией</span>без лишней бюрократии: если что-то случилось с REGENAU, мы обязательно это исправим за свой счет.</p>
								</div>
							</div>
							<div className="item__mark mark">
								<div className="mark__logo">
									<img src="@img/main/advantage/warranty/iso.png" alt="Логотип ISO" />
								</div>
								<div className="mark__logo">
									<img src="@img/main/advantage/warranty/tuv.png" alt="Логотип TUV" />
								</div>
								<div className="mark__logo">
									<img src="@img/main/advantage/warranty/iaf.png" alt="Логотип AIF" />
								</div>
								<div className="mark__logo">
									<img src="@img/main/advantage/warranty/dakks.png" alt="Логотип DAkks" />
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</>
	)
};

export default Advantages;