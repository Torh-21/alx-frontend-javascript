/// <reference path="./crud.d.ts" />
import { RowID, rowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' }
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
