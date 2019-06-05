/**
 * @file Example Functional Programming on JavaScript
 * @author Kazuyuki TAKASE <takase@plen.jp>
 * @copyright PLEN Project Company Inc, and all authors
 * @license The MIT License (See also : http://opensource.org/licenses/mit-license.php)
 */

const R = require('ramda');
const Maybe = require('folktale/maybe');
const Result = require('folktale/result');


// Constants / Functions Definition
// ============================================================================
const CARDS = {
    'A'  : [1, 11],
    'N2' : [2],
    'N3' : [3],
    'N4' : [4],
    'N5' : [5],
    'N6' : [6],
    'N7' : [7],
    'N8' : [8],
    'N9' : [9],
    'N10': [10],
    'J'  : [10],
    'Q'  : [10],
    'K'  : [10]
};

const SPADE_SUIT   = R.keys(CARDS);
const HEART_SUIT   = R.keys(CARDS);
const DIAMOND_SUIT = R.keys(CARDS);
const CLUB_SUIT    = R.keys(CARDS);
const SUIT         = [ ...SPADE_SUIT, ...HEART_SUIT, ...DIAMOND_SUIT, ...CLUB_SUIT ];

// == toPoint :: string -> [number]
const toPoint = R.prop(R.__, CARDS);

// == suitToPoints :: [string] -> [[number]]
const suitToPoints = R.map(toPoint);

// == addA2 :: [number] -> [number] -> [number]
const addA2 = R.lift(R.add);

// == getScores :: [[number]] -> [number]
const getScores = R.reduce(addA2, [0]);

// == getValidScore :: [number] -> Maybe<number>
const getValidScore = R.pipe(
    R.filter(R.gte(21)),
    R.ifElse(
        R.isEmpty,
        R.always(Maybe.Nothing()),
        R.o(Maybe.Just, R.reduce(R.max, 0))
    )
);

// == getShuffledSuit :: [string] -> [string] !impure
const getShuffledSuit = (suit) =>
{
    let shuffled_suit = R.clone(suit);

    for (let i = suit.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));

        [ shuffled_suit[i], shuffled_suit[j] ] = [ shuffled_suit[j], shuffled_suit[i] ];
    }

    return shuffled_suit;
};


// Application Entry Point
// ============================================================================
const SHUFFLED_SUIT = getShuffledSuit(SUIT);

// == main :: number -> ()
const main = (hand) =>
{
    const score = R.pipe(
        R.take(hand),
        suitToPoints,
        getScores,
        getValidScore
    )(SHUFFLED_SUIT);

    const result = score.fold(
        () => Result.Error('Bust!'),
        x  => (x === 21) ? Result.Error('Black Jack!') : Result.Ok(`Score: ${x}`)
    );

    result.fold(
        x => { console.log(x); process.exit(); },
        x => { console.log(x); main(hand + 1); }
    );
};

main(2);