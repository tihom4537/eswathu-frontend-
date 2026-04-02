import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import PageHeading from '../../components/PageHeading/PageHeading';
import SectionBox from '../../components/SectionBox/SectionBox';
import InfoBox from '../../components/InfoBox/InfoBox';
import Button from '../../components/Button/Button';
import QuestionnaireField from '../../components/QuestionnaireField/QuestionnaireField';
import HelpCardList from '../../components/HelpCardList/HelpCardList';
import CaptionMessage from '../../components/CaptionMessage/CaptionMessage';
import { nodes, DOCS, KN_DOCS, KN_TITLES, GLOSSARY, KN_GLOSSARY } from './classifierData';
import Tooltip from '../../components/Tooltip/Tooltip';
import { useTranslation } from '../../i18n';
import './NewApplicationFirstPage.css';

/**
 * Splits a plain string by any glossary terms and wraps matched terms
 * in a definition Tooltip. Returns a string if no matches, or a React
 * element array if matches are found — both render correctly in JSX.
 *
 * @param {string} text     - The text to scan for glossary terms.
 * @param {Function} t      - The useTranslation t() function used to resolve
 *                            the i18n key stored in glossary[term] into the
 *                            correct language definition string.
 * @param {Object} glossary - Term→i18n-key map to use. Defaults to GLOSSARY (English).
 *                            Pass KN_GLOSSARY for Kannada text.
 */
const renderWithDefs = (text, t, glossary = GLOSSARY) => {
  if (typeof text !== 'string' || !text) return text;
  const terms = Object.keys(glossary);
  if (terms.length === 0) return text;
  // Escape regex special chars, then wrap each term with \b word boundaries
  // on whichever end starts/ends with a word character. This prevents short
  // terms like 'Site' from matching inside longer words like 'Sites'.
  // Note: \b only matches ASCII word chars — Kannada terms use raw substring match.
  const escaped = terms.map(term => {
    const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const startBound = /^\w/.test(term) ? '\\b' : '';
    const endBound   = /\w$/.test(term) ? '\\b' : '';
    return `${startBound}${esc}${endBound}`;
  });
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);
  if (parts.length === 1) return text; // no glossary terms found
  return parts.map((part, i) =>
    glossary[part]
      ? <Tooltip key={i} variant="definition" definition={t(glossary[part])}>{part}</Tooltip>
      : part
  );
};

