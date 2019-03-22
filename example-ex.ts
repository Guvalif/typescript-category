/**
 * @file Example Extra
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

import { Task, task } from 'fp-ts/lib/Task';

// Promise<A> 版の実装
// ============================================================================
const of    = <X>(x: X) => Promise.resolve(x);
const chain = <X, Y>(p: Promise<X>, f: (x: X) => Promise<Y>) => p.then(f);

const a: Promise<number> = of(1);
const g: (x: Promise<number>) => Promise<number> = x => x.then(y => y);

// of(a) の型は Promise<Promise<number>>
// g の型は (x: Promise<number>) => Promise<number>
// 今、X を Promise<number> として考えると、chain の引数 p は Promise<Promise<number>> 型の値ならOK
// 同様に、chain の引数 f は、Promise<number> を受け取り Promise<number> を返す関数ならOK
// これより、chain(of(a), g) は型の上では正しいコードだが、実行すると…
chain(of(a), g)
    .then(x => console.log('By Promise >>', x))
    .catch((e: Error) => console.log(`By Promise >> ${e.name}(${e.message})`));

// Task<A> 版の実装
// ============================================================================
const b: Task<number>                      = task.of(1);
const h: (x: Task<number>) => Task<number> = x => x.map(y => y);

task.chain(task.of(b), h).run()
    .then(x => console.log('By Task >>', x));