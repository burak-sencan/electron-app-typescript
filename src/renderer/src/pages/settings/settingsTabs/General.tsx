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
    <div>
      <button
        className={`${
          unsavedTempSetting.language === 'tr' ? 'bg-slate-100' : ''
        } rounded-md px-6 pt-2`}
        onClick={() => {
          handleLang('tr')
        }}
      >
        Tr
      </button>
      <button
        className={`${
          unsavedTempSetting.language === 'en' ? 'bg-slate-100' : ''
        } rounded-md px-6 pt-2`}
        onClick={() => {
          handleLang('en')
        }}
      >
        En
      </button>
    </div>
  )
}
export default General
