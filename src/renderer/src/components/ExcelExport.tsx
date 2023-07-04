import { useCallback } from 'react'
import { utils, writeFileXLSX } from 'xlsx'

function ExcelExport({ setshowExcelExport }) {
  const data = [
    { Name: 'Bill Clinton', Index: 42 },
    { Name: 'GeorgeW Bush', Index: 43 },
    { Name: 'Barack Obama', Index: 44 },
    { Name: 'Donald Trump', Index: 45 },
    { Name: 'Joseph Biden', Index: 46 }
  ]
  const exportFile = useCallback(() => {
    const ws = utils.json_to_sheet(data)
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'Data')
    writeFileXLSX(wb, 'SheetJSReactAoO.xlsx')
  }, [data])

  return (
    <div>
      <button
        className="absolute right-0 top-0 z-10 rounded-md border-black px-2 py-1"
        onClick={() => {
          setshowExcelExport(false)
        }}
      >
        X
      </button>
      <table>
        <thead>
          <th>Name</th>
          <th>Index</th>
        </thead>
        <tbody>
          {
            /* generate row for each president */
            data.map((pres) => (
              <tr>
                <td>{pres.Name}</td>
                <td>{pres.Index}</td>
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <td colSpan={2}>
            <button onClick={exportFile}>Export XLSX</button>
          </td>
        </tfoot>
      </table>
    </div>
  )
}
export default ExcelExport
