/**
 * NAYAN VOTE — Authentic Election Commission of India Party Symbols & Candidate Avatars
 * Vector SVG representations with original iconography for BJP, Congress, SAPA, AAP, BSP & NOTA.
 */

const PARTY_SYMBOLS = {
  // 1. BJP — Official Lotus (कमल)
  bjp: `
    <svg viewBox="0 0 100 100" class="party-logo-svg bjp-lotus" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bjpSaffronGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FF9933"/>
          <stop offset="100%" stop-color="#E65100"/>
        </linearGradient>
        <linearGradient id="bjpGreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#138808"/>
          <stop offset="100%" stop-color="#0A5C04"/>
        </linearGradient>
      </defs>
      <!-- Center Crown Petal -->
      <path d="M50 14 C43 28, 43 46, 50 62 C57 46, 57 28, 50 14 Z" fill="url(#bjpSaffronGrad)" stroke="#B23B00" stroke-width="1.2"/>
      <!-- Inner Left Petal -->
      <path d="M48 24 C34 36, 30 50, 44 63 C40 50, 42 36, 48 24 Z" fill="url(#bjpSaffronGrad)" stroke="#B23B00" stroke-width="1.2"/>
      <!-- Inner Right Petal -->
      <path d="M52 24 C66 36, 70 50, 56 63 C60 50, 58 36, 52 24 Z" fill="url(#bjpSaffronGrad)" stroke="#B23B00" stroke-width="1.2"/>
      <!-- Outer Flared Left Petal -->
      <path d="M38 34 C20 46, 18 60, 36 65 C28 54, 30 44, 38 34 Z" fill="#FF7700" stroke="#B23B00" stroke-width="1.2"/>
      <!-- Outer Flared Right Petal -->
      <path d="M62 34 C80 46, 82 60, 64 65 C72 54, 70 44, 62 34 Z" fill="#FF7700" stroke="#B23B00" stroke-width="1.2"/>
      <!-- Calyx Base & Sacred Green Leaves -->
      <path d="M28 66 C36 63, 44 63, 50 64 C56 63, 64 63, 72 66 C66 73, 58 74, 50 73 C42 74, 34 73, 28 66 Z" fill="url(#bjpGreenGrad)" stroke="#063E02" stroke-width="1.2"/>
      <path d="M50 73 L50 86" stroke="#138808" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M38 78 Q50 83 62 78" stroke="#138808" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // 2. INC — Official Open Hand (हाथ का पंजा)
  congress: `
    <svg viewBox="0 0 100 100" class="party-logo-svg congress-hand" xmlns="http://www.w3.org/2000/svg">
      <!-- Palm and Fingers Outline in Indian National Congress Blue -->
      <path d="M36 44 L36 18 C36 14 41 14 41 18 L41 38 L43 14 C43 10 48 10 48 14 L48 38 L50 16 C50 12 55 12 55 16 L55 40 L57 22 C57 18 62 18 62 22 L62 52 C62 67 56 76 47 81 C37 81 32 72 32 60 L32 50 C28 50 25 46 27 42 C29 38 33 39 36 44 Z" fill="#FFFFFF" stroke="#004E89" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Natural Palm Line Contours -->
      <path d="M38 52 Q44 58 52 56" stroke="#94A3B8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M42 62 Q48 68 54 64" stroke="#94A3B8" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- Tricolor Wrist Cuff (Saffron, White, Green) -->
      <rect x="33" y="78" width="28" height="3.5" fill="#FF9933"/>
      <rect x="33" y="81.5" width="28" height="3" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="0.3"/>
      <rect x="33" y="84.5" width="28" height="3.5" fill="#138808"/>
    </svg>
  `,

  // 3. SAPA — Official Samajwadi Party Bicycle (साइकिल)
  sapa: `
    <svg viewBox="0 0 100 100" class="party-logo-svg sapa-cycle" xmlns="http://www.w3.org/2000/svg">
      <!-- Wheel Rims & Spokes in EVM Steel/Black -->
      <g stroke="#1F2937" stroke-width="2.2" fill="none">
        <!-- Rear Wheel -->
        <circle cx="26" cy="62" r="18"/>
        <circle cx="26" cy="62" r="3" fill="#DC2626"/>
        <line x1="26" y1="44" x2="26" y2="80" stroke-width="1"/>
        <line x1="8" y1="62" x2="44" y2="62" stroke-width="1"/>
        <line x1="13" y1="49" x2="39" y2="75" stroke-width="1"/>
        <line x1="13" y1="75" x2="39" y2="49" stroke-width="1"/>

        <!-- Front Wheel -->
        <circle cx="74" cy="62" r="18"/>
        <circle cx="74" cy="62" r="3" fill="#DC2626"/>
        <line x1="74" y1="44" x2="74" y2="80" stroke-width="1"/>
        <line x1="56" y1="62" x2="92" y2="62" stroke-width="1"/>
        <line x1="61" y1="49" x2="87" y2="75" stroke-width="1"/>
        <line x1="61" y1="75" x2="87" y2="49" stroke-width="1"/>
      </g>

      <!-- Signature Samajwadi Red Diamond Tubular Frame -->
      <g stroke="#DC2626" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M26 62 L48 62 L62 38 L37 38 Z"/>
        <path d="M48 62 L54 33"/> <!-- Seat tube -->
        <path d="M62 38 L74 62"/> <!-- Front fork -->
        <path d="M62 38 L64 26 L70 24"/> <!-- Handlebars -->
      </g>

      <!-- Saddle & Green Chainring Hub -->
      <path d="M46 33 Q54 30 62 33" stroke="#111827" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <circle cx="48" cy="62" r="5" fill="#16A34A" stroke="#111827" stroke-width="1.5"/>
      <line x1="48" y1="62" x2="52" y2="69" stroke="#111827" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="50" y="68" width="6" height="3" fill="#16A34A" rx="1"/>
    </svg>
  `,

  // 4. AAP — Official Aam Aadmi Party Broom (झाड़ू)
  aap: `
    <svg viewBox="0 0 100 100" class="party-logo-svg aap-broom" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-32 50 50)">
        <!-- Cylindrical Wooden Handle -->
        <rect x="47" y="10" width="6" height="36" rx="2" fill="#92400E" stroke="#78350F" stroke-width="1.5"/>
        <line x1="47" y1="18" x2="53" y2="18" stroke="#D97706" stroke-width="1"/>
        <line x1="47" y1="26" x2="53" y2="26" stroke="#D97706" stroke-width="1"/>
        <line x1="47" y1="34" x2="53" y2="34" stroke="#D97706" stroke-width="1"/>
        
        <!-- Blue AAP Wire Binding Bands -->
        <rect x="44" y="42" width="12" height="4" rx="1" fill="#0284C7" stroke="#0369A1"/>
        <rect x="43" y="47" width="14" height="4" rx="1" fill="#0284C7" stroke="#0369A1"/>

        <!-- Flared Golden Straw Bristles -->
        <path d="M43 52 L26 88 C36 93, 64 93, 74 88 L57 52 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="2" stroke-linejoin="round"/>
        <!-- Straw Strands Detail -->
        <line x1="36" y1="89" x2="45" y2="53" stroke="#B45309" stroke-width="1.4"/>
        <line x1="44" y1="91" x2="48" y2="53" stroke="#B45309" stroke-width="1.4"/>
        <line x1="52" y1="91" x2="52" y2="53" stroke="#B45309" stroke-width="1.4"/>
        <line x1="60" y1="90" x2="55" y2="53" stroke="#B45309" stroke-width="1.4"/>
        <line x1="68" y1="87" x2="58" y2="53" stroke="#B45309" stroke-width="1.4"/>
      </g>
    </svg>
  `,

  // 5. BSP — Official Bahujan Samaj Party Elephant (हाथी)
  bsp: `
    <svg viewBox="0 0 100 100" class="party-logo-svg bsp-elephant" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bspBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2563EB"/>
          <stop offset="100%" stop-color="#1E3A8A"/>
        </linearGradient>
      </defs>
      <!-- Standing Elephant in official ECI profile facing left -->
      <path d="M42 28 C34 28, 26 33, 24 40 C22 46, 20 54, 15 62 C13 65, 11 72, 14 74 C18 76, 21 71, 23 65 C24 61, 25 57, 26 53 C28 55, 30 58, 30 63 L28 84 L38 84 L39 67 C43 67, 47 67, 49 67 L50 84 L60 84 L61 65 C68 65, 74 64, 76 61 L76 84 L86 84 L86 58 C90 56, 92 50, 92 44 C92 35, 82 31, 70 29 C58 27, 48 27, 42 28 Z" fill="url(#bspBlueGrad)" stroke="#0F172A" stroke-width="1.5" stroke-linejoin="round"/>
      <!-- Elephant Flapped Ear -->
      <path d="M38 32 C33 37, 33 48, 38 52 C43 54, 47 52, 47 46 C47 39, 45 32, 38 32 Z" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.2"/>
      <!-- White Curved Tusk -->
      <path d="M24 55 C19 55, 17 59, 22 61 C26 62, 27 59, 27 57 Z" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
      <!-- Eye -->
      <circle cx="32" cy="38" r="2.2" fill="#FFFFFF"/>
      <circle cx="32" cy="38" r="1" fill="#0F172A"/>
      <!-- Tail -->
      <path d="M92 48 Q94 62 90 70" stroke="#1E3A8A" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // 6. NOTA — Official ECI None of the Above Stamped Ballot (अस्वीकार)
  nota: `
    <svg viewBox="0 0 100 100" class="party-logo-svg nota-ballot" xmlns="http://www.w3.org/2000/svg">
      <!-- White Ballot Paper -->
      <rect x="20" y="14" width="60" height="72" rx="5" fill="#FFFFFF" stroke="#334155" stroke-width="3"/>
      <!-- Horizontal Ballot Option Rows -->
      <line x1="28" y1="28" x2="72" y2="28" stroke="#94A3B8" stroke-width="2"/>
      <line x1="28" y1="40" x2="72" y2="40" stroke="#94A3B8" stroke-width="2"/>
      <line x1="28" y1="52" x2="72" y2="52" stroke="#94A3B8" stroke-width="2"/>
      <line x1="28" y1="64" x2="72" y2="64" stroke="#94A3B8" stroke-width="2"/>
      <!-- Bold Official Red Cross (X) Rejection Stamp -->
      <path d="M26 22 L74 78 M74 22 L26 78" stroke="#DC2626" stroke-width="7" stroke-linecap="round"/>
    </svg>
  `
};

