import { useState, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import PageNavigation from '../../../components/PageNavigation/PageNavigation';
import PageHeading from '../../../components/PageHeading/PageHeading';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Table from '../../../components/Table/Table';
import FileUpload from '../../../components/FileUpload/FileUpload';
import CaptionMessage from '../../../components/CaptionMessage/CaptionMessage';
import Button from '../../../components/Button/Button';
import { useTranslation } from '../../../i18n';
import { REBATE_DOCS, REBATE_EXEMPTIONS } from '../../../data/rebatesData';
import './AvailRebatesPage.css';

// Categories that have sub-category options
const SUBCATEGORY_KEYS = {
  cat1:  ['rebate_cat1_sub1', 'rebate_cat1_sub2', 'rebate_cat1_sub3'],
  cat2:  ['rebate_cat2_sub1', 'rebate_cat2_sub2', 'rebate_cat2_sub3', 'rebate_cat2_sub4'],
  cat3:  ['rebate_cat3_sub1', 'rebate_cat3_sub2'],
  cat5:  ['rebate_cat5_sub1', 'rebate_cat5_sub2'],
  cat11: ['rebate_cat11_sub1', 'rebate_cat11_sub2', 'rebate_cat11_sub3'],
};

export default function AvailRebatesPage({
  onNavigate,
  onBack,
  onNext,
  isBackEnabled = true,
  currentBCStep = 4,
  completedBCSteps = [],
  onBCStepClick,
  bcStepNames = [],
  completionResetKey = 0,
}) {
  const { t, lang } = useTranslation('step4');

  const [availing, setAvailing] = useState('no');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  /* ── Page-level completion (enables forward arrow) ──────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  // Reset sub-category + upload when category changes
  useEffect(() => {
    setSubCategory('');
    setUploadedFile(null);
  }, [category]);

  // Reset sub-category + upload when sub-category changes
  useEffect(() => {
    setUploadedFile(null);
  }, [subCategory]);

  // Reset everything when switching back to No
  useEffect(() => {
    if (availing === 'no') {
      setCategory('');
      setSubCategory('');
      setUploadedFile(null);
    }
  }, [availing]);

  /* ── Dropdown option arrays ────────────────────────────── */
  const CATEGORY_OPTIONS = [
    { value: 'cat1',  label: t('rebate_cat_1')  },
    { value: 'cat2',  label: t('rebate_cat_2')  },
    { value: 'cat3',  label: t('rebate_cat_3')  },
    { value: 'cat4',  label: t('rebate_cat_4')  },
    { value: 'cat5',  label: t('rebate_cat_5')  },
    { value: 'cat6',  label: t('rebate_cat_6')  },
    { value: 'cat7',  label: t('rebate_cat_7')  },
    { value: 'cat8',  label: t('rebate_cat_8')  },
    { value: 'cat9',  label: t('rebate_cat_9')  },
    { value: 'cat10', label: t('rebate_cat_10') },
    { value: 'cat11', label: t('rebate_cat_11') },
  ];

  const subCategoryKeys = SUBCATEGORY_KEYS[category] || [];
  const SUBCATEGORY_OPTIONS = subCategoryKeys.map((key) => ({
    value: key,
    label: t(key),
  }));

  /* ── Document lookup ────────────────────────────────────── */
  const docKey = subCategoryKeys.length > 0 ? subCategory : category;
  const docEntry = REBATE_DOCS[docKey];
  const docNames = docEntry ? (docEntry[lang] ?? docEntry.en) : [];

  const docTableColumns = [t('rebates_docs_col_no'), t('rebates_docs_col_doc')];
  const docTableRows = docNames.map((name, i) => [String(i + 1), name]);

  /* ── Selection complete (show docs + upload) ────────────── */
  const selectionComplete =
    availing === 'yes' &&
    category !== '' &&
    (subCategoryKeys.length === 0 || subCategory !== '');

  /* ── Eligibility caption text ───────────────────────────── */
  const selectionLabel = subCategory
    ? t(subCategory)
    : CATEGORY_OPTIONS.find((o) => o.value === category)?.label ?? '';

  const exemptionAmount = REBATE_EXEMPTIONS[category] ?? '';

  const captionText = uploadedFile
    ? t('rebates_caption')
        .replace('{subCategory}', selectionLabel)
        .replace('{amount}', exemptionAmount)
    : null;

  /* ── CTA enable logic ───────────────────────────────────── */
  const ctaEnabled =
    availing === 'no' ||
    (selectionComplete && uploadedFile !== null);

  return (
    <div className="ar-page">
      <NavigationBar variant="post-login" />

      <PageNavigation
        onBack={onBack}
        onNext={onNext}
        isBackEnabled={isBackEnabled}
        isNextEnabled={isPageComplete}
        hideNext
      />

      <div className="ar-page__heading-wrap">
        <PageHeading subtitle="Step 5" title="Avail Rebates" />
      </div>

      <div className="ar-page__content">
        <SectionBox number="4.3" title="Avail Rebates" open>
          <div className="ar-page__body">

            {/* Red info box */}
            <InfoBox variant="warning">
              <a href="#" className="ar-page__info-link">
                Click here to know more about Rebates
              </a>
            </InfoBox>

            {/* Question */}
            <div className="ar-page__question-wrap">
              <p className="ar-page__question">
                {t('rebates_question')}*
              </p>
              <div className="ar-page__radio-group">
                <RadioButton
                  name="availing"
                  label="Yes"
                  value="yes"
                  checked={availing === 'yes'}
                  onChange={() => setAvailing('yes')}
                />
                <RadioButton
                  name="availing"
                  label="No"
                  value="no"
                  checked={availing === 'no'}
                  onChange={() => setAvailing('no')}
                />
              </div>
            </div>

            {/* Category + Sub-category dropdowns */}
            {availing === 'yes' && (
              <div className="ar-page__dropdowns">
                <Dropdown
                  label={t('rebates_category_label')}
                  placeholder={t('rebates_category_placeholder')}
                  options={CATEGORY_OPTIONS}
                  value={category}
                  onChange={setCategory}
                  required
                />

                {SUBCATEGORY_OPTIONS.length > 0 && (
                  <Dropdown
                    label={t('rebates_subcategory_label')}
                    placeholder={t('rebates_subcategory_placeholder')}
                    options={SUBCATEGORY_OPTIONS}
                    value={subCategory}
                    onChange={setSubCategory}
                    required
                  />
                )}
              </div>
            )}

            {/* Documents table + upload (once selection is complete) */}
            {selectionComplete && docNames.length > 0 && (
              <div className="ar-page__docs">
                <p className="ar-page__docs-heading">
                  {t('rebates_docs_heading')}
                </p>
                <Table
                  columns={docTableColumns}
                  rows={docTableRows}
                />
                <FileUpload
                  label={t('rebates_upload_label')}
                  required
                  fileName={uploadedFile}
                  onUpload={(file) => setUploadedFile(file.name)}
                  onRemove={() => setUploadedFile(null)}
                />

                {/* Eligibility caption — appears after upload */}
                {captionText && (
                  <div className="ar-page__eligibility-caption">
                    <CaptionMessage variant="success">
                      {captionText}
                    </CaptionMessage>
                  </div>
                )}
              </div>
            )}

            {/* Save and Proceed */}
            <div className="ar-page__cta-wrap">
              <Button
                variant="primary"
                disabled={!ctaEnabled}
                onClick={() => { setIsPageComplete(true); onNavigate?.('new-application-step7'); }}
              >
                Save and Proceed
              </Button>
            </div>

          </div>
        </SectionBox>
      </div>
    </div>
  );
}
