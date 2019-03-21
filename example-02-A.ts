/**
 * @file Example 02 A
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { option } from 'fp-ts/lib/Option';
import { either } from 'fp-ts/lib/Either';

const some_value  = option.of<number>(1);
const right_value = either.of<Error, number>(1);

console.log(`${some_value._tag}  >> ${some_value}`);  // of によって None<A>, Some<A> どちらの値ができるか？
console.log(`${right_value._tag} >> ${right_value}`); // of によって Left<L, A>, Right<L, A> どちらの値ができるか？