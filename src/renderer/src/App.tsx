import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, tr } from './i18n'

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
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route index path="/home" element={<Home />} />
      </Routes>
    </Provider>
  )
}
export default App
