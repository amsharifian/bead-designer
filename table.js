
function savePDF() {
	window.print();
}
function CellInit() {
	var table = document.getElementById("shape");
	if (table != null) {
		for (var i = 0; i < table.rows.length; i++) {
			for (var j = 0; j < table.rows[i].cells.length; j++)
				table.rows[i].cells[j].onclick = function () {
					tableClick(this);
				};
		}

		var numcols = table.rows[0].cells.length;
		var numrows = table.rows.length;

		let table_clicked_new = new Array(numrows);
		for (var i = 0; i < numrows; i++) {
			table_clicked_new[i] = new Array(numcols).fill(0);
		}

		for (var i = 0; i < table_clicked.length; i++) {
			var clicked_row = table_clicked[i];
			for (var j = 0; j < clicked_row.length; j++) {
				table_clicked_new[i][j] = clicked_row[j];
			}
		}
		table_clicked = table_clicked_new;

	}

	function tableClick(tableCell, i, j) {
		let row = tableCell.parentElement.rowIndex;
		let col = tableCell.cellIndex;

		var design_checkbox = document.getElementById("design");

		if (design_checkbox.checked) {
			let flag = table_clicked[row][col];
			if (flag == 0) {
				table_clicked[row][col] = 1;
				tableCell.style.backgroundColor = "silver";
			} else {
				table_clicked[row][col] = 0;
				tableCell.style.backgroundColor = '';
			}
		} else {
			let color = document.getElementById("favcolor").value;

			let flag = table_clicked[row][col];
			if (flag == 0) {
				table_clicked[row][col] = 1;
				tableCell.style.backgroundColor = color;
			}
			else {
				table_clicked[row][col] = 0;
				tableCell.style.backgroundColor = '';
			}
		}

	}
}

function AddRow() {
	var table = document.getElementById("shape");
	var numcols = table.rows[0].cells.length;
	var row = table.insertRow(table.rows.length);

	for (let i = 0; i < numcols; i++) {
		var cell = row.insertCell(i);
		cell.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
	}

	CellInit();
}

function DelRow() {
	var table = document.getElementById("shape");
	table.rows[0].cells.length;
	table.deleteRow(table.rows.length - 1);
	CellInit();
}

function AddColumn() {
	var table = document.getElementById("shape");
	var numrows = table.rows.length;

	for (let i = 0; i < numrows; i++) {
		var row = table.rows[i];
		var numcols = row.cells.length;

		var cell = row.insertCell(numcols);
		cell.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
	}
	CellInit();
}

function DelColumn() {
	var table = document.getElementById("shape");
	var numrows = table.rows.length;

	for (let i = 0; i < numrows; i++) {
		var row = table.rows[i];
		var numcols = row.cells.length;

		row.deleteCell(numcols - 1);
	}
	CellInit();
}

function checkDesign() {
	var design_checkbox = document.getElementById("design");
	var select_label = document.getElementById("selectlabel");
	var select_color = document.getElementById("favcolor");

	if (design_checkbox.checked) {
		select_label.style.opacity = 0.5;
		select_color.disabled = true;
	} else {
		select_label.style.opacity = 1;
		select_color.disabled = false;
	}
}