const NewApplicationFirstPage = ({ onNavigate, username = '', onClassificationConfirmed }) => {
  const [history, setHistory] = useState([]);
  const [currentId, setCurrentId] = useState('q_who');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { t, lang } = useTranslation('newAppFirst');

  // Returns a node with label/question/options translated for the current language.
  // Result nodes (type === 'result') are returned unchanged — their titles are not
  // in the questionnaire MD and do not need translation here.
  const getTranslatedNode = (nodeId) => {
    const base = nodes[nodeId];
    if (!base || base.type === 'result') return base;
    return {
      ...base,
      label: t(`${nodeId}_label`),
      question: t(`${nodeId}_question`),
      options: base.options.map((opt, i) => ({
        ...opt,
        text: t(`${nodeId}_opt${i}`),
      })),
    };
  };

  const node = getTranslatedNode(currentId);
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

  const isKn = lang === 'kn';
  const resultDocs = isResult && !node.noDoc
    ? (isKn ? (KN_DOCS[node.code] || []) : (DOCS[node.code] || []))
    : [];
  const resultTitle = isResult
    ? (isKn ? (KN_TITLES[node.code] || node.title) : node.title)
    : '';
  const resultFormType = isResult
    ? (node.code.startsWith('11A')
        ? (isKn ? 'ನಮೂನೆ 11A' : 'Form 11A')
        : (isKn ? 'ನಮೂನೆ 11B' : 'Form 11B'))
    : '';

  return (
    <div className="new-app-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onNavigate={onNavigate}
        onLogout={() => onNavigate && onNavigate('login')}
      />

      {/* Steps banner */}
      <div className="new-app-page__steps-bg">
        <div className="new-app-page__steps-inner">

          {/* Back arrow */}
          <button
            type="button"
            className="new-app-page__arrow"
            onClick={() => onNavigate && onNavigate('home')}
            aria-label="Go back"
          >
            <span className="material-icons-outlined">arrow_back</span>
          </button>

          {/* Centre content */}
          <div className="new-app-page__steps-content">
            <PageHeading subtitle={t('newapp_subtitle')} title={t('newapp_title')} />

            {/* Figma node 249:69627 — informational steps row, not interactive */}
            <div className="new-app-page__steps-row">
              {[
                { n: 1, label: t('step1_label') },
                { n: 2, label: t('step2_label') },
                { n: 3, label: t('step3_label') },
                { n: 4, label: t('step4_label') },
                { n: 5, label: t('step5_label') },
              ].flatMap(({ n, label }, i) => {
                const els = [];
                if (i > 0) els.push(<div key={`l${n}`} className="new-app-page__steps-line" />);
                els.push(
                  <div key={n} className="new-app-page__steps-item">
                    <div className="new-app-page__steps-circle">{n}</div>
                    <span className="new-app-page__steps-label">{label}</span>
                  </div>
                );
                return els;
              })}
            </div>
          </div>

          {/* Forward arrow */}
          <button
            type="button"
            className={`new-app-page__arrow${!isConfirmed ? ' new-app-page__arrow--disabled' : ''}`}
            disabled={!isConfirmed}
            onClick={() => onNavigate && onNavigate('new-application-step1')}
            aria-label="Proceed to application"
          >
            <span className="material-icons-outlined">arrow_forward</span>
          </button>

        </div>
      </div>

      {/* Sections */}
      <div className="new-app-page__sections">

        {/* 0.1 — Things to keep in hand */}
        <SectionBox number="0.1" title={t('s01_title')} open>
          <div className="new-app-s01">

            <InfoBox variant="outline">
              {t('s01_infobox_before')} <strong>{t('s01_infobox_bold')}</strong> {t('s01_infobox_after')}
            </InfoBox>

            <p className="new-app-s01__mandatory-text">
              {t('s01_mandatory_before')} <strong>{t('s01_mandatory_bold')}</strong>. {t('s01_mandatory_after')}
            </p>

            <div className="new-app-s01__doc-list">

              {/* Deed Documents */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon">file_copy</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">{t('s01_doc1_title')}</p>
                  <p className="new-app-s01__doc-desc">{t('s01_doc1_desc')}</p>
                </div>
              </div>

              <hr className="new-app-s01__divider" />

              {/* Owner's Aadhaar Details */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon">file_copy</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">{t('s01_doc2_title')}</p>
                  <p className="new-app-s01__doc-desc">{t('s01_doc2_desc')}</p>
                </div>
              </div>

              <hr className="new-app-s01__divider" />

              {/* Property Image with Geo Tag */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon new-app-s01__doc-icon--image">image</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">{t('s01_doc3_title')}</p>
                  <p className="new-app-s01__doc-desc">
                    {t('s01_doc3_desc')}{' '}
                    <a href="#" className="new-app-s01__link">{t('s01_doc3_link')}</a>
                  </p>
                </div>
              </div>

              <hr className="new-app-s01__divider" />

              {/* Encumbrance Certificate */}
              <div className="new-app-s01__doc-item">
                <span className="material-icons-outlined new-app-s01__doc-icon">file_copy</span>
                <div className="new-app-s01__doc-content">
                  <p className="new-app-s01__doc-title">{t('s01_doc4_title')}</p>
                  <p className="new-app-s01__doc-desc">{t('s01_doc4_desc')}</p>
                </div>
              </div>

              {/* EC note InfoBox — multiline, icon top-aligned */}
              <InfoBox variant="outline" className="new-app-s01__ec-info">
                <>
                  {t('s01_ec_main')}{' '}
                  <a href="#" className="new-app-s01__link">{t('s01_ec_link')}</a>
                  <br /><br />
                  <strong>{t('s01_ec_note_label')}</strong>{' '}{t('s01_ec_note_intro')}<br />
                  1. {t('s01_ec_list1')}<br />
                  2. {t('s01_ec_list2')}<br />
                  {t('s01_ec_example')}
                  <br /><br />
                  <strong>{t('s01_ec_important_label')}</strong>{' '}{t('s01_ec_important')}
                </>
              </InfoBox>

            </div>
          </div>
        </SectionBox>

        {/* 0.2 — Property Classification Questionnaire */}
        <SectionBox number="0.2" title={t('s02_title')} open className="new-app-s02-box">
          <div className="new-app-s02">

            <p className="new-app-s02__intro">{t('s02_intro')}</p>

            {!isResult ? (
              <div className="new-app-s02__questionnaire">
                <div className="new-app-s02__question-header">
                  <span className="new-app-s02__question-label">{node.label}</span>
                  <p className="new-app-s02__question-text">{renderWithDefs(node.question, t, isKn ? KN_GLOSSARY : GLOSSARY)}</p>
                </div>

                <div className="new-app-s02__options">
                  {node.options.map((option, i) => (
                    <QuestionnaireField
                      key={i}
                      text={renderWithDefs(option.text, t, isKn ? KN_GLOSSARY : GLOSSARY)}
                      sub={option.sub ? renderWithDefs(option.sub, t) : undefined}
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
                      {t('s02_btn_back')}
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    disabled={selectedOption === null}
                    onClick={handleNext}
                  >
                    {t('s02_btn_next')}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="new-app-s02__result">
                <HelpCardList
                  variant="document"
                  subtitle={resultFormType}
                  title={isKn
                    ? <>{node.code.replace(/-\d+$/, '')} — {renderWithDefs(resultTitle, t, KN_GLOSSARY)}</>
                    : `${node.code.replace(/-\d+$/, '')} — ${resultTitle}`
                  }
                  items={resultDocs.map(doc => renderWithDefs(doc, t, isKn ? KN_GLOSSARY : GLOSSARY))}
                  noDoc={node.noDoc}
                />
                <div className="new-app-s02__result-actions">
                  <Button variant="white" icon="arrow_back" onClick={handleBack}>
                    {t('s02_btn_back')}
                  </Button>
                  <Button variant="white" icon="refresh" onClick={handleRestart}>
                    {t('s02_btn_start_over')}
                  </Button>
                </div>
                <div className="new-app-s02__result-confirm">
                  <Button variant="primary" disabled={isConfirmed} onClick={handleConfirm}>
                    {t('s02_btn_confirm')}
                  </Button>
                  <CaptionMessage variant="info">
                    {t('s02_confirm_caption')}
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
          {t('proceed_btn')}
        </Button>
      </div>
    </div>
  );
};

export default NewApplicationFirstPage;
