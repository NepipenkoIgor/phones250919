import { BaseComponent } from '../../shared/components/base/base.component';
import debounce from 'lodash/debounce';

export class FilterComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._render();
    const debouncedSearch = debounce(e => {
      console.log('search');
      this.emit('search', e.delegatedTarget.value);
    }, 300);
    this.on('input', '.search', debouncedSearch);
    this.on('change', '.sort', e => {
      this.emit('change-order', e.delegatedTarget.value);
    });
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
        `;
  }
}
