/**
 * @file Example 07
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

const R = require('ramda');

const getReversedNumber1 = R.pipe(R.toString, R.reverse, parseInt);    // R.pipe で3つの関数を「左から右」に合成
const getReversedNumber2 = R.compose(parseInt, R.reverse, R.toString); // R.compose で3つの関数を「右から左」に合成

console.log(getReversedNumber1(1492) === getReversedNumber2(1492));