/**
 * @file Example 01
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { array } from 'fp-ts/lib/Array';

const makeFiveElements = (x: number): Array<number> => [ x, x + 1, x + 2, x + 3, x + 4 ];
const bePlusMinus      = (x: number): Array<number> => [ x, -x ];

const xs0 = array.chain([0], makeFiveElements);
const xs1 = array.chain(xs0, makeFiveElements);
const xs2 = array.chain(xs1, bePlusMinus);

console.log(xs2);