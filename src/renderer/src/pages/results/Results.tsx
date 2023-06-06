import { RootState } from '@renderer/app/store'
import { useSelector } from 'react-redux'

const Results = () => {
  const { tests } = useSelector((state: RootState) => state.test)
  console.log(tests[0])
  return (
    <div>
      {tests.map((test) => (
        <p key={test.id}>{test.name}</p>
      ))}
    </div>
  )
}
export default Results
