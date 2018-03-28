let x = 15;
let y = x;
let table = `<table border="1" cellpadding="3" style="text-align:center;"><tr>`;
for (let i = 0; i <= x; i++) {
    table += `<th>${i}</th>`;
}
table += `</tr>`;
let onNum = 0

const tableCol = (x, y) => {
    let col = `<tr><th scope="row">${onNum}</th>`
    for (let i = 0; i < y; i++) {
        col += `<td>${x * i}</td>`
    }
    col += `</tr>`
    onNum++;
    return col;
}
for (let i = 0; i <= y; i++) {
    let row = tableCol(i, y);
    table += row;
}

table += `</table>`
document.write(table);
