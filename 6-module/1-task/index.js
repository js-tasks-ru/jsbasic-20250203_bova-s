/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.#createTable(rows);
  }

  #createTable(rows) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    thead.innerHTML = `<tr>
                        <th>Имя</th>
                        <th>Возраст</th>
                        <th>Зарплата</th>
                        <th>Город</th>
                        <th></th>
                      </tr>`;
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    rows.forEach((row) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.name}</td>
                      <td>${row.age}</td>
                      <td>${row.salary}</td>
                      <td>${row.city}</td>
                      <td><button onclick="this.closest('tr').remove();">X</button></td>`;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
  }
}
