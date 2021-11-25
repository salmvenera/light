import header from './modules/header'
import modal from './modules/modal'
import slider from './modules/slider'
import karusel from './modules/karusel'
import accordeon from './modules/accordeon'
import sendForm from './modules/sendForm'
import validation from './modules/validation'


header();
modal();
slider();
karusel();
accordeon();
sendForm({ formId: '[name=form-callback]' });
validation()
