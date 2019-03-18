/*
    Code Snippet 08
*/

$('#first')                                    // jQuery記法の起点
    .addClass('highlight')                     // ↓
    .next()                                    // この時点で状態つき計算
    .text('Second Element!')                   // ↓
    .find('span')                              // この時点で失敗可能性計算
        .text('Child Element!')                // ↓
        .end()                                 // ↓
    .parent()                                  // ↓
    .find('li')                                // この時点で非決定性計算
        .click(() => console.log('Clicked!')); // 一連の処理は結局なにを意味しているか？