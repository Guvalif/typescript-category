/**
 * @file Example 02
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { Option, some, none } from 'fp-ts/lib/Option';

const computation          = (x: number): string         => (x * 10).toString();
const contexed_computation = (x: number): Option<string> => some((x * 10).toString());

const some_value: Option<number> = some(1);
const none_value: Option<number> = none;

console.log(some_value.map(computation));
console.log(none_value.map(computation));

console.log(some_value.chain(contexed_computation));
console.log(none_value.chain(contexed_computation));