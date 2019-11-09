import _ from 'lodash';
import j from 'jquery';
import foo from './foo';
import janson from './hehe';
import lala from './xixi';
import bili from './oio';
import xinxin from './xinxin'

console.log(xinxin())

console.log(bili());

console.log(lala());

console.log(janson());

console.log(foo);
console.log(foo());

function component() {
	var element = j('<div></div>');
	// Lodash, currently included via a script, is required for this line to work
	element.html(_.join(['hello', 'webpack'], ' '));
	return element.get(0);
}

document.body.appendChild(component());
