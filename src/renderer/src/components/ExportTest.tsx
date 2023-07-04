import { useState } from 'react'
import PdfExport from './PdfExport'
import ExcelExport from './ExcelExport'

const ExportTest = () => {
  const [showPdfExport, setshowPdfExport] = useState(false)
  const [showExcelExport, setshowExcelExport] = useState(false)

  const handleExcell = () => {}
  const handleCsv = () => {}

  return (
    <div>
      <div className="m-2 flex items-baseline gap-2 border">
        <p className="w-full text-center">ExportTest Component</p>
        <br />

        <button
          onClick={() => {
            setshowPdfExport(true)
          }}
          className="h-8 w-16 rounded-md border bg-slate-50 hover:bg-slate-100"
        >
          Pdf
        </button>
        <button
          onClick={() => {
            setshowExcelExport(true)
          }}
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
