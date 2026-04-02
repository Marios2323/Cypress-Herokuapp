class tablesPage {
    element = {
        table1: () => cy.get("#table1"),
        table2: () => cy.get("#table2")
    }

    visit() {
        cy.visit('/tables');
    }

    getTable(tableId) { 
        return this.element
        [tableId]();
    }

    getTableRowCount(tableId) {
        return this.element[tableId]()
            .find('tbody').find('tr');
    }

    getTableColumnCount(tableId) { 
        return this.element
            [tableId]().find('thead')
            .find('tr').find('th')
    }

    getTableCell(tableId, row, columnIndex) {
        return this.element
            [tableId]().find('tbody tr')
            .eq(row).find('td').eq(columnIndex);
    }

    getButtonsInTable(tableId, row) {
        return this.element
            [tableId]().find('tbody').find('tr')
            .eq(row).find('a')
    }

    clickEditButton(anyTable, row) {
        return this.element
        [anyTable]().find('tbody tr') // Use [] notation when the 
            // key is dynamic (table1 or table2)
            .eq(row).find('a').eq(0).click();
    }

    clickColumnHeader(anyTable, columnName) {
        return this.element
        [anyTable]().find('thead').find('th')
            .contains(columnName).click();
    }

    isSorted(data) {
        if (typeof data[0] === 'string' && data[0].includes('$')) {
            const parsed = data.map(item => parseInt(item.replace('$', '').replace(',', '')));
            const sorted = [...parsed].sort((a, b) => a - b);
            return JSON.stringify(parsed) === JSON.stringify(sorted);
        } else {
            const sorted = [...data].sort();
            return JSON.stringify(data) === JSON.stringify(sorted);
        }
    }

    getDataFromTable(anyTable) {
        return this.element[anyTable]().then($table => {
            const rows = $table[0].querySelectorAll('tbody tr');
            const data = Array.from(rows).map(tr => {
                return {
                    lastName: tr.children[0].textContent.trim(),
                    firstName: tr.children[1].textContent.trim(),
                    email: tr.children[2].textContent.trim(),
                    due: tr.children[3].textContent.trim(),
                    website: tr.children[4].textContent.trim(),
                    action: tr.children[5].textContent.trim()
                };
            });
            return data;
        });
    }

    getColumnData(anyTable, columnName) {
        return this.getDataFromTable(anyTable).then(data => {
            return data.map(row => row[columnName]);
        });
    }
}


export default new tablesPage;