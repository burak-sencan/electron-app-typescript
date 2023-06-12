import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import { CreateMethod, Home, HomeMethods, HomeTest, Login, Results, Settings, Test } from './pages'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './app/store'
import { saveSettings } from './features/userSettingSlice'
import { setMethods } from './features/methodSlice'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { defaultSettingsState } = useSelector((state: RootState) => state.setting)
  const dispatch = useDispatch()
  const { i18n } = useTranslation()

  //i18n

  // Run func on starting
  const readSettings = async () => {
    const result = await window.electron.readSettings()
    if (result === null) {
      dispatch(saveSettings(defaultSettingsState))
      i18n.changeLanguage(defaultSettingsState?.language)
      await window.electron.saveSettings(defaultSettingsState)
    } else {
      let data = JSON.parse(result)
      dispatch(saveSettings(data))
      i18n.changeLanguage(data.language)
    }
  }

  const fetchMethods = async () => {
    const result = await window.electron.getMethods()
    dispatch(setMethods(result))
  }

  useEffect(() => {
    readSettings() // read settings
    fetchMethods() // read methods
  }, [])

  return (
    <div className="flex h-screen flex-col justify-between">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="home" element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="home-test" element={<HomeTest />} />
          <Route path="test" element={<Test />} />
          <Route path="home-methods" element={<HomeMethods />} />
          <Route path="create-method" element={<CreateMethod />} />
          <Route path="settings" element={<Settings />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
