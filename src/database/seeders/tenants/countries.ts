import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_countries").del();

  // Inserts seed entries
  await knex("master_countries").insert([
    {
      id: 1,
      name: "Afghanistan",
      iso_code: "AF",
    },
    {
      id: 2,
      name: "Åland Islands",
      iso_code: "AX",
    },
    {
      id: 3,
      name: "Albania",
      iso_code: "AL",
    },
    {
      id: 4,
      name: "Algeria",
      iso_code: "DZ",
    },
    {
      id: 5,
      name: "American Samoa",
      iso_code: "AS",
    },
    {
      id: 6,
      name: "Andorra",
      iso_code: "AD",
    },
    {
      id: 7,
      name: "Angola",
      iso_code: "AO",
    },
    {
      id: 8,
      name: "Anguilla",
      iso_code: "AI",
    },
    {
      id: 9,
      name: "Antigua and Barbuda",
      iso_code: "AG",
    },
    {
      id: 10,
      name: "Argentina",
      iso_code: "AR",
    },
    {
      id: 11,
      name: "Armenia",
      iso_code: "AM",
    },
    {
      id: 12,
      name: "Aruba",
      iso_code: "AW",
    },
    {
      id: 13,
      name: "Australia",
      iso_code: "AU",
    },
    {
      id: 14,
      name: "Austria",
      iso_code: "AT",
    },
    {
      id: 15,
      name: "Azerbaijan",
      iso_code: "AZ",
    },
    {
      id: 16,
      name: "Bahamas",
      iso_code: "BS",
    },
    {
      id: 17,
      name: "Bahrain",
      iso_code: "BH",
    },
    {
      id: 18,
      name: "Bangladesh",
      iso_code: "BD",
    },
    {
      id: 19,
      name: "Barbados",
      iso_code: "BB",
    },
    {
      id: 20,
      name: "Belarus",
      iso_code: "BY",
    },
    {
      id: 21,
      name: "Belgium",
      iso_code: "BE",
    },
    {
      id: 22,
      name: "Belize",
      iso_code: "BZ",
    },
    {
      id: 23,
      name: "Benin",
      iso_code: "BJ",
    },
    {
      id: 24,
      name: "Bermuda",
      iso_code: "BM",
    },
    {
      id: 25,
      name: "Bhutan",
      iso_code: "BT",
    },
    {
      id: 26,
      name: "Bolivia (Plurinational State of)",
      iso_code: "BO",
    },
    {
      id: 27,
      name: "Bonaire, Sint Eustatius and Saba",
      iso_code: "BQ",
    },
    {
      id: 28,
      name: "Bosnia and Herzegovina",
      iso_code: "BA",
    },
    {
      id: 29,
      name: "Botswana",
      iso_code: "BW",
    },
    {
      id: 30,
      name: "Bouvet Island",
      iso_code: "BV",
    },
    {
      id: 31,
      name: "Brazil",
      iso_code: "BR",
    },
    {
      id: 32,
      name: "British Indian Ocean Territory",
      iso_code: "IO",
    },
    {
      id: 33,
      name: "United States Minor Outlying Islands",
      iso_code: "UM",
    },
    {
      id: 34,
      name: "Virgin Islands (British)",
      iso_code: "VG",
    },
    {
      id: 35,
      name: "Virgin Islands (U.S.)",
      iso_code: "VI",
    },
    {
      id: 36,
      name: "Brunei Darussalam",
      iso_code: "BN",
    },
    {
      id: 37,
      name: "Bulgaria",
      iso_code: "BG",
    },
    {
      id: 38,
      name: "Burkina Faso",
      iso_code: "BF",
    },
    {
      id: 39,
      name: "Burundi",
      iso_code: "BI",
    },
    {
      id: 40,
      name: "Cambodia",
      iso_code: "KH",
    },
    {
      id: 41,
      name: "Cameroon",
      iso_code: "CM",
    },
    {
      id: 42,
      name: "Canada",
      iso_code: "CA",
    },
    {
      id: 43,
      name: "Cabo Verde",
      iso_code: "CV",
    },
    {
      id: 44,
      name: "Cayman Islands",
      iso_code: "KY",
    },
    {
      id: 45,
      name: "Central African Republic",
      iso_code: "CF",
    },
    {
      id: 46,
      name: "Chad",
      iso_code: "TD",
    },
    {
      id: 47,
      name: "Chile",
      iso_code: "CL",
    },
    {
      id: 48,
      name: "China",
      iso_code: "CN",
    },
    {
      id: 49,
      name: "Christmas Island",
      iso_code: "CX",
    },
    {
      id: 50,
      name: "Cocos (Keeling) Islands",
      iso_code: "CC",
    },
    {
      id: 51,
      name: "Colombia",
      iso_code: "CO",
    },
    {
      id: 52,
      name: "Comoros",
      iso_code: "KM",
    },
    {
      id: 53,
      name: "Congo",
      iso_code: "CG",
    },
    {
      id: 54,
      name: "Congo (Democratic Republic of the)",
      iso_code: "CD",
    },
    {
      id: 55,
      name: "Cook Islands",
      iso_code: "CK",
    },
    {
      id: 56,
      name: "Costa Rica",
      iso_code: "CR",
    },
    {
      id: 57,
      name: "Croatia",
      iso_code: "HR",
    },
    {
      id: 58,
      name: "Cuba",
      iso_code: "CU",
    },
    {
      id: 59,
      name: "Curaçao",
      iso_code: "CW",
    },
    {
      id: 60,
      name: "Cyprus",
      iso_code: "CY",
    },
    {
      id: 61,
      name: "Czech Republic",
      iso_code: "CZ",
    },
    {
      id: 62,
      name: "Denmark",
      iso_code: "DK",
    },
    {
      id: 63,
      name: "Djibouti",
      iso_code: "DJ",
    },
    {
      id: 64,
      name: "Dominica",
      iso_code: "DM",
    },
    {
      id: 65,
      name: "Dominican Republic",
      iso_code: "DO",
    },
    {
      id: 66,
      name: "Ecuador",
      iso_code: "EC",
    },
    {
      id: 67,
      name: "Egypt",
      iso_code: "EG",
    },
    {
      id: 68,
      name: "El Salvador",
      iso_code: "SV",
    },
    {
      id: 69,
      name: "Equatorial Guinea",
      iso_code: "GQ",
    },
    {
      id: 70,
      name: "Eritrea",
      iso_code: "ER",
    },
    {
      id: 71,
      name: "Estonia",
      iso_code: "EE",
    },
    {
      id: 72,
      name: "Ethiopia",
      iso_code: "ET",
    },
    {
      id: 73,
      name: "Falkland Islands (Malvinas)",
      iso_code: "FK",
    },
    {
      id: 74,
      name: "Faroe Islands",
      iso_code: "FO",
    },
    {
      id: 75,
      name: "Fiji",
      iso_code: "FJ",
    },
    {
      id: 76,
      name: "Finland",
      iso_code: "FI",
    },
    {
      id: 77,
      name: "France",
      iso_code: "FR",
    },
    {
      id: 78,
      name: "French Guiana",
      iso_code: "GF",
    },
    {
      id: 79,
      name: "French Polynesia",
      iso_code: "PF",
    },
    {
      id: 80,
      name: "French Southern Territories",
      iso_code: "TF",
    },
    {
      id: 81,
      name: "Gabon",
      iso_code: "GA",
    },
    {
      id: 82,
      name: "Gambia",
      iso_code: "GM",
    },
    {
      id: 83,
      name: "Georgia",
      iso_code: "GE",
    },
    {
      id: 84,
      name: "Germany",
      iso_code: "DE",
    },
    {
      id: 85,
      name: "Ghana",
      iso_code: "GH",
    },
    {
      id: 86,
      name: "Gibraltar",
      iso_code: "GI",
    },
    {
      id: 87,
      name: "Greece",
      iso_code: "GR",
    },
    {
      id: 88,
      name: "Greenland",
      iso_code: "GL",
    },
    {
      id: 89,
      name: "Grenada",
      iso_code: "GD",
    },
    {
      id: 90,
      name: "Guadeloupe",
      iso_code: "GP",
    },
    {
      id: 91,
      name: "Guam",
      iso_code: "GU",
    },
    {
      id: 92,
      name: "Guatemala",
      iso_code: "GT",
    },
    {
      id: 93,
      name: "Guernsey",
      iso_code: "GG",
    },
    {
      id: 94,
      name: "Guinea",
      iso_code: "GN",
    },
    {
      id: 95,
      name: "Guinea-Bissau",
      iso_code: "GW",
    },
    {
      id: 96,
      name: "Guyana",
      iso_code: "GY",
    },
    {
      id: 97,
      name: "Haiti",
      iso_code: "HT",
    },
    {
      id: 98,
      name: "Heard Island and McDonald Islands",
      iso_code: "HM",
    },
    {
      id: 99,
      name: "Holy See",
      iso_code: "VA",
    },
    {
      id: 100,
      name: "Honduras",
      iso_code: "HN",
    },
    {
      id: 101,
      name: "Hong Kong",
      iso_code: "HK",
    },
    {
      id: 102,
      name: "Hungary",
      iso_code: "HU",
    },
    {
      id: 103,
      name: "Iceland",
      iso_code: "IS",
    },
    {
      id: 104,
      name: "India",
      iso_code: "IN",
    },
    {
      id: 105,
      name: "Indonesia",
      iso_code: "ID",
    },
    {
      id: 106,
      name: "Côte d'Ivoire",
      iso_code: "CI",
    },
    {
      id: 107,
      name: "Iran (Islamic Republic of)",
      iso_code: "IR",
    },
    {
      id: 108,
      name: "Iraq",
      iso_code: "IQ",
    },
    {
      id: 109,
      name: "Ireland",
      iso_code: "IE",
    },
    {
      id: 110,
      name: "Isle of Man",
      iso_code: "IM",
    },
    {
      id: 111,
      name: "Israel",
      iso_code: "IL",
    },
    {
      id: 112,
      name: "Italy",
      iso_code: "IT",
    },
    {
      id: 113,
      name: "Jamaica",
      iso_code: "JM",
    },
    {
      id: 114,
      name: "Japan",
      iso_code: "JP",
    },
    {
      id: 115,
      name: "Jersey",
      iso_code: "JE",
    },
    {
      id: 116,
      name: "Jordan",
      iso_code: "JO",
    },
    {
      id: 117,
      name: "Kazakhstan",
      iso_code: "KZ",
    },
    {
      id: 118,
      name: "Kenya",
      iso_code: "KE",
    },
    {
      id: 119,
      name: "Kiribati",
      iso_code: "KI",
    },
    {
      id: 120,
      name: "Kuwait",
      iso_code: "KW",
    },
    {
      id: 121,
      name: "Kyrgyzstan",
      iso_code: "KG",
    },
    {
      id: 122,
      name: "Lao People's Democratic Republic",
      iso_code: "LA",
    },
    {
      id: 123,
      name: "Latvia",
      iso_code: "LV",
    },
    {
      id: 124,
      name: "Lebanon",
      iso_code: "LB",
    },
    {
      id: 125,
      name: "Lesotho",
      iso_code: "LS",
    },
    {
      id: 126,
      name: "Liberia",
      iso_code: "LR",
    },
    {
      id: 127,
      name: "Libya",
      iso_code: "LY",
    },
    {
      id: 128,
      name: "Liechtenstein",
      iso_code: "LI",
    },
    {
      id: 129,
      name: "Lithuania",
      iso_code: "LT",
    },
    {
      id: 130,
      name: "Luxembourg",
      iso_code: "LU",
    },
    {
      id: 131,
      name: "Macao",
      iso_code: "MO",
    },
    {
      id: 132,
      name: "Macedonia (the former Yugoslav Republic of)",
      iso_code: "MK",
    },
    {
      id: 133,
      name: "Madagascar",
      iso_code: "MG",
    },
    {
      id: 134,
      name: "Malawi",
      iso_code: "MW",
    },
    {
      id: 135,
      name: "Malaysia",
      iso_code: "MY",
    },
    {
      id: 136,
      name: "Maldives",
      iso_code: "MV",
    },
    {
      id: 137,
      name: "Mali",
      iso_code: "ML",
    },
    {
      id: 138,
      name: "Malta",
      iso_code: "MT",
    },
    {
      id: 139,
      name: "Marshall Islands",
      iso_code: "MH",
    },
    {
      id: 140,
      name: "Martinique",
      iso_code: "MQ",
    },
    {
      id: 141,
      name: "Mauritania",
      iso_code: "MR",
    },
    {
      id: 142,
      name: "Mauritius",
      iso_code: "MU",
    },
    {
      id: 143,
      name: "Mayotte",
      iso_code: "YT",
    },
    {
      id: 144,
      name: "Mexico",
      iso_code: "MX",
    },
    {
      id: 145,
      name: "Micronesia (Federated States of)",
      iso_code: "FM",
    },
    {
      id: 146,
      name: "Moldova (Republic of)",
      iso_code: "MD",
    },
    {
      id: 147,
      name: "Monaco",
      iso_code: "MC",
    },
    {
      id: 148,
      name: "Mongolia",
      iso_code: "MN",
    },
    {
      id: 149,
      name: "Montenegro",
      iso_code: "ME",
    },
    {
      id: 150,
      name: "Montserrat",
      iso_code: "MS",
    },
    {
      id: 151,
      name: "Morocco",
      iso_code: "MA",
    },
    {
      id: 152,
      name: "Mozambique",
      iso_code: "MZ",
    },
    {
      id: 153,
      name: "Myanmar",
      iso_code: "MM",
    },
    {
      id: 154,
      name: "Namibia",
      iso_code: "NA",
    },
    {
      id: 155,
      name: "Nauru",
      iso_code: "NR",
    },
    {
      id: 156,
      name: "Nepal",
      iso_code: "NP",
    },
    {
      id: 157,
      name: "Netherlands",
      iso_code: "NL",
    },
    {
      id: 158,
      name: "New Caledonia",
      iso_code: "NC",
    },
    {
      id: 159,
      name: "New Zealand",
      iso_code: "NZ",
    },
    {
      id: 160,
      name: "Nicaragua",
      iso_code: "NI",
    },
    {
      id: 161,
      name: "Niger",
      iso_code: "NE",
    },
    {
      id: 162,
      name: "Nigeria",
      iso_code: "NG",
    },
    {
      id: 163,
      name: "Niue",
      iso_code: "NU",
    },
    {
      id: 164,
      name: "Norfolk Island",
      iso_code: "NF",
    },
    {
      id: 165,
      name: "Korea (Democratic People's Republic of)",
      iso_code: "KP",
    },
    {
      id: 166,
      name: "Northern Mariana Islands",
      iso_code: "MP",
    },
    {
      id: 167,
      name: "Norway",
      iso_code: "NO",
    },
    {
      id: 168,
      name: "Oman",
      iso_code: "OM",
    },
    {
      id: 169,
      name: "Pakistan",
      iso_code: "PK",
    },
    {
      id: 170,
      name: "Palau",
      iso_code: "PW",
    },
    {
      id: 171,
      name: "Palestine, State of",
      iso_code: "PS",
    },
    {
      id: 172,
      name: "Panama",
      iso_code: "PA",
    },
    {
      id: 173,
      name: "Papua New Guinea",
      iso_code: "PG",
    },
    {
      id: 174,
      name: "Paraguay",
      iso_code: "PY",
    },
    {
      id: 175,
      name: "Peru",
      iso_code: "PE",
    },
    {
      id: 176,
      name: "Philippines",
      iso_code: "PH",
    },
    {
      id: 177,
      name: "Pitcairn",
      iso_code: "PN",
    },
    {
      id: 178,
      name: "Poland",
      iso_code: "PL",
    },
    {
      id: 179,
      name: "Portugal",
      iso_code: "PT",
    },
    {
      id: 180,
      name: "Puerto Rico",
      iso_code: "PR",
    },
    {
      id: 181,
      name: "Qatar",
      iso_code: "QA",
    },
    {
      id: 182,
      name: "Republic of Kosovo",
      iso_code: "XK",
    },
    {
      id: 183,
      name: "Réunion",
      iso_code: "RE",
    },
    {
      id: 184,
      name: "Romania",
      iso_code: "RO",
    },
    {
      id: 185,
      name: "Russian Federation",
      iso_code: "RU",
    },
    {
      id: 186,
      name: "Rwanda",
      iso_code: "RW",
    },
    {
      id: 187,
      name: "Saint Barthélemy",
      iso_code: "BL",
    },
    {
      id: 188,
      name: "Saint Helena, Ascension and Tristan da Cunha",
      iso_code: "SH",
    },
    {
      id: 189,
      name: "Saint Kitts and Nevis",
      iso_code: "KN",
    },
    {
      id: 190,
      name: "Saint Lucia",
      iso_code: "LC",
    },
    {
      id: 191,
      name: "Saint Martin (French part)",
      iso_code: "MF",
    },
    {
      id: 192,
      name: "Saint Pierre and Miquelon",
      iso_code: "PM",
    },
    {
      id: 193,
      name: "Saint Vincent and the Grenadines",
      iso_code: "VC",
    },
    {
      id: 194,
      name: "Samoa",
      iso_code: "WS",
    },
    {
      id: 195,
      name: "San Marino",
      iso_code: "SM",
    },
    {
      id: 196,
      name: "Sao Tome and Principe",
      iso_code: "ST",
    },
    {
      id: 197,
      name: "Saudi Arabia",
      iso_code: "SA",
    },
    {
      id: 198,
      name: "Senegal",
      iso_code: "SN",
    },
    {
      id: 199,
      name: "Serbia",
      iso_code: "RS",
    },
    {
      id: 200,
      name: "Seychelles",
      iso_code: "SC",
    },
    {
      id: 201,
      name: "Sierra Leone",
      iso_code: "SL",
    },
    {
      id: 202,
      name: "Singapore",
      iso_code: "SG",
    },
    {
      id: 203,
      name: "Sint Maarten (Dutch part)",
      iso_code: "SX",
    },
    {
      id: 204,
      name: "Slovakia",
      iso_code: "SK",
    },
    {
      id: 205,
      name: "Slovenia",
      iso_code: "SI",
    },
    {
      id: 206,
      name: "Solomon Islands",
      iso_code: "SB",
    },
    {
      id: 207,
      name: "Somalia",
      iso_code: "SO",
    },
    {
      id: 208,
      name: "South Africa",
      iso_code: "ZA",
    },
    {
      id: 209,
      name: "South Georgia and the South Sandwich Islands",
      iso_code: "GS",
    },
    {
      id: 210,
      name: "Korea (Republic of)",
      iso_code: "KR",
    },
    {
      id: 211,
      name: "South Sudan",
      iso_code: "SS",
    },
    {
      id: 212,
      name: "Spain",
      iso_code: "ES",
    },
    {
      id: 213,
      name: "Sri Lanka",
      iso_code: "LK",
    },
    {
      id: 214,
      name: "Sudan",
      iso_code: "SD",
    },
    {
      id: 215,
      name: "Suriname",
      iso_code: "SR",
    },
    {
      id: 216,
      name: "Svalbard and Jan Mayen",
      iso_code: "SJ",
    },
    {
      id: 217,
      name: "Swaziland",
      iso_code: "SZ",
    },
    {
      id: 218,
      name: "Sweden",
      iso_code: "SE",
    },
    {
      id: 219,
      name: "Switzerland",
      iso_code: "CH",
    },
    {
      id: 220,
      name: "Syrian Arab Republic",
      iso_code: "SY",
    },
    {
      id: 221,
      name: "Taiwan",
      iso_code: "TW",
    },
    {
      id: 222,
      name: "Tajikistan",
      iso_code: "TJ",
    },
    {
      id: 223,
      name: "Tanzania, United Republic of",
      iso_code: "TZ",
    },
    {
      id: 224,
      name: "Thailand",
      iso_code: "TH",
    },
    {
      id: 225,
      name: "Timor-Leste",
      iso_code: "TL",
    },
    {
      id: 226,
      name: "Togo",
      iso_code: "TG",
    },
    {
      id: 227,
      name: "Tokelau",
      iso_code: "TK",
    },
    {
      id: 228,
      name: "Tonga",
      iso_code: "TO",
    },
    {
      id: 229,
      name: "Trinidad and Tobago",
      iso_code: "TT",
    },
    {
      id: 230,
      name: "Tunisia",
      iso_code: "TN",
    },
    {
      id: 231,
      name: "Turkey",
      iso_code: "TR",
    },
    {
      id: 232,
      name: "Turkmenistan",
      iso_code: "TM",
    },
    {
      id: 233,
      name: "Turks and Caicos Islands",
      iso_code: "TC",
    },
    {
      id: 234,
      name: "Tuvalu",
      iso_code: "TV",
    },
    {
      id: 235,
      name: "Uganda",
      iso_code: "UG",
    },
    {
      id: 236,
      name: "Ukraine",
      iso_code: "UA",
    },
    {
      id: 237,
      name: "United Arab Emirates",
      iso_code: "AE",
    },
    {
      id: 238,
      name: "United Kingdom of Great Britain and Northern Ireland",
      iso_code: "GB",
    },
    {
      id: 239,
      name: "United States of America",
      iso_code: "US",
    },
    {
      id: 240,
      name: "Uruguay",
      iso_code: "UY",
    },
    {
      id: 241,
      name: "Uzbekistan",
      iso_code: "UZ",
    },
    {
      id: 242,
      name: "Vanuatu",
      iso_code: "VU",
    },
    {
      id: 243,
      name: "Venezuela (Bolivarian Republic of)",
      iso_code: "VE",
    },
    {
      id: 244,
      name: "Viet Nam",
      iso_code: "VN",
    },
    {
      id: 245,
      name: "Wallis and Futuna",
      iso_code: "WF",
    },
    {
      id: 246,
      name: "Western Sahara",
      iso_code: "EH",
    },
    {
      id: 247,
      name: "Yemen",
      iso_code: "YE",
    },
    {
      id: 248,
      name: "Zambia",
      iso_code: "ZM",
    },
    {
      id: 249,
      name: "Zimbabwe",
      iso_code: "ZW",
    },
  ]);
}
