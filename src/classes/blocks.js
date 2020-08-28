import {row, col} from '../utils'

class Block {
   constructor (type, value, options) {
      this.type = type;
      this.value = value;
      this.options = options;
   }
      toHTML(){
         throw new Error ('Метод toHTML должен быть реализован!')
      };
}

export class TitleBlock extends Block {
   constructor (value, options) {
      super ('title', value, options)
   }

   toHTML() {
      const {tag='h1', styles} = this.options;
      return  row (col(`
         <${tag}>${this.value}</${tag}>
   `),styles)
   }
}

export class TextBlock extends Block {
   constructor (value, options) {
      super ('text', value, options)
   }

   toHTML() {
      return row(col(`
         <p style='margin-bottom: 0'>${this.value}</p>
   `), this.options.styles)
   }
}

export class TextColumns extends Block {
   constructor (value, options) {
      super ('textColumns', value, options)
   }

   toHTML() {
      const html = this.value.map(item => col(item))
      return row(html.join(''), this.options.styles)
   }
}

export class Footer extends Block {
   constructor (value, options) {
      super ('footer', value, options)
   }

   toHTML() {
      return row(col(`
         <p style='margin-bottom: 0'>${this.value}</p>
   `), this.options.styles)
   }
}



export class Image extends Block {
   constructor (value, options) {
      super ('image', value, options)
   }

   toHTML() {
      return row(col(`
      <img src=${this.value} alt="img" style="${this.options.imgstyles}" >
      `), this.options.styles)
   }
}
