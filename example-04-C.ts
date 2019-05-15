/**
 * @file Example 04 C
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { TaskEither, tryCatch, taskEither } from 'fp-ts/lib/TaskEither';

const createFailableTask = (flag: boolean): TaskEither<string, string> =>
{
    return tryCatch<string, string>(
        () => new Promise((resolve, reject) =>
            {
                (flag)? resolve('Success') : reject('Failure');
            }),
        (e: string) => e
    )
};

const failable_task1 = createFailableTask(true)            // 成功する継続，失敗する継続を引数で変更
    .map(x => x + '!!!');                                  // map はどのような場合に行われるか？

const failable_task2 = createFailableTask(true)            // 成功する継続，失敗する継続を引数で変更
    .chain(x => taskEither.of<string, string>(x + '!!!')); // chain はどのような場合に行われるか？

failable_task1.run()
    .then(x => console.log(x));

failable_task2.run()
    .then(x => console.log(x));