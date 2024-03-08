import { useTranslation } from 'react-i18next';

import './App.css'

function App() {
  
  const { t } = useTranslation();

  return (
    <>
    <h1>{t('home')}</h1>
    </>
  )
}

export default App
