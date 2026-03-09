import { useState, useEffect } from 'react';
import './index.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/HomePage/LoginPage';
import CitizenLoginHomePage from './pages/HomePage/CitizenLogin-HomePage';
import NewApplicationFirstPage from './pages/HomePage/NewApplicationFirstPage';
import SaleDeedDetailsPage from './pages/NewApplicationPage/steps/SaleDeedDetailsPage';
import OwnerEKYCPage from './pages/NewApplicationPage/steps/OwnerEKYCPage';
import PropertyDetailsPage from './pages/NewApplicationPage/steps/PropertyDetailsPage';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (page === 'new-application-step3') {
    return <PropertyDetailsPage onNavigate={setPage} />;
  }

  if (page === 'new-application-step2') {
    return <OwnerEKYCPage onNavigate={setPage} />;
  }

  if (page === 'new-application-step1') {
    return <SaleDeedDetailsPage onNavigate={setPage} />;
  }

  if (page === 'new-application') {
    return <NewApplicationFirstPage onNavigate={setPage} />;
  }

  if (page === 'citizen-home') {
    return <CitizenLoginHomePage onNavigate={setPage} />;
  }

  if (page === 'login') {
    return <LoginPage onLogin={() => setPage('citizen-home')} />;
  }

  return <HomePage onNavigate={setPage} />;
}

export default App;

