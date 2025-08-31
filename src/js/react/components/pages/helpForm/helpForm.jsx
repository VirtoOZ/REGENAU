import React from 'react';
import './helpForm.scss'

const HelpForm = () => {
	return (
		<>
			<section className="help">
				<div className="help__container">
					<div className="help__bg-image">
						<img src="@img/main/help-form/bg.png" alt="фоновая картинка формы" />
					</div>
					<div className='help__image'>
						<img className='help__image-1' src="@img/main/help-form/notebook.png" alt="notebook" />
						{/* <img className='help__image-2' src="@img/main/help-form/notebook.png" alt="notebook" /> */}
					</div><div className="help__body">
						<form className="help__form help-form" action="" method="post">
							<div className="help-form__title title">Помочь в выборе и расчете материалов</div>
							<div className="help-form__body">
								<input className="help-form__name" placeholder='Имя' autoComplete="off" type="text" name="form[]" data-error="Ошибка" data-value="" />
								<input className="help-form__tel" placeholder='Телефон' autoComplete="off" type="tel" name="form[]" data-value="Телефон" />
								<button className="help-form__button" type="submit">Отправить</button>
							</div>
						</form>
					</div>
				</div>
				<div className="help-bottom__container">
					<div className="help-bottom__image help__image"></div>
					<div className="help-bottom__body help__body">
						<div className="help-bottom__info info">
							<div className="info__icon">
								<img src="@img/icons/mail.svg" alt="Телефон" />
							</div>
							<div className="info__body info__body-main">
								<div className="info__label">Электронная почта</div>
								<a href="mailto:mail@gmail.com" className="info__mail">mail@gmail.com</a>
							</div>
						</div>
						<div className="help-bottom__info info">
							<div className="info__icon">
								<img src="@img/icons/phone.svg" alt="Телефон" />
							</div>
							<div className="info__body info__body-main">
								<div className="info__label">Консультация</div>
								<a href="tel:+01234567890" className="info__tel">+0 (123) 456-78-90</a>
							</div>
						</div>
					</div >
				</div>
			</section>
		</>
	)
}
export default HelpForm;