import { useState, useEffect } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import PageHeading from '../../components/PageHeading/PageHeading';
import RadioButton from '../../components/RadioButton/RadioButton';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CaptionMessage from '../../components/CaptionMessage/CaptionMessage';
import './LoginPage.css';

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

const generateCaptcha = () => {
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += CAPTCHA_CHARS.charAt(Math.floor(Math.random() * CAPTCHA_CHARS.length));
  }
  return result;
};

const CaptchaBlock = ({ captchaText, onRefresh, answer, onAnswerChange, errorMessage }) => (
  <div className="login-captcha">
    <span className="login-captcha__label">Captcha:</span>
    <div className="login-captcha__row">
      <div className="login-captcha__image">
        <span className="login-captcha__text">{captchaText}</span>
      </div>
      <div className="login-captcha__actions">
        <button
          type="button"
          className="login-captcha__btn"
          onClick={onRefresh}
          aria-label="Refresh captcha"
        >
          <span className="material-icons-outlined">refresh</span>
        </button>
        <button
          type="button"
          className="login-captcha__btn"
          aria-label="Audio captcha"
        >
          <span className="material-icons-outlined">volume_up</span>
        </button>
      </div>
    </div>
    <Input
      placeholder="Enter Captcha Answer"
      value={answer}
      onChange={(e) => onAnswerChange(e.target.value)}
      className="login-card__input"
    />
    {errorMessage && <CaptionMessage variant="error">{errorMessage}</CaptionMessage>}
  </div>
);

const LoginPage = ({ onLogin }) => {
  const [loginType, setLoginType] = useState('citizen');
  const [inputValue, setInputValue] = useState('');
  const [captcha1, setCaptcha1] = useState(generateCaptcha());
  const [captchaAnswer1, setCaptchaAnswer1] = useState('');
  const [captcha1Error, setCaptcha1Error] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [captcha2, setCaptcha2] = useState('');
  const [captchaAnswer2, setCaptchaAnswer2] = useState('');
  const [otpTimer, setOtpTimer] = useState(0);

  useEffect(() => {
    if (otpTimer <= 0) return;
    const id = setInterval(() => {
      setOtpTimer((t) => (t <= 1 ? 0 : t - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [otpTimer]);

  const handleGetOtp = () => {
    if (!inputValue || !captchaAnswer1) return;
    if (captchaAnswer1 !== captcha1) {
      setCaptcha1Error('Incorrect captcha. Please try again.');
      setCaptchaAnswer1('');
      setCaptcha1(generateCaptcha());
      return;
    }
    setCaptcha1Error('');
    setOtpSent(true);
    setOtpTimer(60);
    setCaptcha2(generateCaptcha());
  };

  const handleLogin = () => {
    if (!otp || !captchaAnswer2) return;
    if (onLogin) onLogin();
  };

  const handleSwitchType = (type) => {
    setLoginType(type);
    setInputValue('');
    setCaptchaAnswer1('');
    setCaptcha1Error('');
    setOtpSent(false);
    setOtp('');
    setCaptchaAnswer2('');
    setOtpTimer(0);
    setCaptcha1(generateCaptcha());
  };

  const inputLabel =
    loginType === 'citizen'
      ? 'Mobile Number:'
      : 'BSK Login ID (Regd. Phone Number):';

  return (
    <div className="page-login">
      <NavigationBar variant="homepage" />

      <section className="login-content">
        <PageHeading subtitle="Citizen Services" title="Login" />

        <div className="login-body">
          {/* Left — eKhata document illustration */}
          <div className="login-image">
            <img
              src="/images/eswathu2.png"
              alt="e-Khata Document"
            />
          </div>

          {/* Right — Login form card */}
          <div className={`login-card${otpSent ? ' login-card--stretch' : ''}`}>
            {/* Radio toggle */}
            <div className="login-card__radios">
              <RadioButton
                label="Citizen login"
                name="loginType"
                value="citizen"
                checked={loginType === 'citizen'}
                onChange={() => handleSwitchType('citizen')}
              />
              <RadioButton
                label="GP Application login"
                name="loginType"
                value="gp"
                checked={loginType === 'gp'}
                onChange={() => handleSwitchType('gp')}
              />
            </div>

            {/* Mobile Number or BSK Login ID */}
            <Input
              label={inputLabel}
              placeholder="XXXXXXXXXX"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              frozen={otpSent}
              className="login-card__input"
              inputType="phone"
            />

            {/* Pre-OTP: Captcha + Get OTP */}
            {!otpSent && (
              <>
                <CaptchaBlock
                  captchaText={captcha1}
                  onRefresh={() => {
                    setCaptcha1(generateCaptcha());
                    setCaptchaAnswer1('');
                    setCaptcha1Error('');
                  }}
                  answer={captchaAnswer1}
                  onAnswerChange={(val) => {
                    setCaptchaAnswer1(val);
                    if (captcha1Error) setCaptcha1Error('');
                  }}
                  errorMessage={captcha1Error}
                />
                <Button
                  variant="primary"
                  onClick={handleGetOtp}
                  disabled={inputValue.length !== 10 || !captchaAnswer1}
                >
                  Get OTP
                </Button>
              </>
            )}

            {/* Post-OTP: disabled Get OTP, timer, OTP input, second Captcha, Login */}
            {otpSent && (
              <>
                <Button variant="primary" disabled>
                  Get OTP
                </Button>

                {otpTimer > 0 && (
                  <div className="login-card__otp-timer">
                    <span className="material-icons-outlined">error_outline</span>
                    <span>Please enter OTP within {otpTimer} seconds</span>
                  </div>
                )}

                <Input
                  label="Enter OTP:"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="login-card__input"
                />

                <CaptchaBlock
                  captchaText={captcha2}
                  onRefresh={() => {
                    setCaptcha2(generateCaptcha());
                    setCaptchaAnswer2('');
                  }}
                  answer={captchaAnswer2}
                  onAnswerChange={setCaptchaAnswer2}
                />

                <Button variant="primary" onClick={handleLogin}>
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer variant="homepage" />
    </div>
  );
};

export default LoginPage;
