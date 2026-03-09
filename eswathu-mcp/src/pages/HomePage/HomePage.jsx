import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
import PageHeading from '../../components/PageHeading/PageHeading';
import HomepageSection from '../../components/HomepageSection/HomepageSection';
import CardHomepage from '../../components/CardHomepage/CardHomepage';
import HelpCards from '../../components/HelpCards/HelpCards';
import HelpCardList from '../../components/HelpCardList/HelpCardList';
import InfoBox from '../../components/InfoBox/InfoBox';
import './HomePage.css';

const CITIZEN_SERVICES_ITEMS = [
  { label: 'Get EKhata', path: '/get-ekhata' },
  { label: 'Citizen Pending Applications', path: '/pending-applications' },
  { label: 'Submitted Applications', path: '/submitted-applications' },
  { label: 'Objection Report', path: '/objection-report' },
  { label: 'Returned Applications for Modification', path: '/returned-applications' },
  { label: 'New Applications', path: '/new-applications' },
  { label: 'Download Khatha (Successful Payment)', path: '/download-khatha' },
];

const CLASSIFICATION_ITEMS = [
  'Properties with clear RTC (Record of Rights, Tenancy and Crops)',
  'Land with proper conversion order (if applicable)',
  'Approved layouts or sites within Gram Panchayat limits',
  'Eligible for bank loans, building licences, and all legal transactions',
  'Can be used to apply for all government welfare schemes',
];

