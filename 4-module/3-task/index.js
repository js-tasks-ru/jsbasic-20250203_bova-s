function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    if (row.cells[3].hasAttribute("data-available")) {
      if (row.cells[3].dataset.available == "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.hidden = true;
    }
    if (row.cells[2].innerText === "m") {
      row.classList.add("male");
    } else if (row.cells[2].innerText === "f") {
      row.classList.add("female");
    }
    if (row.cells[1].innerText < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
