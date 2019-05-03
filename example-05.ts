/**
 * @file Example 05
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

// 「合成射の分配」が成り立つことの確認
// ============================================================================
const f   = (x: number): string  => x.toString();
const g   = (y: string): boolean => y.length % 2 === 0;
const g_f = (x: number): boolean => g(f(x));

const xs  = [ 0, 1, 2, 3, 4 ];
const zs1 = xs.map(f).map(g);
const zs2 = xs.map(g_f);

console.log( JSON.stringify(zs1) === JSON.stringify(zs2) );

// 「恒等射の保存」が成り立つことの確認
// ============================================================================
const id_N  = (x: number): number => x;
const id_AN = (xs: Array<number>): Array<number> => xs;

const as  = [ 0, 1, 2, 3, 4 ];
const as1 = as.map(id_N);
const as2 = id_AN(as);

console.log( JSON.stringify(as1) === JSON.stringify(as2) );