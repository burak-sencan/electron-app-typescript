import { RootState } from '@renderer/app/store'
import { changed, saveLanguage } from '@renderer/features/userSettingSlice'
import { useDispatch, useSelector } from 'react-redux'

const General = () => {
  const dispatch = useDispatch()
  const { unsavedTempSetting } = useSelector((state: RootState) => state.setting)

  const handleLang = (lang) => {
    dispatch(saveLanguage(lang))
    dispatch(changed())
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-4">
        <p>Language</p>
        <button
          className={`${
            unsavedTempSetting.language === 'tr' ? 'bg-slate-100' : ''
          } center rounded-md border px-6 py-2`}
          onClick={() => {
            handleLang('tr')
          }}
        >
          Tr
        </button>
        <button
          className={`${
            unsavedTempSetting.language === 'en' ? 'bg-slate-100' : ''
          } center rounded-md  border px-6 py-2`}
          onClick={() => {
            handleLang('en')
          }}
        >
          En
        </button>
      </div>
    </div>
  )
}
export default General
