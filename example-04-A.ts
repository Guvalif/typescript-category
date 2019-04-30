/**
 * @file Example 04 A
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { task } from 'fp-ts/lib/Task';
import { taskEither } from 'fp-ts/lib/TaskEither';

const pure_task       = task.of(1);
const pure_taskeither = taskEither.of<Error, number>(1);

pure_task.run()
    .then(x => console.log(x)); // of によってどのような値が継続に渡されるか？

pure_taskeither.run()
    .then(x => console.log(x)); // of によって Left<L, A>, Right<L, A> どちらの値が継続に渡されるか？