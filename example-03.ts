/**
 * @file Example 03
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

type NormalFunction<A, B>           = (a: A)                 => B;                    // 通常の関数の型
type StateFunction<S, A, B>         = (a_with_state: [A, S]) => [B, S];               // 状態の付与
type SpreadedStateFunction<S, A, B> = (a: A, state: S)       => [B, S];               // 状態つき変数の展開
type CurriedStateFunction<S, A, B>  = (a: A)                 => (state: S) => [B, S]; // カリー化
//                                                              ^^^^^^^^^^^^^^^^^^^^  // 状態型として定義
                                                                type State<S, B>      = (state: S) => [B, S]; 
type StateComputation<S, A, B>      = (a: A)                 => State<S, B>;          // 状態つき計算