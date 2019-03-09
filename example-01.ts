/**
 * @file Example 01
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { array } from 'fp-ts/lib/Array';

const addClass = (class_name: string) =>
                 ($e: string): string => `${$e}.${class_name}`;

const find     = (child_name: string) =>
                 ($e: string): Array<string> => [ `${$e} > ${child_name}1`, `${$e} > ${child_name}2` ];

const $es0 = [ 'li1', 'li2', 'li3', 'li4', 'li5' ];
const $es1 = array.map($es0, addClass('highlight'));
const $es2 = array.chain($es1, find('span'));

console.log($es2);