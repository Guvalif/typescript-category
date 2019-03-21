/**
 * @file Example 01 C
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { array } from 'fp-ts/lib/Array';

const find = (child_name: string) =>
             ($e: string): Array<string> => [ `${$e} > ${child_name}1`, `${$e} > ${child_name}2` ];

const $es0 = [ 'li1', 'li2', 'li3', 'li4', 'li5' ];

// map を使う場合の string → Array<string> による変換
const $es1 = array.map($es0, find('span'));

// chain を使う場合の string → Array<string> による変換
const $es2 = array.chain($es0, find('span'));

// 2つの方法の違いを表示
console.log($es1);
console.log($es2);