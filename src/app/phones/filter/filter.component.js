import {BaseComponent} from '../../shared/components/base/base.component';


export class FilterComponent extends BaseComponent {
    constructor({element}) {
        super({element});
        this._render();
        this.on('input', '.search', (e)=>{
            this.emit('search', e.delegatedTarget.value)
        })
        this.on('change', '.sort', (e)=>{
            this.emit('change-order', e.delegatedTarget.value)
        })
    }

    _render() {
        this._element.innerHTML = `
          <p>
            Search:
            <input class="search">
          </p>
          <p>
            Sort by:
            <select class="sort">
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
          </p>
        `
    }
}
