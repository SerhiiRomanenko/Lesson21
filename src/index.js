'use strict';

const START_FROM = 1;
const MAX_NUM_OF_ROWS = 10;

//------------------- 1st exercise

function generateList(array) {
    const $list = document.createElement('ul');

    for (const elem of array) {
        if (!Array.isArray(elem)) {
            const $li = document.createElement('li');
            $li.innerHTML = elem;
            $list.append($li);
        } else {
            $list.append(generateList(elem));
        }
    }
    document.body.append($list);
    return $list;
}
generateList([START_FROM, MAX_NUM_OF_ROWS]);
// generateList([1, 2, [2.1, 2.2, [2.21], 2.3], 3]);

//------------------- 2nd exercise

let $table = '<table>';
let counter = 1;

for (let i = START_FROM; i <= MAX_NUM_OF_ROWS; i++) {
    $table += '<tr>';
    for (let j = 1; j <= MAX_NUM_OF_ROWS; j++) {
        $table += `<td>${counter++}</td>`;
    }
    $table += '</tr>';
}

$table += '</table>';

document.querySelector('body').innerHTML += $table;