// Culturally Authentic Vector Politician Portraits
const CANDIDATE_AVATARS = {
  // Rajesh K. Sharma — Saffron Nehru Vest, Glasses & Tilak (BJP)
  sharma: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1e293b"/>
      <!-- Saffron Nehru Jacket / Kurta -->
      <path d="M22 90 C22 68, 34 62, 50 62 C66 62, 78 68, 78 90 Z" fill="#FF9933"/>
      <path d="M42 62 L50 78 L58 62 Z" fill="#FFFFFF"/>
      <line x1="50" y1="78" x2="50" y2="90" stroke="#E65100" stroke-width="2"/>
      <!-- Head & Neck -->
      <rect x="44" y="52" width="12" height="14" fill="#FBBF24" rx="4"/>
      <ellipse cx="50" cy="40" rx="18" ry="22" fill="#FDE68A"/>
      <!-- Hair -->
      <path d="M32 36 C32 24, 40 18, 50 18 C60 18, 68 24, 68 36 C64 30, 56 26, 50 26 C44 26, 36 30, 32 36 Z" fill="#334155"/>
      <!-- Saffron Tilak -->
      <path d="M49 27 L51 27 L51 34 L49 34 Z" fill="#DC2626"/>
      <circle cx="50" cy="36" r="1" fill="#F59E0B"/>
      <!-- Glasses -->
      <rect x="38" y="36" width="10" height="7" rx="2" fill="none" stroke="#1E293B" stroke-width="1.8"/>
      <rect x="52" y="36" width="10" height="7" rx="2" fill="none" stroke="#1E293B" stroke-width="1.8"/>
      <line x1="48" y1="39" x2="52" y2="39" stroke="#1E293B" stroke-width="1.8"/>
    </svg>
  `,

  // Priya R. Patel — Congress Blue & White Khadi Sari (INC)
  patel: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1e293b"/>
      <!-- Congress Blue Sari Pallu -->
      <path d="M22 90 C22 68, 34 62, 50 62 C66 62, 78 68, 78 90 Z" fill="#FFFFFF"/>
      <path d="M26 90 C34 74, 44 64, 64 63 L74 74 L68 90 Z" fill="#0284C7"/>
      <!-- Head & Hair -->
      <ellipse cx="50" cy="38" rx="22" ry="24" fill="#1E293B"/>
      <rect x="44" y="52" width="12" height="14" fill="#FBBF24" rx="4"/>
      <ellipse cx="50" cy="42" rx="17" ry="20" fill="#FDE68A"/>
      <!-- Hair parting and Bindi -->
      <path d="M33 38 C35 28, 42 24, 50 25 C58 24, 65 28, 67 38 C62 32, 54 30, 50 34 C46 30, 38 32, 33 38 Z" fill="#1E293B"/>
      <circle cx="50" cy="36" r="1.5" fill="#DC2626"/>
      <!-- Eyes & Smile -->
      <circle cx="43" cy="42" r="1.8" fill="#1E293B"/>
      <circle cx="57" cy="42" r="1.8" fill="#1E293B"/>
      <path d="M46 49 Q50 52 54 49" stroke="#B45309" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // Akhilesh V. Yadav — Iconic Samajwadi Red Cap (Lal Topi) & White Kurta (SAPA)
  yadav: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1e293b"/>
      <!-- White Kurta with Black Jacket Collar -->
      <path d="M22 90 C22 68, 34 62, 50 62 C66 62, 78 68, 78 90 Z" fill="#F8FAFC"/>
      <path d="M30 90 L42 66 L50 78 L58 66 L70 90 Z" fill="#1E293B"/>
      <!-- Head -->
      <rect x="44" y="52" width="12" height="14" fill="#FBBF24" rx="4"/>
      <ellipse cx="50" cy="42" rx="18" ry="20" fill="#FDE68A"/>
      <!-- Samajwadi Famous Red Cap (लाल टोपी) -->
      <path d="M30 30 C34 16, 66 16, 70 30 L74 34 L26 34 Z" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
      <ellipse cx="50" cy="34" rx="24" ry="4" fill="#B91C1C"/>
      <!-- Facial Features -->
      <circle cx="43" cy="42" r="1.8" fill="#1E293B"/>
      <circle cx="57" cy="42" r="1.8" fill="#1E293B"/>
      <path d="M46 51 Q50 54 54 51" stroke="#B45309" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // Arvind K. Saxena — Famous White AAP Gandhi Topi & Blue Sweater (AAP)
  saxena: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1e293b"/>
      <!-- Blue Woolen Sweater / Muffler -->
      <path d="M22 90 C22 68, 34 62, 50 62 C66 62, 78 68, 78 90 Z" fill="#0284C7"/>
      <path d="M36 62 Q50 72 64 62" stroke="#78350F" stroke-width="6" fill="none" stroke-linecap="round"/>
      <!-- Head -->
      <rect x="44" y="52" width="12" height="14" fill="#FBBF24" rx="4"/>
      <ellipse cx="50" cy="42" rx="17" ry="19" fill="#FDE68A"/>
      <!-- White AAP Gandhi Cap with subtle text line -->
      <path d="M30 32 C34 18, 66 18, 70 32 L74 35 L26 35 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
      <rect x="28" y="32" width="44" height="4" fill="#0284C7" opacity="0.8"/>
      <!-- Glasses & Mustache -->
      <rect x="38" y="38" width="10" height="7" rx="2" fill="none" stroke="#1E293B" stroke-width="1.8"/>
      <rect x="52" y="38" width="10" height="7" rx="2" fill="none" stroke="#1E293B" stroke-width="1.8"/>
      <line x1="48" y1="41" x2="52" y2="41" stroke="#1E293B" stroke-width="1.8"/>
      <path d="M44 48 Q50 49 56 48" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // Km. Maya Kumari — BSP Royal Blue Blazer & Dignified Portrait (BSP)
  kumari: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1e293b"/>
      <!-- BSP Royal Blue Coat / Blazer -->
      <path d="M22 90 C22 68, 34 62, 50 62 C66 62, 78 68, 78 90 Z" fill="#1D4ED8"/>
      <path d="M42 62 L50 76 L58 62 Z" fill="#FEF08A"/>
      <!-- Head & Short Cropped Hair -->
      <ellipse cx="50" cy="38" rx="21" ry="23" fill="#1E293B"/>
      <rect x="44" y="52" width="12" height="14" fill="#FBBF24" rx="4"/>
      <ellipse cx="50" cy="42" rx="17" ry="19" fill="#FDE68A"/>
      <path d="M33 34 C36 26, 44 23, 50 23 C56 23, 64 26, 67 34 C63 30, 56 28, 50 29 C44 28, 37 30, 33 34 Z" fill="#1E293B"/>
      <!-- Features & Earrings -->
      <circle cx="43" cy="42" r="1.8" fill="#1E293B"/>
      <circle cx="57" cy="42" r="1.8" fill="#1E293B"/>
      <circle cx="31" cy="44" r="2.5" fill="#F59E0B"/>
      <circle cx="69" cy="44" r="2.5" fill="#F59E0B"/>
      <path d="M46 51 Q50 53 54 51" stroke="#B45309" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // NOTA — Official EVM Ballot Box with Ballot Drop (तटस्थ)
  nota: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#334155"/>
      <!-- Steel EVM Ballot Box -->
      <rect x="26" y="44" width="48" height="42" rx="4" fill="#475569" stroke="#64748B" stroke-width="2"/>
      <rect x="22" y="40" width="56" height="8" rx="2" fill="#1E293B"/>
      <rect x="42" y="42" width="16" height="3" rx="1" fill="#020617"/>
      <!-- Ballot Paper Slipping In -->
      <rect x="44" y="24" width="12" height="20" rx="1" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>
      <path d="M47 30 L53 36 M53 30 L47 36" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `
};

window.PARTY_SYMBOLS = PARTY_SYMBOLS;
window.CANDIDATE_AVATARS = CANDIDATE_AVATARS;
