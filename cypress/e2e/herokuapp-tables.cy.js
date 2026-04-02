import tablesPage from "../pages/tablesPage"

describe("Navigate to herokuapp tables", () => {
    beforeEach(() => {
        tablesPage.visit();
        tablesPage.getTable('table1')
            .should('be.visible');
        tablesPage.getTable('table2')
            .should('be.visible');
    })

    describe("Assert row count in table 1", () => {
        it("Count table 1 rows", () => {
            tablesPage.getTableRowCount('table1')
                .should('have.length', 4);
        })
    })

    describe("Assert row count in table 2", () => {
        it("Count table 2 rows", () => {
            tablesPage.getTableRowCount('table2')
                .should('have.length', 4);
        })
    })

    describe("Assert column count in table 1", () => {
        it("Count table 1 columns", () => {
            tablesPage.getTableColumnCount('table1')
                .should('have.length', 6);
        })
    })

    describe("Assert column count in table 2", () => {
        it("Count table 2 columns", () => {
            tablesPage.getTableColumnCount('table2')
                .should('have.length', 6);
        })
    })

    describe("Assert first value of table 1", () => {
        it("Assert first value of table 1", () => {
            tablesPage.getTableCell('table1', 0, 0)
                .should('have.text', 'Smith');
        })
    })

    describe("Assert first value of table 2", () => {
        it("Assert first value of table 2", () => {
            tablesPage.getTableCell('table2', 0, 0)
                .should('have.text', 'Smith');
        })
    })

    describe("Assert buttons exist", () => {
        it("Assrt buttons exist in table 1", () => {
            tablesPage.getButtonsInTable('table1', 0)
                .should('contain.text', 'edit');
            tablesPage.getButtonsInTable('table1', 0)
                .should('contain.text', 'delete');
        })

        it("Assert buttons exist in table 2", () => {
            tablesPage.getButtonsInTable('table2', 0)
                .should('contain.text', 'edit');
            tablesPage.getButtonsInTable('table2', 0)
                .should('contain.text', 'delete');
        })
    })

    describe("Assert data from table", () => {
        it("Assert all data in table 1", () => {
            tablesPage.getDataFromTable('table1').then(data => {
                // Check rows
                expect(data).to.have.lengthOf(4);

                // Check first row
                expect(data[0].lastName).to.equal('Smith');
                expect(data[0].firstName).to.equal('John');
                expect(data[0].email).to.equal('jsmith@gmail.com');

                // Check if emails are correct
                data.forEach(row => {
                    expect(row.email).to.match(/^[\w\.-]+@[\w\.-]+\.\w+$/);
                });

                // check if all rows have the properties
                data.forEach(row => {
                    expect(row).to.have.all.keys('lastName',
                        'firstName', 'email', 'due', 'website', 'action');
                });
            });
        })
        
        it('Assert Data for table 2', () => { 
            tablesPage.getDataFromTable('table2').then(data => {
                expect(data).to.have.lengthOf(4);

                expect(data[0].lastName).to.equal('Smith');
                expect(data[0].firstName).to.equal('John');
                expect(data[0].email).to.equal('jsmith@gmail.com');

                data.forEach(row => {
                    expect(row.email).to.match(/^[\w\.-]+@[\w\.-]+\.\w+$/);
                });

                data.forEach(row => {
                    expect(row).to.have.all.keys('lastName',
                        'firstName', 'email', 'due', 'website', 'action');
                });
            });
        });
    })

    describe("Click Edit Button", () => { 
        it("Click the edit button on the first row", () => {
            tablesPage.clickEditButton('table1', 0)
            // Because the use of [] in method,
            // the table must go in quotes ''
            cy.url().should('include', '#edit')
        })
    })

    describe('Sort Column', () => {
        it("Sort the Last Name Column ascending", () => {
            tablesPage.clickColumnHeader('table1', 'Last Name');
            tablesPage.getColumnData('table1', 'lastName').then(data => {
                expect(tablesPage.isSorted(data)).to.be.true;
            });
        })

        it("Sort the First Name Column ascending", () => {
            tablesPage.clickColumnHeader('table1', 'First Name');
            tablesPage.getColumnData('table1', 'firstName').then(data => {
                expect(tablesPage.isSorted(data)).to.be.true;
            });
        })

        it("Sort the Email Column ascending", () => {
            tablesPage.clickColumnHeader('table1', 'Email');
            tablesPage.getColumnData('table1', 'email').then(data => {
                expect(tablesPage.isSorted(data)).to.be.true;
            });
        })

        it("Sort the Due Column ascending", () => {
            tablesPage.clickColumnHeader('table1', 'Due');
            tablesPage.getColumnData('table1', 'due').then(data => {
                const sorted = [...data].sort((a, b) => a - b)
                expect(tablesPage.isSorted(data)).to.be.true;
            });
        })

        it("Sort the Website Column ascending", () => {
            tablesPage.clickColumnHeader('table1', 'Web Site');
            tablesPage.getColumnData('table1', 'website').then(data => {
                expect(tablesPage.isSorted(data)).to.be.true;
            });
        })
    })
})