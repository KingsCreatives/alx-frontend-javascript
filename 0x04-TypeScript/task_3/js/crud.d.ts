import { RowElement, RowID } from "./interface";


export function deleteRow(rowId: RowID): void

export function updateRow(rowId: RowID, row: RowElement):RowID

export function insertRow(row: RowElement): RowID 

