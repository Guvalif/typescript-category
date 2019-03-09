/*
    Code Snippet 05
*/

$('#second')               // id ::= 'second' であるDOM要素は存在しないが...
    .addClass('highlight') // 例外を吐くことなく...
    .text('Highlighted!'); // メソッドチェーンができる