const HomePage = ({ onNavigate }) => {
  const handleApplyNewEKhata = () => {
    onNavigate && onNavigate('login');
  };

  return (
    <div className="page-homepage">
      {/* 1. Navigation Bar */}
      <NavigationBar
        variant="homepage"
        citizenServicesItems={CITIZEN_SERVICES_ITEMS}
        onCitizenLogin={handleApplyNewEKhata}
        onDeptLogin={() => {}}
      />

      {/* 2. Carousel / Hero */}
      <Carousel
        slides={[
          {
            subtitle: 'eKhata - Your Digital Property Identity',
            heading: 'Your Property Records, Now Verified and Digital',
            description:
              'E-Swathu helps rural citizens in Karnataka get a legally recognised digital record of their residential property. Apply for your eKhata, check status, download documents — all in one place.',
            actions: (
              <>
                <Button variant="cta-filled" onClick={handleApplyNewEKhata}>
                  Apply for New E-Khata
                </Button>
                <Button variant="cta-outlined">Check Application Status</Button>
              </>
            ),
          },
        ]}
      />

      {/* 3. All Citizen Services */}
      <section className="hp-services">
        <div className="hp-services__inner">
          <PageHeading
            subtitle="All Citizen Services"
            title="What would you like to do today?"
          />

          <div className="hp-services__groups">
            {/* e-Khata */}
            <HomepageSection icon="file_copy" title="e-Khata">
              <div className="hp-card-grid">
                <CardHomepage
                  icon="add_circle_outline"
                  title="Apply for New e-Khata"
                  description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
                  onClick={handleApplyNewEKhata}
                />
                <CardHomepage
                  icon="search"
                  title="Apply for e-khata for properties existing on Panchatantra"
                  description="If your property is listed in Panchatantra and tax is already being paid, you can proceed here without creating a new entry"
                />
                <CardHomepage
                  icon="add_circle_outline"
                  title="Apply for e-khata for New layouts"
                  description="If your property is listed in Panchatantra and tax is already being paid, you can proceed here without creating a new entry"
                />
                <CardHomepage
                  icon="add_circle_outline"
                  title="Apply for e-khata for New Apartments"
                  description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
                />
                <CardHomepage
                  icon="pending_actions"
                  title="Complete Pending application"
                  description="If your property is listed in Panchatantra and tax is already being paid, you can proceed here without creating a new entry"
                />
              </div>
            </HomepageSection>

            {/* Conversions */}
            <HomepageSection icon="file_copy" title="Conversions">
              <div className="hp-card-grid">
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

            {/* Check Status | Download | Print */}
            <HomepageSection header={
              <>
                <span className="material-icons-outlined hp-section__icon">image_search</span>
                <span className="hp-section__title">Check Status</span>
                <span className="hp-section__title">|</span>
                <span className="material-icons-outlined hp-section__icon">download</span>
                <span className="hp-section__title">Download</span>
                <span className="hp-section__title">|</span>
                <span className="material-icons-outlined hp-section__icon">print</span>
                <span className="hp-section__title">Print</span>
              </>
            }>
              <div className="hp-card-grid">
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

            {/* Mutation and Transfer */}
            <HomepageSection icon="people" title="Mutation and Transfer Applications">
              <div className="hp-card-grid">
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

            {/* File Objections */}
            <HomepageSection icon="error_outline" title="File Objections">
              <div className="hp-card-grid">
                <CardHomepage
                  icon="error_outline"
                  title="Report an Objection"
                  description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
                />
              </div>
            </HomepageSection>

            {/* Returned Applications */}
            <HomepageSection icon="assignment_return" title="Returned applications (for modifications)">
              <div className="hp-card-grid">
                <CardHomepage
                  icon="assignment_return"
                  title="Returned applications (for modifications)"
                  description="If your property tax is not being paid at present, you must obtain a new e-Khata to make the payments"
                />
              </div>
            </HomepageSection>
          </div>
        </div>
      </section>

      {/* 4. Understanding E-Khata */}
      <section className="hp-ekhata">
        <div className="hp-ekhata__inner">
          <PageHeading
            subtitle="Understanding E-Khata"
            title="What is e-Khata and why do you need it?"
          />
          <div className="hp-ekhata__cards">
            <HelpCards
              icon="file_copy"
              title="What is eKhata ?"
              description="eKhata (ಇ-ಖಾತೆ) is a digital record of ownership for residential properties in rural Karnataka, issued by your Gram Panchayat through E-Swathu. It is the official proof that a property is registered in your name and your documentation required to pay property tax."
            />
            <HelpCards
              icon="file_copy"
              title="Why is it required?"
              description="You need e-Khata to pay property tax, sell or transfer your property, apply for bank loans using your property, obtain building permits, and for various government welfare schemes."
            />
            <HelpCards
              icon="person"
              title="Who can apply for e-Khata on e-Swathu ?"
              description="Any citizen who owns a residential property within a Gram Panchayat jurisdiction in Karnataka is eligible. This applies to properties in rural areas, not urban city corporation limits."
            />
            <HelpCards
              icon="file_copy"
              title="What documents do you need?"
              description="Sale deed and all other documents related to your property, Aadhaar card, and Encumbrance certificate from Kaveri (15 days validity)"
            />
          </div>
        </div>
      </section>

      {/* 5. Classification Types */}
      <section className="hp-classification">
        <div className="hp-classification__inner">
          <PageHeading
            subtitle="Understanding 11a and 11b"
            title="Two Types of Khata Classification"
            className="page-heading--light"
          />
          <p className="hp-classification__desc">
            Karnataka's panchayat land records use a classification system.
            Understanding which type applies to your property is the first and
            most important step before applying.
          </p>

          <div className="hp-classification__cards">
            <HelpCardList
              subtitle="Form 11A · Regular Khata"
              title="11A — Inside GramTrana Land"
              description="Issued for properties that are fully legal, approved, and have clear title. This is the standard form for properties that comply with all town planning, land use, and revenue rules."
              items={CLASSIFICATION_ITEMS}
            />
            <HelpCardList
              subtitle="Form 11B · Khata"
              title="11B — Outside GramTrana Land"
              description="Issued for properties where ownership is claimed but the land may have irregularities, such as agricultural land used for non-agricultural purposes without conversion, or layouts not formally approved."
              items={CLASSIFICATION_ITEMS}
            />
          </div>

          <InfoBox variant="red">
            <div>
              <strong>Not sure which applies to you?</strong>
              <p>
                When you begin your application, the system will guide you based
                on your property's documents. If your property was built with
                proper GP jurisdiction, apply for A-Khata. If there were any
                irregularities in construction or land records, B-Khata is the
                right starting point. Your GP staff can also guide you. You can
                also use the helpline number given below to get assistance with
                this.
              </p>
            </div>
          </InfoBox>
        </div>
      </section>

      {/* 6. Need Help */}
      <section className="hp-help">
        <div className="hp-help__inner">
          <PageHeading subtitle="Support" title="Need Help?" />
          <p className="hp-help__desc">
            We're here to guide you through every step.
          </p>
          <div className="hp-help__cards">
            <HelpCards
              icon="phone"
              title="Contact/Helpline Numbers"
              description="Speak to a support agent in Kannada or English. Available Monday to Saturday, 9 AM – 5 PM."
              buttonLabel="Call Support→"
              onButtonClick={() => {}}
            />
            <HelpCards
              icon="video_library"
              title="User Guides & Videos"
              description="Step-by-step guides in Kannada and English, including video tutorials for every service on this portal."
              buttonLabel="Browse Help Resources→"
              onButtonClick={() => {}}
            />
            <HelpCards
              icon="place"
              title="Visit Your Gram Panchayat/Ask your GP staff"
              description="Walk into your local GP office and ask for the PDO. They are trained to assist you with the online application process."
              buttonLabel="Find your GP office contacts→"
              onButtonClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* 7. Connected Services */}
      <section className="hp-connected">
        <div className="hp-connected__inner">
          <PageHeading
            subtitle="Connected Services"
            title="Related Websites and Portals and Useful Links"
          />
          <div className="hp-connected__cards">
            <HelpCards
              icon="public"
              title="Bhoomi — Land Records"
              description="Access comprehensive land and property records from the Bhoomi platform."
              buttonLabel="Visit Website→"
              onButtonClick={() => window.open('https://landrecords.karnataka.gov.in', '_blank', 'noopener')}
            />
            <HelpCards
              icon="public"
              title="Kaveri Online Services"
              description="Complete property registration services through Kaveri Online."
              buttonLabel="Visit Website→"
              onButtonClick={() => window.open('https://kaverionline.karnataka.gov.in', '_blank', 'noopener')}
            />
            <HelpCards
              icon="public"
              title="KSRSAC"
              description="Access spatial data and survey records from KSRSAC."
              buttonLabel="Visit Website→"
              onButtonClick={() => window.open('https://ksrsac.karnataka.gov.in', '_blank', 'noopener')}
            />
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <Footer variant="homepage" />
    </div>
  );
};

export default HomePage;

