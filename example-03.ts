/**
 * @file Example 03
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { Either, left, right } from 'fp-ts/lib/Either';

const computation = (x: number): string => (x * 10).toString();

const r_value: Either<Error, number> = right<Error, number>(1);
const l_value: Either<Error, number> =  left<Error, number>(new Error('Failed'));

console.log(r_value.map(computation));
console.log(l_value.map(computation));