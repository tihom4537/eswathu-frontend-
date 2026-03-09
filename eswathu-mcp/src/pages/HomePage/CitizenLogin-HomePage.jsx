import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import PageHeading from '../../components/PageHeading/PageHeading';
import HomepageSection from '../../components/HomepageSection/HomepageSection';
import CardHomepage from '../../components/CardHomepage/CardHomepage';
import './CitizenLogin-HomePage.css';

const CitizenLoginHomePage = ({ onNavigate, username = '' }) => {
  const checkStatusHeader = (
    <div className="citizen-home__multi-header">
      <div className="citizen-home__multi-header-item">
        <span className="material-icons-outlined">image_search</span>
        <span>Check Status</span>
      </div>
      <span className="citizen-home__multi-header-sep">|</span>
      <div className="citizen-home__multi-header-item">
        <span className="material-icons-outlined">download</span>
        <span>Download</span>
      </div>
      <span className="citizen-home__multi-header-sep">|</span>
      <div className="citizen-home__multi-header-item">
        <span className="material-icons-outlined">print</span>
        <span>Print</span>
      </div>
    </div>
  );

  return (
    <div className="citizen-home-page">
      <NavigationBar
        variant="postLogin"
        username={username}
        onLogout={() => onNavigate && onNavigate('login')}
      />

      <main className="citizen-home-page__content">
        <PageHeading subtitle="All Citizen Services" title="What would you like to do today?" />

        {/* e-Khata — 5 cards in 2 rows */}
        <HomepageSection icon="file_copy" title="e-Khata">
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="add_circle_outline"
              title="Apply for New e-Khata"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
              onClick={() => onNavigate && onNavigate('new-application')}
            />
            <CardHomepage
              icon="search"
              title="Apply for e-Khata for properties existing on Panchatantra"
              description="If your property is listed in Panchatantra and tax is already being paid, you can proceed here without creating a new entry"
            />
            <CardHomepage
              icon="add_circle_outline"
              title="Apply for e-Khata for New layouts"
              description="If your property is listed in Panchatantra and tax is already being paid, you can proceed here without creating a new entry"
            />
          </div>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="add_circle_outline"
              title="Apply for e-Khata for New Apartments"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
            <CardHomepage
              icon="pending_actions"
              title="Complete Pending application"
              description="If your property is listed in Panchatantra and tax is already being paid, you can proceed here without creating a new entry"
            />
          </div>
        </HomepageSection>

        {/* Conversions — 3 cards */}
        <HomepageSection icon="file_copy" title="Conversions">
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="file_copy"
              title="Conversion of Form 11A to Form 11B"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
            <CardHomepage
              icon="file_copy"
              title="Conversion of Form 11A/11B to Apartment/Flats"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
            <CardHomepage
              icon="file_copy"
              title="Conversion of Form 11B from non-transact-able to transact-able"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
          </div>
        </HomepageSection>

        {/* Check Status | Download | Print — 3 cards */}
        <HomepageSection header={checkStatusHeader}>
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="image_search"
              title="Check Status of Application"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
            <CardHomepage
              icon="download"
              title="Download e-Khata"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
            <CardHomepage
              icon="print"
              title="Print e-Khata"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
          </div>
        </HomepageSection>

        {/* Mutation and Transfer Applications — 2 cards */}
        <HomepageSection icon="people" title="Mutation and Transfer Applications">
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="people"
              title="Mutation"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
            <CardHomepage
              icon="people"
              title="Transfer"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
          </div>
        </HomepageSection>

        {/* File Objections — 1 card */}
        <HomepageSection icon="error_outline" title="File Objections">
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="error_outline"
              title="Report an Objection"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
          </div>
        </HomepageSection>

        {/* Returned Applications — 1 card */}
        <HomepageSection icon="assignment_return" title="Returned applications (for modifications)">
          <div className="citizen-home-page__grid">
            <CardHomepage
              icon="assignment_return"
              title="Returned applications (for modifications)"
              description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
            />
          </div>
        </HomepageSection>
      </main>

      <Footer variant="postLogin" />
    </div>
  );
};

export default CitizenLoginHomePage;
