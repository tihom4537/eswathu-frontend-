import { useRef } from 'react';
import CaptionMessage from '../CaptionMessage/CaptionMessage';
import './FileUpload.css';

/**
 * FileUpload
 *
 * States (controlled externally via fileName + uploadStatus):
 *   default  — empty, no file chosen
 *   hover    — CSS :hover on the button
 *   pressed  — CSS :active on the button
 *   inactive — disabled, no interaction
 *   uploaded — shows filename chip + red remove button
 *
 * Props:
 *   fileName       string | null   — null = not uploaded
 *   uploadStatus   undefined | 'success' | 'error'
 *   disabled       bool            — renders inactive variant
 *   accept         string          — file types, default '.pdf'
 *   label          string          — field label (optional)
 *   required       bool
 *   caption        string          — caption text below
 *   captionVariant 'info'|'error'|'success'|'warning'
 *   onUpload       (file: File) => void
 *   onRemove       () => void
 *   className      string
 */
const FileUpload = ({
  fileName = null,
  uploadStatus,
  disabled = false,
  accept = '.pdf',
  label,
  required = false,
  caption,
  captionVariant,
  onUpload,
  onRemove,
  className = '',
}) => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onUpload?.(file);
    e.target.value = '';
  };

  const resolvedCaptionVariant =
    captionVariant ||
    (uploadStatus === 'error' ? 'error' : uploadStatus === 'success' ? 'success' : 'info');

  return (
    <div className={`file-upload-field ${className}`}>
      {label && (
        <p className="file-upload-field__label">
          {label}
          {required && <span className="file-upload-field__required"> *</span>}
        </p>
      )}

      {fileName ? (
        /* ── Uploaded state ────────────────────────────────── */
        <div className="file-upload-btn file-upload-btn--uploaded">
          <span className="file-upload-btn__name">{fileName}</span>
          <button
            type="button"
            className="file-upload-btn__remove"
            onClick={onRemove}
            aria-label="Remove file"
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
      ) : (
        /* ── Default / Inactive state ──────────────────────── */
        <>
          <button
            type="button"
            className={`file-upload-btn${disabled ? ' file-upload-btn--inactive' : ''}`}
            disabled={disabled}
            onClick={handleButtonClick}
          >
            <span className="material-icons-outlined file-upload-btn__icon">upload_file</span>
            <span className="file-upload-btn__text">Upload File</span>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="file-upload-field__input"
            onChange={handleChange}
          />
        </>
      )}

      {caption && (
        <CaptionMessage variant={resolvedCaptionVariant}>{caption}</CaptionMessage>
      )}
    </div>
  );
};

export default FileUpload;
