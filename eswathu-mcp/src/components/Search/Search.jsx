import { useState } from 'react';
import './Search.css';

const Search = ({
  placeholder = 'Search for ...',
  value,
  onChange,
  disabled = false,
  showMic = false,
  className = '',
}) => {
  const [focused, setFocused] = useState(false);

  const state = disabled
    ? 'disabled'
    : focused
      ? 'focused'
      : value
        ? 'filled'
        : 'default';

  return (
    <div className={`search search--${state} ${className}`}>
      <span className="material-icons-outlined search__icon search__icon--lead">search</span>
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {showMic && (
        <span className="material-icons-outlined search__icon search__icon--trail">mic</span>
      )}
    </div>
  );
};

export default Search;
