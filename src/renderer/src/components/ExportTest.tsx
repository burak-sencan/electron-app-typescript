import { useState } from 'react'
import PdfExport from './PdfExport'
import ExcelExport from './ExcelExport'
import { useCallback } from 'react'
import { utils, writeFileXLSX } from 'xlsx'
const data = [
  { Name: 'Bill Clinton', Index: 42 },
  { Name: 'GeorgeW Bush', Index: 43 },
  { Name: 'Barack Obama', Index: 44 },
  { Name: 'Donald Trump', Index: 45 },
  { Name: 'Joseph Biden', Index: 46 }
]

const ExportTest = () => {
  const [showPdfExport, setshowPdfExport] = useState(false)
  const [showExcelExport, setshowExcelExport] = useState(false)

  const handleExcell = () => {
    const ws = utils.json_to_sheet(data)
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'Data')
    writeFileXLSX(wb, 'SheetJSReactAoO.xlsx')
  }
  const handleCsv = () => {}

  return (
    <div>
      <div className="flex gap-2 border">
        <button
          onClick={() => {
            setshowPdfExport(true)
          }}
          className="h-8 w-16 rounded-md border bg-slate-50 hover:bg-slate-100"
        >
          Pdf
        </button>
        <button
          onClick={handleExcell}
          className="h-8 w-16 rounded-md border bg-slate-50 hover:bg-slate-100"
        >
          Excel
        </button>
        <button
          onClick={handleCsv}
          className="h-8 w-16 rounded-md border bg-slate-50 hover:bg-slate-100"
        >
          Csv
        </button>
      </div>
      {showPdfExport && <PdfExport setshowPdfExport={setshowPdfExport} />}
      {showExcelExport && <ExcelExport setshowExcelExport={setshowExcelExport} />}
    </div>
  )
}
export default ExportTest
