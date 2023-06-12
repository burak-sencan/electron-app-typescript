import { RootState } from '@renderer/app/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Results = () => {
  const { tests } = useSelector((state: RootState) => state.test)
  const [randomNumber, setRandomNumber] = useState(null)

  const generateRandomNumber = () => {
    window.electron.generateRandomNumber()
  }

  useEffect(() => {
    window.electron.subscribeToRandomNumber((newRandomNumber) => {
      setRandomNumber(newRandomNumber)
      console.log(newRandomNumber)
    })

    return () => {
      window.electron.unsubscribeFromRandomNumber()
    }
  }, [])

  return (
    <div>
      {tests.map((test) => (
        <p key={test.id}>{test.name}</p>
      ))}
      <button className="rounded-md border p-1" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
      <p>Random Number: {randomNumber}</p>
    </div>
  )
}
export default Results
