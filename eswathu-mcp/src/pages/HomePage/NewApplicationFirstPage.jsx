import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageNavigation from '../../components/PageNavigation/PageNavigation';
import PageHeading from '../../components/PageHeading/PageHeading';
import Stepper from '../../components/Stepper/Stepper';
import SectionBox from '../../components/SectionBox/SectionBox';
import InfoBox from '../../components/InfoBox/InfoBox';
import Button from '../../components/Button/Button';
import QuestionnaireField from '../../components/QuestionnaireField/QuestionnaireField';
import HelpCardList from '../../components/HelpCardList/HelpCardList';
import CaptionMessage from '../../components/CaptionMessage/CaptionMessage';
import { nodes, DOCS } from './classifierData';
import './NewApplicationFirstPage.css';

const NewApplicationFirstPage = ({ onNavigate, username = '', onClassificationConfirmed }) => {
  const [history, setHistory] = useState([]);
  const [currentId, setCurrentId] = useState('q_who');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const node = nodes[currentId];
  const isResult = node.type === 'result';

  const handleOptionSelect = (i) => {
    setSelectedOption(i);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const nextId = node.options[selectedOption].next;
    setHistory((h) => [...h, { nodeId: currentId }]);
    setCurrentId(nextId);
    setSelectedOption(null);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setCurrentId(prev.nodeId);
    setSelectedOption(null);
  };

  const handleRestart = () => {
    setHistory([]);
    setCurrentId('q_who');
    setSelectedOption(null);
    setIsConfirmed(false);
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    onClassificationConfirmed?.(node.code);
  };

  const resultDocs = isResult && !node.noDoc ? (DOCS[node.code] || []) : [];
  const resultFormType = isResult
    ? node.code.startsWith('11A') ? 'Form 11A' : 'Form 11B'
    : '';

  return (
    <div className="new-app-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onLogout={() => onNavigate && onNavigate('login')}
      />

      <PageNavigation
        onBack={() => onNavigate && onNavigate('home')}
        isBackEnabled={true}
        onNext={() => onNavigate && onNavigate('new-application-step1')}
        isNextEnabled={isConfirmed}
      />

      {/* Steps banner */}
      <div className="new-app-page__steps-bg">
        <div className="new-app-page__steps-inner">
          <PageHeading subtitle="Application process" title="Get your e-khata in 5 simple steps" />
          <Stepper activeStep={-1} />
        </div>
      </div>

      {/* Sections */}
      <div className="new-app-page__sections">

        {/* 0.1 — Things to keep in hand */}
        <SectionBox number="0.1" title="Things to keep in hand before proceeding" open>
          <div className="new-app-s01">

            <InfoBox variant="outline">
              The form requires you to enter most of your property details hence it would be
              helpful to keep <strong>ALL YOUR PROPERTY RELATED DOCUMENTS</strong> handy before
              you start.
            </InfoBox>

            <p className="new-app-s01__mandatory-text">
              The following two documents are <strong>MANDATORY</strong>. Kindly keep both of
              these ready before you proceed.
            </p>

            <div className="new-app-s01__doc-list">

              {/* Deed Documents */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon">file_copy</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">Deed Documents</p>
                  <p className="new-app-s01__doc-desc">
                    It is the official proof that a property is registered in your name.
                  </p>
                </div>
              </div>

              <hr className="new-app-s01__divider" />

              {/* Owner's Aadhaar Details */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon">file_copy</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">Owner's Aadhaar Details</p>
                  <p className="new-app-s01__doc-desc">
                    Owner's Aadhaar Card Number and registered phone number for ekyc verification
                  </p>
                </div>
              </div>

              <hr className="new-app-s01__divider" />

              {/* Property Image with Geo Tag */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon new-app-s01__doc-icon--image">image</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">Property Image with Geo Tag</p>
                  <p className="new-app-s01__doc-desc">
                    Photo of the property with the front elevation visible.{' '}
                    <a href="#" className="new-app-s01__link">Click here to know how to click a geo tagged photo</a>
                  </p>
                </div>
              </div>

              <hr className="new-app-s01__divider" />

              {/* Encumbrance Certificate */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon">file_copy</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">Encumbrance Certificate (EC)</p>
                  <p className="new-app-s01__doc-desc">
                    An official, legal document certifying that a property is free from any
                    financial or legal liabilities, such as mortgages, loans, or pending dues.
                    It acts as evidence of a clear title, showing all registered transactions
                    over a specified period.
                  </p>
                </div>
              </div>

              {/* EC note InfoBox — multiline, icon top-aligned */}
              <InfoBox variant="outline" className="new-app-s01__ec-info">
                <>
                  Encumbrance Certificate (Form 15) from at least one day before date of
                  registration until issued at least in the last 15 days are accepted.{' '}
                  <a href="#" className="new-app-s01__link">To know more click here</a>
                  <br /><br />
                  Note: If your registered deed is before 01.04.2004, then you will have to
                  give two ECs.<br />
                  i. EC from 01.04.2004 until issued at least in the last 15 days are accepted.<br />
                  ii. EC from at least one date before your registration date until 31.03.2004.
                  <br /><br />
                  (For example, if your Regd Deed is registered on 17-08-1998, then obtain the
                  EC from 16-08-1998. Note: if your Regd Deed is not in the submitted EC, then
                  the application won't be processed.)
                </>
              </InfoBox>

            </div>
          </div>
        </SectionBox>

        {/* 0.2 — Property Classification Questionnaire */}
        <SectionBox number="0.2" title="Property Classification" open className="new-app-s02-box">
          <div className="new-app-s02">

            <p className="new-app-s02__intro">
              Please answer a few questions to find and confirm your Property Classification
              (11A and 11B)
            </p>

            {!isResult ? (
              <div className="new-app-s02__questionnaire">
                <div className="new-app-s02__question-header">
                  <span className="new-app-s02__question-label">{node.label}</span>
                  <p className="new-app-s02__question-text">{node.question}</p>
                </div>

                <div className="new-app-s02__options">
                  {node.options.map((option, i) => (
                    <QuestionnaireField
                      key={i}
                      text={option.text}
                      sub={option.sub}
                      selected={selectedOption === i}
                      onChange={() => handleOptionSelect(i)}
                      name="questionnaire"
                      value={String(i)}
                    />
                  ))}
                </div>

                <div className="new-app-s02__actions">
                  {history.length > 0 && (
                    <Button variant="white" icon="arrow_back" onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    disabled={selectedOption === null}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
              </div>
            ) : (
              <div className="new-app-s02__result">
                <HelpCardList
                  variant="document"
                  subtitle={resultFormType}
                  title={`${node.code.replace(/-\d+$/, '')} — ${node.title}`}
                  items={resultDocs}
                  noDoc={node.noDoc}
                />
                <div className="new-app-s02__result-actions">
                  <Button variant="white" icon="arrow_back" onClick={handleBack}>
                    Back
                  </Button>
                  <Button variant="white" icon="refresh" onClick={handleRestart}>
                    Start Over
                  </Button>
                </div>
                <div className="new-app-s02__result-confirm">
                  <Button variant="primary" disabled={isConfirmed} onClick={handleConfirm}>
                    Confirm my Classification
                  </Button>
                  <CaptionMessage variant="info">
                    This will be used in your application
                  </CaptionMessage>
                </div>
              </div>
            )}

          </div>
        </SectionBox>

      </div>

      {/* Proceed CTA */}
      <div className="new-app-page__cta">
        <Button variant="primary" onClick={() => onNavigate && onNavigate('new-application-step1')}>
          Proceed to New Application
        </Button>
      </div>
    </div>
  );
};

export default NewApplicationFirstPage;
