import './main.css';
import './sass.scss';
import logo from '../public/1.png'


// require('./main.css');
// require('./sass.scss');
// const logo = require('../public/1.png');

const dom = document.createElement('span');
document.body.appendChild(dom);

const img = new Image();
img.src = logo

console.log(document.getElementById('imgBox'));
console.log(img);
document.getElementById('imgBox').appendChild(img)

class Author {
  name = 'ITEM'
  age = 18
  email = 'lxp_work@163.com'

  info =  () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email
    }
  }
}


// export default Author;

const a = 'Hello webpack';
console.log(a);
export default Author;

// module.exports = a;
