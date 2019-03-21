/**
 * @file Example 01 B
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { array } from 'fp-ts/lib/Array';

const addClass = (class_name: string) =>
                 ($e: string): string => `${$e}.${class_name}`;

const $es0 = [ 'li1', 'li2', 'li3', 'li4', 'li5' ];

// map を使わない場合の Array<string> → Array<string> の変換
const $es1: Array<string> = [];

for (const $e of $es0)
{
    $es1.push(addClass('highlight')($e));
}

// map を使う場合の Array<string> → Array<string> の変換
const $es2 = array.map($es0, addClass('highlight'));

// 2つの方法が等しいことの簡易証明
console.log($es1);
console.log($es2);

console.log( JSON.stringify($es1) === JSON.stringify($es2) );