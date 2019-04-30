/**
 * @file Example 04 B
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { Task } from 'fp-ts/lib/Task';

const createSleepTask = (sleep_ms: number, log: string = ''): Task<string> =>
{
    return new Task<string>(
        () => new Promise(resolve =>
            {
                setTimeout(() =>
                {
                    // ログを追記し継続に渡すが、改行を忘れている…
                    resolve(`${log}LOG: The time has passed... ${sleep_ms}`);
                }, sleep_ms);
            })
    );
};

const chained_task = createSleepTask(3000)
    .map(x => x + '\n')                   // map によってログに改行を付与 (継続を渡る値のみを加工)
    .chain(x => createSleepTask(2000, x)) // chain は .then(~) とほぼ同様な挙動を示す
    .map(x => x + '\n')                   // map によってログに改行を付与 (継続を渡る値のみを加工)
    .chain(x => createSleepTask(1000, x)) // chain は .then(~) とほぼ同様な挙動を示す
    .map(x => x + '\n');                  // map によってログに改行を付与 (継続を渡る値のみを加工)

chained_task.run()
    .then(x => console.log(x));