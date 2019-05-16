/**
 * @file Example 08
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

const R = require('ramda');

const f = n => n > 50 ? false : [ n * ((-1) ** (n % 2)), n + 5 ];

const churrascify = R.pipe(
    R.unfold(f),            // n <= 50 の間、[ n, -(n + 5), n + 10, -(n + 15), ... ]
    R.filter(R.gt(0)),      // ↑の配列から、n < 0 である要素だけを抽出
    R.map(R.toString),      // ↑の配列の全ての要素に、R.toString 関数 (文字列化) を適用
    R.reduce(R.concat, ''), // ↑の配列の全ての要素を、R.concat 関数 (連結) で集約
    R.concat(R.__, '-')     // ↑の結果 (1つの文字列) の、末尾に '-' を連結
);

console.log(churrascify(5));