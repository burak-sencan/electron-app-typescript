import { RootState } from '@renderer/app/store'
import ExportTest from './ExportTest'
import { useSelector } from 'react-redux'

const Results = () => {
  const { tests } = useSelector((state: RootState) => state.test)

  return (
    <div className="p-4">
      {tests.map((test) => (
        <div className="flex gap-4" key={test.id}>
          <p>{test.name}</p>
          <ExportTest />
        </div>
      ))}
      <hr />
    </div>
  )
}
export default Results
