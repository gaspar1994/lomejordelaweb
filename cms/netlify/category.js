import { getMixins } from './mixins'

class Category {
  constructor(axios) {
    this.slug = 'Categorias'
    this.slugPlural = 'Categorias'
    this.pretty = 'Categorias'
    this.plural = 'Categorias'
    this.axios = axios
  }
}

// Mixins
Object.assign(Category.prototype, getMixins)
export default Category
