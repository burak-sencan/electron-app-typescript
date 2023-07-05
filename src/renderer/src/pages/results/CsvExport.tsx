import { CSVLink } from 'react-csv'
const csvData = [
  ['firstname', 'lastname', 'email'],
  ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
  ['Raed', 'Labes', 'rl@smthing.co.com'],
  ['Yezzi', 'Min l3b', 'ymin@cocococo.com']
]
const CsvExport = () => {
  return (
    <div className="center h-8 w-16 rounded-md border bg-slate-50 hover:bg-slate-100">
      <CSVLink data={csvData}   filename={"Vector.csv"}>Csv</CSVLink>
    </div>
  )
}
export default CsvExport
