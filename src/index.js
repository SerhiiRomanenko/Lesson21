'use strict';

const START_FROM = 0;
const MAX_NUM_OF_ROWS = 10;

//------------------- 1st exercise

function generateList(array) {
    let $list = '<ul>';
    for (let i = START_FROM; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            $list += '<ul>';
            for (let j = START_FROM; j < array[i].length; j++) {
                $list += `<li>${array[i][j]}</li>`;
            }
            $list += '</ul>';
        } else {
            $list += `<li>${array[i]}</li>`;
        }
    }
    $list += '</ul>';
    return (document.querySelector('section').innerHTML += $list);
}
generateList([MAX_NUM_OF_ROWS]);
// generateList([1, 2, [2.1, 2.2, 2.3], 3]);

//------------------- 2nd exercise

let $table = '<table>';
let counter = 1;

for (let i = 1; i <= MAX_NUM_OF_ROWS; i++) {
    $table += '<tr>';
    for (let j = 1; j <= MAX_NUM_OF_ROWS; j++) {
        $table += `<td>${counter++}</td>`;
    }
    $table += '</tr>';
}

$table += '</table>';

document.querySelector('body').innerHTML += $table;
