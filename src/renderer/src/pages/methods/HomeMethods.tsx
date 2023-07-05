import { RootState } from '@renderer/app/store'
import { copyMethod, deleteMethod } from '@renderer/features/methodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HiSquaresPlus } from 'react-icons/hi2'

const HomeMethods = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { methods } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store,

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b p-4">
        <p className="font-medium text-lg">List of Created Methods</p>
        <button
          className="flex items-center  gap-2 self-end rounded-md bg-slate-800 p-2 text-lg text-yellow-400 transition hover:bg-slate-950"
          onClick={() => {
            navigate('/dashboard/create-method')
          }}
        >
          Create Method
          <HiSquaresPlus className="text-2xl" />
        </button>
      </div>
      <div className="h-[60vh] overflow-auto">
        <div className="flex w-full gap-4 bg-slate-900 px-4 text-white">
          <p className="w-40 ">Name</p>
          <p className="w-40 ">Description</p>
          <p className="w-40 ">Action</p>
        </div>
        {methods.map((method, idx) => (
          <div className="" key={idx}>
            <hr />
            <div className="flex items-center gap-4 p-4">
              <p className="w-40">{method.general.name.val}</p>
              <p className="w-40">{method.general.description.val}</p>
              <button
                onClick={() => {}}
                className="self-baseline rounded-md bg-slate-800 px-4 py-2  text-yellow-400 transition hover:text-yellow-300"
              >
                Edit
              </button>
              <button
                onClick={async () => {
                  dispatch(deleteMethod(method.id))
                  const result = await window.electron.deleteMethod(method)
                  console.log(result)
                }}
                className="self-baseline rounded-md bg-slate-800 px-4 py-2  text-red-400 transition hover:text-red-300"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  dispatch(copyMethod(method))
                }}
                className="self-baseline rounded-md bg-slate-800 px-4 py-2  text-lime-400 transition hover:text-lime-200"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default HomeMethods
