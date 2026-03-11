import IconButton from '../IconButton/IconButton';
import './PageNavigation.css';

/**
 * PageNavigation — full-width back/forward arrow bar placed at the top of
 * every step page, below NavigationBar and above Stepper.
 *
 * Props
 *   onBack        – called when the back arrow is clicked
 *   onNext        – called when the forward arrow is clicked
 *   isNextEnabled – forward arrow enabled when true (default false)
 *   isBackEnabled – back arrow enabled when true (default true)
 *   onEdit        – called when the Edit button is clicked (optional)
 *   showEdit      – renders the Edit button when true (default false)
 *   hideNext      – hides the forward arrow entirely (use on last step)
 */
const PageNavigation = ({
  onBack,
  onNext,
  isNextEnabled = false,
  isBackEnabled = true,
  onEdit,
  showEdit = false,
  hideNext = false,
}) => (
  <div className="page-nav">
    <div className="page-nav__inner">
      {/* ── Back arrow ─────────────────────────────── */}
      <button
        type="button"
        className={`page-nav__arrow ${!isBackEnabled ? 'page-nav__arrow--disabled' : ''}`}
        disabled={!isBackEnabled}
        onClick={onBack}
        aria-label="Go to previous step"
      >
        <span className="material-icons-outlined">arrow_back</span>
      </button>

      {/* ── Right side: edit + forward ─────────────── */}
      <div className="page-nav__right">
        {showEdit && (
          <button
            type="button"
            className="page-nav__edit-btn"
            onClick={onEdit}
          >
            Edit
          </button>
        )}

        {!hideNext && (
          <button
            type="button"
            className={`page-nav__arrow ${!isNextEnabled ? 'page-nav__arrow--disabled' : ''}`}
            disabled={!isNextEnabled}
            onClick={onNext}
            aria-label="Go to next step"
          >
            <span className="material-icons-outlined">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  </div>
);

export default PageNavigation;
