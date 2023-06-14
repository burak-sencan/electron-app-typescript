import { RootState } from '@renderer/app/store'
import { useEffect, useMemo } from 'react'
import { setSelectedMethod } from '@renderer/features/methodSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table'
import { Method } from '@renderer/types'

const HomeTest = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { methods, selectedMethod } = useSelector((state: RootState) => state.method) // Access the counter state from the Redux store
  const columns = useMemo<MRT_ColumnDef<Method>[]>(
    () => [
      {
        accessorKey: 'definations.name.val', //access nested data with dot notation
        header: 'Name',
        size: 10
      },
      {
        accessorKey: 'definations.defination.val', //access nested data with dot notation
        header: 'Defination',
        size: 10
      }
    ],
    []
  )
  useEffect(() => {
    dispatch(setSelectedMethod({}))
  }, [])

  return (
    <div className="flex flex-col">
      {/* {methods.map((method, idx) => (
        <button
          // className={method === selectedMethod ? 'bg-slate-100' : ''}
          className={`${method === selectedMethod ? 'border border-yellow-400' : ''}`}
          key={idx}
          onClick={() => {
            dispatch(setSelectedMethod(method))
          }}
        >
          {console.log(method)}
          {method?.definations?.name.val}
        </button>
      ))} */}

      <MaterialReactTable
        columns={columns}
        data={methods}
        enableMultiRowSelection={false}
        enableRowSelection
        muiTableBodyRowProps={({ row }) => ({
          onClick: (_event) => {
            const toggleSelectedHandler = row.getToggleSelectedHandler()
            toggleSelectedHandler(row)
            if (selectedMethod === row.original) {
              dispatch(setSelectedMethod({}))
            } else {
              dispatch(setSelectedMethod(row.original))
            }
          },
          sx: {
            cursor: 'pointer'
          }
        })}
      />
      <button
        className="self-baseline border p-4"
        disabled={selectedMethod?.definations?.name?.val === undefined}
        onClick={() => {
          navigate('/dashboard/test')
        }}
      >
        Go to Test
      </button>
      {selectedMethod?.definations?.name?.val}

    </div>
  )
}
export default HomeTest
