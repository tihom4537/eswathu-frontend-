// Property classifier decision tree data
// 15 question nodes, 20 result nodes (doc codes 11A-1 to 11B-5)
export const classifierNodes = [];
export const classifierResults = [];

// Classification documents data
// Source: Eswathu_new_categories_sheets_CLASSIFICATION_no_criteria.pdf
// Each entry: { id, category, label, documents: [{ name, required: 'COMPULSORY' | 'OPTIONAL' }] }

export const CLASSIFICATION_DATA = {
  "11A": [
    {
      id: "11A-1",
      label: "Grama Tana",
      documents: [
        { name: "Dishank/ Tahsildar Village Station Map", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "COMPULSORY" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed (Hakku Patra) / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-2",
      label: "Properties sanctioned under Housing Scheme of Government Housing Corporation/Housing Board",
      documents: [
        { name: "Title Deed of the Government / Possession Certificate / Sanction Order of Corporation or Board", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)", required: "COMPULSORY" },
      ]
    },
    {
      id: "11A-3",
      label: "Layout approved property of Urban Development Authority in Local Planning Area and Local Planning Authority's Layout Approval outside Local Planning Area",
      documents: [
        { name: "Land Conversion Order Certificate", required: "COMPULSORY" },
        { name: "Preliminary Layout Approval and Site Release Order / Final Layout Approval and Site Release Order", required: "COMPULSORY" },
        { name: "Approved Layout Plan", required: "COMPULSORY" },
        { name: "Site Allotment Letter / Possession Certificate", required: "OPTIONAL" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-4",
      label: "Layout approved property of Group / Mandal Panchayat on the outside of the Local Planning Area before 11.11.2014",
      documents: [
        { name: "Land Conversion Order Certificate", required: "COMPULSORY" },
        { name: "Confirmation letter from the competent authority outside the local planning area", required: "COMPULSORY" },
        { name: "Approved Layout Plan of Group / Mandal Panchayat", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Letter (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-5",
      label: "Property approved by the Group/Mandal Panchayat before 16.11.1992 in the Local Planning Area",
      documents: [
        { name: "Land Conversion Order Certificate", required: "COMPULSORY" },
        { name: "Title Deed", required: "OPTIONAL" },
        { name: "Approved Layout Plan", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-6",
      label: "Property maintained in Notified Area Committee / Notified Area Property prior to the period of Mandal Panchayat",
      documents: [
        { name: "Jamabandi Register / Mutation Register", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Other Documents (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-7",
      label: "KIADB / KSSIDC Industrial Layout Approved Property",
      documents: [
        { name: "KIADB / KSSIDC Land Acquisition Certificate", required: "COMPULSORY" },
        { name: "Industrial Area Layout Plan", required: "COMPULSORY" },
        { name: "Industrial Site Layout Plan", required: "COMPULSORY" },
        { name: "Industrial Site Allotment Letter", required: "COMPULSORY" },
        { name: "Industrial License Certificate", required: "OPTIONAL" },
        { name: "Permanent Registration Certificate / Letter of Incorporation", required: "OPTIONAL" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Letter (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-8",
      label: "Converted land property of constructed building after obtaining permission from Gram Panchayat between 16.11.1992 to 14.06.2013",
      documents: [
        { name: "Land Conversion Order Certificate", required: "COMPULSORY" },
        { name: "Gram Panchayat Building Permit / Gram Panchayat Approved Building Plan", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-9",
      label: "Property granted under Section 94C / 94CC / 94 of the Karnataka Land Revenue Act, 1964",
      documents: [
        { name: "Government Title Deed / Possession Certificate / Sanction Order / Certificate of Government", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15/16)", required: "COMPULSORY" },
        { name: "Sale Deed / Property Card / Inheritance Deed / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-10",
      label: "Rehabilitation Scheme Property",
      documents: [
        { name: "Government Title Deed / Possession Certificate", required: "COMPULSORY" },
        { name: "Approved Layout Plan", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-11",
      label: "Individual family property having Podi / Hissa number according to the registered partition deed (Dakshina Kannada and Udupi district)",
      documents: [
        { name: "Endorsement Letter of the Tahsildar / Land Conversion Order", required: "COMPULSORY" },
        { name: "Plan of Converted Land / Pahani", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Letter (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-12",
      label: "Gram Panchayat Layout Approved Property located Outside Local Planning Area from 11.11.2014 to 10.01.2025",
      documents: [
        { name: "Land Conversion Order", required: "COMPULSORY" },
        { name: "Preliminary Layout Approval and Site Release Order / Final Layout Approval and Site Release Order", required: "COMPULSORY" },
        { name: "Approved Layout Plan", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15)", required: "OPTIONAL" },
        { name: "Declaration letter of competent authority for land located outside the local planning area", required: "COMPULSORY" },
        { name: "Sale Deed / Inherited Property / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Letter (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-13",
      label: "Site / Building of Central Government / State Government / Local Bodies",
      documents: [
        { name: "RTC", required: "OPTIONAL" },
        { name: "Relinquishment Deed", required: "OPTIONAL" },
        { name: "Other Documents", required: "COMPULSORY" },
      ]
    },
    {
      id: "11A-14",
      label: "Property granted under Section 38A of the Karnataka Land Reforms Act 1961",
      documents: [
        { name: "Government Title Deed / Possession Certificate / Sanction Order / Certificate of Government", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (Form-15/16)", required: "COMPULSORY" },
        { name: "Sale Deed / Inheritance / Partition of Property / Gift Deed / Will / Title Deed / Release Deed / Transfer / Settlement / Court Order / Amalgamation / Partition Deed / Exchange / Other Deed (Mention)", required: "OPTIONAL" },
      ]
    },
    {
      id: "11A-15",
      label: "Site or Buildings of Corporation / Board / Limited / Authority",
      documents: [
        { name: "Land Acquisition Letter", required: "COMPULSORY" },
        { name: "Layout Plan", required: "OPTIONAL" },
        { name: "Other Documents", required: "COMPULSORY" },
      ]
    },
  ],

  "11B": [
    {
      id: "11B-1",
      label: "Buildings constructed on agricultural land or on converted land in contravention of the provisions of model building bye-laws",
      documents: [
        { name: "Registered Deed / Tax Payment Receipt (Before: 07.04.2025)", required: "COMPULSORY" },
        { name: "Electricity Bill (Before: 07.04.2025)", required: "COMPULSORY" },
        { name: "RTC", required: "COMPULSORY" },
        { name: "Land Conversion Order", required: "OPTIONAL" },
        { name: "Encumbrance Certificate (EC)", required: "COMPULSORY" },
      ]
    },
    {
      id: "11B-2",
      label: "Sites in converted / non-converted or agricultural land",
      documents: [
        { name: "Registered Deed", required: "COMPULSORY" },
        { name: "RTC", required: "COMPULSORY" },
        { name: "Land Conversion Order", required: "OPTIONAL" },
        { name: "Encumbrance Certificate (EC)", required: "COMPULSORY" },
      ]
    },
    {
      id: "11B-3",
      label: "Buildings constructed in the layout approved site in contravention of the provisions of the Model Building Bye-Laws or without obtaining a certificate of occupancy or completion",
      documents: [
        { name: "Registered Deed", required: "COMPULSORY" },
        { name: "Land Conversion Order", required: "COMPULSORY" },
        { name: "Layout Approved Order", required: "COMPULSORY" },
        { name: "Approved Layout Plan", required: "COMPULSORY" },
        { name: "Site Release Order", required: "COMPULSORY" },
        { name: "Encumbrance Certificate (EC)", required: "COMPULSORY" },
      ]
    },
    {
      id: "11B-4",
      label: "Sites on revenue land/converted land without layout approval, but with provision of basic amenities already transferred/to be transferred to Gram Panchayat under Section 17 of Karnataka Town & Country Planning Act, 1961",
      documents: [
        { name: "RTC", required: "COMPULSORY" },
        { name: "Registered Relinquishment Deed", required: "COMPULSORY" },
        { name: "Land Conversion Order", required: "OPTIONAL" },
        { name: "Encumbrance Certificate (EC)", required: "COMPULSORY" },
      ]
    },
    {
      id: "11B-5",
      label: "Converted Land / Deemed to be Converted Land (Single Site)",
      documents: [
        { name: "Land Conversion Order / Sanction Order", required: "COMPULSORY" },
      ]
    },
  ]
};