import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { tr, en } from './i18n'

i18n.use(initReactI18next).init({
  resources: {
    tr,
    en
  },
  lng: 'en',
  fallbackLng: 'tr',

  interpolation: {
    escapeValue: false
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
