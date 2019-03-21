/**
 * @file Example 01 A
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { array } from 'fp-ts/lib/Array';

const xs = array.of(1); // number → Array<number> を行う of

console.log(xs);