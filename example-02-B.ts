/**
 * @file Example 02 B
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { Option, some, none } from 'fp-ts/lib/Option';
import { Either, left, right } from 'fp-ts/lib/Either';

const f = (x: number): string => (x * 10).toString();

const some_value: Option<number> = some(1);
const none_value: Option<number> = none;

const r_value: Either<Error, number> = right<Error, number>(1);
const l_value: Either<Error, number> =  left<Error, number>(new Error('Failed'));

console.log(`${some_value} -> ${some_value.map(f)}`); // Some<A> 型の値を map すると…
console.log(`${none_value} -> ${none_value.map(f)}`); // None<A> 型の値を map すると…

console.log(`${r_value} -> ${r_value.map(f)}`);       // Right<L, A> 型の値を map すると…
console.log(`${l_value} -> ${l_value.map(f)}`);       // Left<L, A> 型の値を map すると…