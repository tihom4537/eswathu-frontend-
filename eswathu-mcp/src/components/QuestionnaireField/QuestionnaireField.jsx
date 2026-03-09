import RadioButton from '../RadioButton/RadioButton';
import './QuestionnaireField.css';

const QuestionnaireField = ({ text, sub, selected = false, onChange, name, value }) => {
  return (
    <div
      className={`questionnaire-field${selected ? ' questionnaire-field--selected' : ''}`}
      onClick={onChange}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onChange && onChange(); }}
    >
      <RadioButton
        name={name}
        value={value}
        checked={selected}
        onChange={() => {}}
        label=""
      />
      <div className="questionnaire-field__content">
        <span className="questionnaire-field__text">{text}</span>
        {sub && <span className="questionnaire-field__sub">{sub}</span>}
      </div>
    </div>
  );
};

export default QuestionnaireField;
