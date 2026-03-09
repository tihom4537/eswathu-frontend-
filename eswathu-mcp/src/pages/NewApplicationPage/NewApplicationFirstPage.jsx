// NewApplicationFirstPage.jsx — stub, Figma design pending

const NewApplicationFirstPage = ({ onNavigate }) => {
  return (
    <div style={{ padding: '80px 120px', fontFamily: 'Noto Sans, sans-serif' }}>
      <p>New Application — First Page (Figma design pending)</p>
      <button onClick={() => onNavigate && onNavigate('citizen-home')}>← Back</button>
    </div>
  );
};

export default NewApplicationFirstPage;
