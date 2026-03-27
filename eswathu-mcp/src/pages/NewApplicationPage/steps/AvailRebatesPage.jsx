import { useState, useEffect } from 'react';
import NavigationBar from '../../../components/NavigationBar/NavigationBar';
import PageNavigation from '../../../components/PageNavigation/PageNavigation';
import PageHeading from '../../../components/PageHeading/PageHeading';
import SectionBox from '../../../components/SectionBox/SectionBox';
import InfoBox from '../../../components/InfoBox/InfoBox';
import RadioButton from '../../../components/RadioButton/RadioButton';
import Button from '../../../components/Button/Button';
import './AvailRebatesPage.css';

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
  const [availing, setAvailing] = useState('no');
  /* ── Page-level completion (enables forward arrow) ──────── */
  const [isPageComplete, setIsPageComplete] = useState(false);

  useEffect(() => {
    if (completionResetKey > 0) setIsPageComplete(false);
  }, [completionResetKey]);

  return (
    <div className="ar-page">
      <NavigationBar variant="post-login" />

      {/* ── Page navigation arrows ─────────────────────────── */}
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
            <InfoBox variant="red">
              {/* TODO: add rebates info link */}
              <a href="#" className="ar-page__info-link">
                Click here to know more about Rebates
              </a>
            </InfoBox>

            {/* Question */}
            <div className="ar-page__question-wrap">
              <p className="ar-page__question">
                Will you be availing any rebates for your property?*
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

            {/* Save and Proceed – centred, always enabled (No pre-selected) */}
            <div className="ar-page__cta-wrap">
              <Button
                variant="primary"
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
