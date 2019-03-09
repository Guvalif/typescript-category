/*
    Code Snippet 07
*/

const asyncSleep = sleep_ms =>
{
    let defer = $.Deferred();

    setTimeout(() =>
    {
        console.log('The time has passed...', sleep_ms);
        defer.resolve();
    }, sleep_ms);

    return defer.promise();
};

asyncSleep(3000)                   // 実行して3秒後に、'The time has passed... 3000' と表示され…
    .then(() => asyncSleep(2000))  // さらに2秒後に、'The time has passed... 2000' と表示され…
    .then(() => asyncSleep(1000)); // さらに1秒後に、'The time has passed... 1000' と表示される