/**
 * @file Example 06
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

export {}; // Fix for namespace collision on VSCode

const f = (x: number): string  => x.toString();
const g = (y: string): boolean => y.length % 2 === 0;

const length_A = (xs: Array<number>): number  => xs.length; // 自然変換を定める射
const length_B = (ys: Array<string>): number  => ys.length; // 自然変換を定める射
const length_C = (zs: Array<boolean>): number => zs.length; // 自然変換を定める射

const id_n = (x: number): number => x;

const xs = [ 0, 1, 2, 3, 4 ];
const ys = xs.map(f);
const zs = xs.map(f).map(g);

console.log( id_n(length_A(xs)) === length_B(ys) );
console.log( id_n(length_B(ys)) === length_C(zs) );