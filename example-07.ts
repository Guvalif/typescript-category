/**
 * @file Example 07
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { TaskEither, tryCatch } from 'fp-ts/lib/TaskEither';

const createFailableTask = (log: string, flag: boolean = true): TaskEither<Error, string> =>
{
    return tryCatch<Error, string>(
        () => new Promise((resolve, reject) =>
            {
                if (flag)
                {
                    resolve(`${log}${(log === '')? '' : '\n'}Called!`);
                }
                else
                {
                    reject(new Error(''));
                }
            }),
        (e: Error) => e
    )
};

// ↓第2引数 flag = false を、*1, *2, *3のうち任意の箇所に挿入
const chained_task = createFailableTask('') // *1
    .chain(x => createFailableTask(x))      // *2
    .chain(x => createFailableTask(x));     // *3

chained_task.run().then(x => console.log(x.value));