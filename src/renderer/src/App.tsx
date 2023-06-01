import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, tr } from './i18n'
import Layout from './components/Layout'
import { CreateMethod, Home, HomeMethods, HomeTest, Login, Results, Settings, Test } from './pages'

const App = () => {
  //i18n
  i18n.use(initReactI18next).init({
    resources: {
      en,
      tr
    },
    lng: 'tr',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
export default App
