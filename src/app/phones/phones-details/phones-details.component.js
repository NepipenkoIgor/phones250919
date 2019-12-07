import {BaseComponent} from '../../shared/components/base/base.component';
import template from './phones-details.component.hbs';
export class PhonesDetailsComponent extends BaseComponent {

    constructor({element}) {
        super({element});
        this
            .on('click', '.phone-thumb', ({delegatedTarget: {src}}) => this._mainImage.src = src)
            .on('click', '.back', (e) => this.emit('back'))
            .on('click', '.add', (e) => this.emit('add-to-cart', this._phone.id))
    }


    show(phone) {
        this._phone = phone;
        this._render();
        this._mainImage = this._element.querySelector('img.phone');
        [this._mainImage.src] = phone.images; // this._mainImage.src = phone.images[0]
        super.show();
    }

    _render() {
        this._element.innerHTML = template({phone: this._phone})

    }
}
