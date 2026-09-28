/**
 * NAYAN VOTE — Main Kiosk Application Controller
 * Handles Multi-Screen Flow, Voice & Touch Ballot, Language Translations,
 * and Biometric Verification for Vivan.
 */

// Candidate Ballot Register — Indian Electoral Parties & Candidates
const CANDIDATES = [
  {
    id: 1,
    name: "Rajesh K. Sharma",
    hindiName: "राजेश के. शर्मा",
    party: "Bharatiya Janata Party (BJP)",
    hindiParty: "भारतीय जनता पार्टी",
    partyCode: "BJP",
    partyClass: "party-bjp",
    badgeClass: "badge-bjp",
    symbolSvg: (typeof PARTY_SYMBOLS !== 'undefined' && PARTY_SYMBOLS.bjp) || '🪷',
    symbolName: "Lotus (कमल)",
    color: "#ff9933",
    avatarSvg: (typeof CANDIDATE_AVATARS !== 'undefined' && CANDIDATE_AVATARS.sharma) || '👨‍💼'
  },
  {
    id: 2,
    name: "Priya R. Patel",
    hindiName: "प्रिया आर. पटेल",
    party: "Indian National Congress (INC)",
    hindiParty: "भारतीय राष्ट्रीय कांग्रेस",
    partyCode: "Congress / INC",
    partyClass: "party-congress",
    badgeClass: "badge-congress",
    symbolSvg: (typeof PARTY_SYMBOLS !== 'undefined' && PARTY_SYMBOLS.congress) || '✋',
    symbolName: "Hand (हाथ)",
    color: "#0284c7",
    avatarSvg: (typeof CANDIDATE_AVATARS !== 'undefined' && CANDIDATE_AVATARS.patel) || '👩‍💼'
  },
  {
    id: 3,
    name: "Akhilesh V. Yadav",
    hindiName: "अखिलेश वी. यादव",
    party: "Samajwadi Party (SP / SAPA)",
    hindiParty: "समाजवादी पार्टी",
    partyCode: "SAPA / SP",
    partyClass: "party-sapa",
    badgeClass: "badge-sapa",
    symbolSvg: (typeof PARTY_SYMBOLS !== 'undefined' && PARTY_SYMBOLS.sapa) || '🚲',
    symbolName: "Bicycle (साइकिल)",
    color: "#dc2626",
    avatarSvg: (typeof CANDIDATE_AVATARS !== 'undefined' && CANDIDATE_AVATARS.yadav) || '👨‍🌾'
  },
  {
    id: 4,
    name: "Arvind K. Saxena",
    hindiName: "अरविंद के. सक्सेना",
    party: "Aam Aadmi Party (AAP)",
    hindiParty: "आम आदमी पार्टी",
    partyCode: "AAP",
    partyClass: "party-aap",
    badgeClass: "badge-aap",
    symbolSvg: (typeof PARTY_SYMBOLS !== 'undefined' && PARTY_SYMBOLS.aap) || '🧹',
    symbolName: "Broom (झाड़ू)",
    color: "#00a8e8",
    avatarSvg: (typeof CANDIDATE_AVATARS !== 'undefined' && CANDIDATE_AVATARS.saxena) || '👨‍🏫'
  },
  {
    id: 5,
    name: "Km. Maya Kumari",
    hindiName: "कु. माया कुमारी",
    party: "Bahujan Samaj Party (BSP)",
    hindiParty: "बहुजन समाज पार्टी",
    partyCode: "BSP",
    partyClass: "party-bsp",
    badgeClass: "badge-bsp",
    symbolSvg: (typeof PARTY_SYMBOLS !== 'undefined' && PARTY_SYMBOLS.bsp) || '🐘',
    symbolName: "Elephant (हाथी)",
    color: "#1d4ed8",
    avatarSvg: (typeof CANDIDATE_AVATARS !== 'undefined' && CANDIDATE_AVATARS.kumari) || '👩‍⚖️'
  },
  {
    id: 6,
    name: "None of the Above (NOTA)",
    hindiName: "उपरोक्त में से कोई नहीं",
    party: "Neutral / Rejection Ballot Option",
    hindiParty: "तटस्थ विकल्प (अस्वीकार)",
    partyCode: "NOTA",
    partyClass: "party-nota",
    badgeClass: "badge-nota",
    symbolSvg: (typeof PARTY_SYMBOLS !== 'undefined' && PARTY_SYMBOLS.nota) || '🚫',
    symbolName: "Neutral Ballot (अस्वीकार)",
    color: "#64748b",
    avatarSvg: (typeof CANDIDATE_AVATARS !== 'undefined' && CANDIDATE_AVATARS.nota) || '🗳️'
  }
];

// Multilingual Text & Voice Prompts
const TRANSLATIONS = {
  'en-US': {
    welcomeTitle: "Welcome to Nayan Vote",
    welcomeSubtitle: "India's Next-Generation Touchless & Biometric Voting Kiosk",
    audioInstruction: "Tap for Audio Instructions (English)",
    screen2Title: "Iris Scan Authentication",
    screen2Subtitle: "Please align your eyes within the scanner reticle",
    positionInstruction: "Hold steady at approximately 30cm from the lens",
    startScanBtn: "Start Iris Scan",
    retryBtn: "Retry Scan",
    verifiedTitle: "Identity Confirmed",
    verifiedSubtitle: "Voter biometrics authenticated against the national electoral roll.",
    mismatchTitle: "Identity Verification Failed",
    mismatchSubtitle: "Biometric signature did not match the enrolled voter record.",
    proceedToVote: "Proceed to Voting",
    chooseMethodTitle: "Select Voting Method",
    chooseMethodSubtitle: "Would you like to vote using touch or voice command?",
    touchVoting: "Touch Voting",
    touchVotingDesc: "Direct tap on large accessible digital ballot cards with confirmation prompts.",
    voiceVoting: "Voice-Based Voting",
    voiceVotingDesc: "Vote hands-free using spoken commands and assistive speech confirmation.",
    ballotTitle: "Official Ballot Paper",
    ballotSubtitle: "Select one candidate from the list below to cast your ballot.",
    voteCastSuccess: "Your Vote Has Been Cast Successfully!",
    voteCastSuccessSubtitle: "Cryptographic digital VVPAT receipt has been minted and secured.",
    voicePromptInstruct: "Say the Candidate Number or Name (e.g., 'Candidate 2' or 'Priya Nair')"
  },
  'hi-IN': {
    welcomeTitle: "नयन वोट में आपका स्वागत है",
    welcomeSubtitle: "भारत का अगली पीढ़ी का स्पर्शरहित एवं बायोमेट्रिक मतदान कियोस्क",
    audioInstruction: "ध्वनि निर्देशों के लिए टैप करें (हिंदी)",
    screen2Title: "आंख की पुतली (आईरिस) प्रमाणीकरण",
    screen2Subtitle: "कृपया स्कैनर के सामने अपनी आंखों को संरेखित करें",
    positionInstruction: "लेंस से लगभग 30 सेमी की दूरी पर स्थिर रहें",
    startScanBtn: "स्कैन शुरू करें",
    retryBtn: "पुनः प्रयास करें",
    verifiedTitle: "पहचान सत्यापित",
    verifiedSubtitle: "मतदाता बायोमेट्रिक्स का राष्ट्रीय मतदाता सूची से मिलान सफल।",
    mismatchTitle: "पहचान सत्यापन विफल",
    mismatchSubtitle: "बायोमेट्रिक हस्ताक्षर नामांकित मतदाता रिकॉर्ड से मेल नहीं खाता।",
    proceedToVote: "मतदान के लिए आगे बढ़ें",
    chooseMethodTitle: "मतदान का माध्यम चुनें",
    chooseMethodSubtitle: "क्या आप टच स्क्रीन या ध्वनि निर्देश से मतदान करना चाहते हैं?",
    touchVoting: "टच मतदान",
    touchVotingDesc: "बड़े डिजिटल मतपत्र कार्ड पर सीधे टैप करके मतदान करें।",
    voiceVoting: "ध्वनि आधारित मतदान",
    voiceVotingDesc: "बोलकर और ध्वनि पुष्टि के साथ स्पर्शमुक्त मतदान करें।",
    ballotTitle: "आधिकारिक मतपत्र",
    ballotSubtitle: "मतदान करने के लिए नीचे दी गई सूची में से किसी एक उम्मीदवार को चुनें।",
    voteCastSuccess: "आपका वोट सफलतापूर्वक दर्ज हो गया है!",
    voteCastSuccessSubtitle: "क्रिप्टोग्राफिक डिजिटल वीवीपैट रसीद सुरक्षित कर दी गई है।",
    voicePromptInstruct: "उम्मीदवार का नंबर या नाम बोलें (उदा. 'उम्मीदवार 1' या 'प्रिया नायर')"
  }
};

class KioskApp {
  constructor() {
    this.currentScreen = 'screen-welcome';
    this.selectedLanguage = 'en-US';
    this.selectedCandidate = null;
    this.verificationResult = null;
    this.voiceRecognition = null;
    this.isListeningVoice = false;
    this.speechRecognitionActive = false;
    this.textSizeMultiplier = 1;
    
    // Receipt Data
    this.lastReceipt = null;
  }

  init() {
    this.setupClock();
    this.bindEvents();
    this.renderBallot();
    this.setupSpeechRecognition();
    
    // Initialize Camera on Scanner Screen
    const video = document.getElementById('webcamVideo');
    const canvas = document.getElementById('scannerCanvas');
    if (window.biometricEngine && video && canvas) {
      window.biometricEngine.initCamera(video, canvas);
    }

    // Set initial language
    this.setLanguage('en-US');
  }

  // Real-time Header Clock
  setupClock() {
    const clockEl = document.getElementById('kioskClockTime');
    const updateTime = () => {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  // Event Listeners
  bindEvents() {
    // Language Buttons
    document.querySelectorAll('.language-btn-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const lang = card.getAttribute('data-lang');
        this.selectLanguage(lang);
        document.querySelectorAll('.language-btn-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        window.soundEngine.playClickTone();
      });
    });

    // Audio Instruction Bar in Screen 1
    const audioBtn = document.getElementById('audioInstructionBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const text = this.selectedLanguage === 'hi-IN' 
          ? "नयन वोट में आपका स्वागत है। कृपया मतदान शुरू करने के लिए आगे बढ़ें बटन दबाएं।"
          : "Welcome to Nayan Vote. Please tap the begin button to proceed with iris scan authentication.";
        window.soundEngine.speak(text, this.selectedLanguage);
      });
    }

    // Welcome Screen Continue Button
    const btnToScan = document.getElementById('btnProceedToScan');
    if (btnToScan) {
      btnToScan.addEventListener('click', () => {
        window.soundEngine.playClickTone();
        this.navigateTo('screen-scan');
        this.onEnterScanScreen();
      });
    }

    // Scan Trigger Button
    const btnTriggerScan = document.getElementById('btnTriggerScan');
    if (btnTriggerScan) {
      btnTriggerScan.addEventListener('click', () => {
        this.triggerIrisScan();
      });
    }

    // Scan Retry Button
    const btnRetryScan = document.getElementById('btnRetryScan');
    if (btnRetryScan) {
      btnRetryScan.addEventListener('click', () => {
        this.triggerIrisScan();
      });
    }

    // Proceed to Voting from Verification Screen
    const btnProceedToVoting = document.getElementById('btnProceedToVoting');
    if (btnProceedToVoting) {
      btnProceedToVoting.addEventListener('click', () => {
        window.soundEngine.playClickTone();
        this.navigateTo('screen-method');
        this.speakScreenPrompt('screen-method');
      });
    }

    // Method Selection: Touch Voting
    const btnTouchMethod = document.getElementById('btnSelectTouchMethod');
    if (btnTouchMethod) {
      btnTouchMethod.addEventListener('click', () => {
        window.soundEngine.playClickTone();
        this.navigateTo('screen-touch-ballot');
        this.speakScreenPrompt('screen-touch-ballot');
      });
    }

    // Method Selection: Voice Voting
    const btnVoiceMethod = document.getElementById('btnSelectVoiceMethod');
    if (btnVoiceMethod) {
      btnVoiceMethod.addEventListener('click', () => {
        window.soundEngine.playClickTone();
        this.navigateTo('screen-voice-ballot');
        this.startVoiceVotingSession();
      });
    }

    // Modal Confirmation Buttons
    const btnConfirmVote = document.getElementById('btnModalConfirmVote');
    const btnCancelVote = document.getElementById('btnModalCancelVote');
    if (btnConfirmVote) {
      btnConfirmVote.addEventListener('click', () => {
        this.confirmAndCastVote();
      });
    }
    if (btnCancelVote) {
      btnCancelVote.addEventListener('click', () => {
        document.getElementById('voteConfirmModal').classList.remove('active');
        window.soundEngine.playClickTone();
      });
    }

    // Print Receipt Button
    const btnPrintReceipt = document.getElementById('btnPrintReceipt');
    if (btnPrintReceipt) {
      btnPrintReceipt.addEventListener('click', () => {
        window.print();
      });
    }

    // Finish / Next Voter Button
    const btnFinishKiosk = document.getElementById('btnFinishKiosk');
    if (btnFinishKiosk) {
      btnFinishKiosk.addEventListener('click', () => {
        this.resetSession();
      });
    }

    // Accessibility Controls
    const btnContrast = document.getElementById('btnToggleContrast');
    if (btnContrast) {
      btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        window.soundEngine.playClickTone();
      });
    }

    const btnTextSize = document.getElementById('btnScaleText');
    if (btnTextSize) {
      btnTextSize.addEventListener('click', () => {
        this.textSizeMultiplier = this.textSizeMultiplier === 1 ? 1.25 : (this.textSizeMultiplier === 1.25 ? 1.4 : 1);
        document.documentElement.style.setProperty('--font-scale', this.textSizeMultiplier);
        window.soundEngine.playClickTone();
      });
    }

    const btnMute = document.getElementById('btnToggleAudio');
    if (btnMute) {
      btnMute.addEventListener('click', () => {
        const isMuted = window.soundEngine.toggleMute();
        btnMute.innerHTML = isMuted 
          ? '<i class="fa-solid fa-volume-xmark"></i><span>Muted</span>' 
          : '<i class="fa-solid fa-volume-high"></i><span>Voice On</span>';
      });
    }

    // Polling Officer SOS Call
    const btnSOS = document.getElementById('btnOfficerSOS');
    if (btnSOS) {
      btnSOS.addEventListener('click', () => {
        alert("🚨 Polling Officer Alerted: Presiding officer has been notified to assist at Kiosk #03.");
      });
    }

    // Developer / Simulator Toolbar Events
    this.bindDevToolbar();
  }

  bindDevToolbar() {
    // Verification Mode Selector (Vivan Pass vs Unknown User Fail)
    const modeSelect = document.getElementById('devVerificationMode');
    if (modeSelect) {
      modeSelect.addEventListener('change', (e) => {
        window.biometricEngine.verificationMode = e.target.value;
      });
    }

    // Direct Screen Jumper
    const screenSelect = document.getElementById('devScreenJump');
    if (screenSelect) {
      screenSelect.addEventListener('change', (e) => {
        this.navigateTo(e.target.value);
      });
    }

    // Live Calibration Button
    const btnCalibrate = document.getElementById('devCalibrateVivan');
    if (btnCalibrate) {
      btnCalibrate.addEventListener('click', () => {
        const identity = window.biometricEngine.enrollCurrentSubject("Vivan");
        alert(`✔ Live biometric calibration stored for ${identity.name}! Hash: ${identity.registeredHash.substring(0, 10)}...`);
      });
    }
  }

  // Screen Navigation Controller
  navigateTo(screenId) {
    document.querySelectorAll('.kiosk-screen').forEach(screen => {
      screen.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
    }

    // Sync dev toolbar dropdown
    const devSelect = document.getElementById('devScreenJump');
    if (devSelect) {
      devSelect.value = screenId;
    }
  }

  // Language Setter
  selectLanguage(langCode) {
    this.selectedLanguage = langCode;
    window.soundEngine.setLanguage(langCode);
    this.setLanguage(langCode);
  }

  setLanguage(langCode) {
    const t = TRANSLATIONS[langCode] || TRANSLATIONS['en-US'];

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText('tWelcomeTitle', t.welcomeTitle);
    setText('tWelcomeSubtitle', t.welcomeSubtitle);
    setText('tAudioInstruction', t.audioInstruction);
    setText('tScreen2Title', t.screen2Title);
    setText('tScreen2Subtitle', t.screen2Subtitle);
    setText('tPositionInstruction', t.positionInstruction);
    setText('btnTriggerScanText', t.startScanBtn);
    setText('tProceedToVoteText', t.proceedToVote);
    setText('tChooseMethodTitle', t.chooseMethodTitle);
    setText('tChooseMethodSubtitle', t.chooseMethodSubtitle);
    setText('tTouchVoting', t.touchVoting);
    setText('tTouchVotingDesc', t.touchVotingDesc);
    setText('tVoiceVoting', t.voiceVoting);
    setText('tVoiceVotingDesc', t.voiceVotingDesc);
    setText('tBallotTitle', t.ballotTitle);
    setText('tBallotSubtitle', t.ballotSubtitle);
    setText('tVoicePromptInstruct', t.voicePromptInstruct);
  }

  speakScreenPrompt(screenId) {
    const isHindi = this.selectedLanguage === 'hi-IN';
    let message = "";

    switch(screenId) {
      case 'screen-scan':
        message = isHindi 
          ? "कृपया आईरिस स्कैनर के सामने देखें और स्थिर रहें।" 
          : "Please position your eyes at the scanner and hold steady.";
        break;
      case 'screen-method':
        message = isHindi 
          ? "क्या आप टच या आवाज़ से मतदान करना चाहते हैं?" 
          : "Would you like to vote using touch or voice command?";
        break;
      case 'screen-touch-ballot':
        message = isHindi 
          ? "कृपया अपने पसंदीदा उम्मीदवार के बटन को दबाएं।" 
          : "Please select your candidate on the ballot card.";
        break;
    }

    if (message) {
      window.soundEngine.speak(message, this.selectedLanguage);
    }
  }

  // Logic when entering the Iris Scan screen
  onEnterScanScreen() {
    this.speakScreenPrompt('screen-scan');
    
    // Auto-trigger scan after 1.2s delay for seamless kiosk experience
    setTimeout(() => {
      this.triggerIrisScan();
    }, 1200);
  }

  // Run Iris Scanning Progress
  triggerIrisScan() {
    const progressFill = document.getElementById('scanProgressBar');
    const progressPercent = document.getElementById('scanProgressPercent');
    const attemptsBadge = document.getElementById('attemptsRemainingText');
    const scanStatusText = document.getElementById('scanStatusLiveText');
    const btnTrigger = document.getElementById('btnTriggerScan');
    const btnRetry = document.getElementById('btnRetryScan');

    if (btnTrigger) btnTrigger.style.display = 'none';
    if (btnRetry) btnRetry.style.display = 'none';
    if (scanStatusText) scanStatusText.textContent = "Acquiring biometric pupil focus...";

    window.biometricEngine.performScan(
      (progress) => {
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressPercent) progressPercent.textContent = `${Math.round(progress)}%`;
        if (progress > 30 && progress < 70 && scanStatusText) {
          scanStatusText.textContent = "Extracting 1,024-bit iris crypt patterns...";
        } else if (progress >= 70 && scanStatusText) {
          scanStatusText.textContent = "Verifying cryptographic token against electoral roll...";
        }
      },
      (result) => {
        this.verificationResult = result;
        this.displayVerificationResult(result);
      }
    );
  }

  // Display Verification Result (Screen 3)
  displayVerificationResult(result) {
    const resultCard = document.getElementById('verificationResultCard');
    const statusIcon = document.getElementById('resultStatusIcon');
    const statusHeading = document.getElementById('resultStatusHeading');
    const statusMessage = document.getElementById('resultStatusMessage');
    const profileBox = document.getElementById('voterProfilePreviewBox');
    const btnProceed = document.getElementById('btnProceedToVoting');
    const btnFailedRetry = document.getElementById('btnVerificationRetry');
    const btnFailedOfficer = document.getElementById('btnVerificationContactOfficer');
    const scoreBadge = document.getElementById('resultMatchScoreBadge');

    const isHindi = this.selectedLanguage === 'hi-IN';

    if (result.isVerified) {
      // SUCCESS STATE (Recognized Vivan)
      resultCard.classList.remove('failed');
      statusIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
      statusHeading.textContent = isHindi ? "पहचान की पुष्टि हो गई (विवान)" : "Identity Confirmed (Vivan)";
      statusMessage.textContent = isHindi 
        ? "मतदाता की पहचान सफलतापूर्वक सत्यापित हो गई है। मतदान के लिए आगे बढ़ें।" 
        : "Identity confirmed: Vivan. You are authorized to proceed to voting.";
      
      scoreBadge.textContent = `${result.matchScore}% Match (Verified)`;
      scoreBadge.style.color = "#34d399";
      
      profileBox.style.display = 'flex';
      btnProceed.style.display = 'inline-flex';
      btnFailedRetry.style.display = 'none';
      btnFailedOfficer.style.display = 'none';

      // Vocal confirmation
      const speech = isHindi 
        ? "पहचान की पुष्टि हो गई है। विवान, मतदान के लिए आगे बढ़ें।" 
        : "Identity confirmed. Hello Vivan, please proceed to voting.";
      window.soundEngine.speak(speech, this.selectedLanguage);

      this.navigateTo('screen-verified');
    } else {
      // FAILURE / MISMATCH STATE
      resultCard.classList.add('failed');
      statusIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
      statusHeading.textContent = isHindi ? "पहचान सत्यापन विफल" : "Identity Claim Issue";
      
      const triesLeft = result.attemptsRemaining;
      statusMessage.textContent = triesLeft > 0 
        ? (isHindi ? `स्कैन विफल रहा। आपके पास ${triesLeft} प्रयास शेष हैं।` : `Scan Failed. You have ${triesLeft} attempt(s) left.`)
        : (isHindi ? "पहचान सत्यापन विफल। कृपया पीठासीन अधिकारी से संपर्क करें।" : "Identity claim issue. Unable to verify. Please contact polling officer.");

      scoreBadge.textContent = `${result.matchScore}% Match (Mismatch)`;
      scoreBadge.style.color = "#f87171";

      profileBox.style.display = 'none';
      btnProceed.style.display = 'none';
      btnFailedRetry.style.display = triesLeft > 0 ? 'inline-flex' : 'none';
      btnFailedOfficer.style.display = 'inline-flex';

      // Update attempt count in Screen 2 for subsequent try
      const attemptsBadge = document.getElementById('attemptsRemainingText');
      if (attemptsBadge) {
        attemptsBadge.textContent = `${triesLeft} tries left`;
      }

      // Retry button on failure screen
      btnFailedRetry.onclick = () => {
        this.navigateTo('screen-scan');
        this.triggerIrisScan();
      };

      const failSpeech = isHindi 
        ? "पहचान सत्यापन विफल रहा।" 
        : (triesLeft > 0 ? `Scan failed. You have ${triesLeft} attempts left.` : "Unable to verify identity. Please contact polling officer.");
      window.soundEngine.speak(failSpeech, this.selectedLanguage);

      this.navigateTo('screen-verified');
    }
  }

  // Render Candidates Ballot List with Indian Political Parties & EVM Unit
  renderBallot() {
    const listContainer = document.getElementById('candidatesListContainer');
    if (!listContainer) return;

    listContainer.innerHTML = CANDIDATES.map(cand => `
      <div class="candidate-row-card ${cand.partyClass}" data-candidate-id="${cand.id}">
        <div class="candidate-left">
          <div class="candidate-number" style="border-color: ${cand.color};">${cand.id}</div>
          <div class="candidate-avatar" style="border-color: ${cand.color};">${cand.avatarSvg}</div>
          <div class="candidate-info">
            <h4>
              ${cand.name}
              <span class="candidate-hindi-name">(${cand.hindiName})</span>
            </h4>
            <div class="party-tag-wrap">
              <span class="party-badge ${cand.badgeClass}">
                <i class="fa-solid fa-flag"></i> ${cand.partyCode}
              </span>
              <span style="font-size: 0.85rem; color: var(--text-secondary);">${cand.party}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 20px;">
          <!-- Official Original Vector Party Election Symbol -->
          <div class="candidate-symbol-box" title="${cand.symbolName}">
            ${cand.symbolSvg}
          </div>

          <!-- Official Indian EVM Blue Button + Red LED Lamp -->
          <div class="evm-button-unit">
            <div class="evm-led" id="evm-led-${cand.id}"></div>
            <button class="btn-evm-blue" data-candidate-id="${cand.id}">
              <i class="fa-solid fa-square-check"></i>
              <span>VOTE</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click triggers with momentary EVM LED light-up effect
    listContainer.querySelectorAll('.btn-evm-blue, .candidate-row-card').forEach(item => {
      item.addEventListener('click', (e) => {
        const id = parseInt(item.getAttribute('data-candidate-id') || e.currentTarget.getAttribute('data-candidate-id'));
        const led = document.getElementById(`evm-led-${id}`);
        if (led) {
          led.classList.add('active');
          setTimeout(() => led.classList.remove('active'), 1200);
        }
        this.openVoteConfirmationModal(id);
      });
    });
  }

  // Open Confirmation Modal (Screen 5A Confirmation)
  openVoteConfirmationModal(candidateId) {
    const cand = CANDIDATES.find(c => c.id === candidateId);
    if (!cand) return;

    this.selectedCandidate = cand;
    window.soundEngine.playClickTone();

    const isHindi = this.selectedLanguage === 'hi-IN';
    const nameEl = document.getElementById('modalCandidateName');
    const partyEl = document.getElementById('modalCandidateParty');
    const symbolEl = document.getElementById('modalCandidateSymbol');
    const promptEl = document.getElementById('modalConfirmationPrompt');

    if (nameEl) nameEl.textContent = `${cand.name} (${cand.hindiName})`;
    if (partyEl) partyEl.textContent = `${cand.partyCode} • ${cand.party}`;
    if (symbolEl) symbolEl.innerHTML = cand.symbolSvg;
    if (promptEl) {
      promptEl.textContent = isHindi 
        ? `क्या आप निश्चित रूप से ${cand.name} (${cand.partyCode}) को वोट देना चाहते हैं?` 
        : `Are you sure you want to vote for ${cand.name} (${cand.partyCode})?`;
    }

    const modal = document.getElementById('voteConfirmModal');
    if (modal) modal.classList.add('active');

    // Spoken prompt
    const confirmPrompt = isHindi 
      ? `क्या आप निश्चित रूप से ${cand.name}, ${cand.partyCode} को वोट देना चाहते हैं? पुष्टि करने के लिए हाँ दबाएं।` 
      : `Are you sure you want to vote for ${cand.name}, ${cand.partyCode}? Press confirm to cast your vote.`;
    window.soundEngine.speak(confirmPrompt, this.selectedLanguage);
  }

  // Web Speech API Voice Voting Setup (Screen 5B)
  setupSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.voiceRecognition = new SpeechRecognition();
      this.voiceRecognition.continuous = true;
      this.voiceRecognition.interimResults = true;
      this.voiceRecognition.lang = this.selectedLanguage;

      this.voiceRecognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(r => r[0].transcript)
          .join('')
          .toLowerCase();

        this.handleVoiceTranscript(transcript);
      };

      this.voiceRecognition.onerror = (e) => {
        console.warn("Voice recognition notice:", e.error);
      };
    }
  }

  startVoiceVotingSession() {
    const transcriptEl = document.getElementById('voiceLiveTranscript');
    if (transcriptEl) transcriptEl.textContent = "Listening... Please say party name (e.g. BJP, Congress, SAPA) or candidate number.";

    const promptText = this.selectedLanguage === 'hi-IN'
      ? "कृपया उस पार्टी या उम्मीदवार का नाम बोलें जिसे आप वोट देना चाहते हैं।"
      : "Please say the party or candidate name you wish to vote for.";
    window.soundEngine.speak(promptText, this.selectedLanguage);

    if (this.voiceRecognition) {
      try {
        this.voiceRecognition.lang = this.selectedLanguage;
        this.voiceRecognition.start();
        this.speechRecognitionActive = true;
      } catch (e) {}
    }
  }

  handleVoiceTranscript(text) {
    const transcriptEl = document.getElementById('voiceLiveTranscript');
    if (transcriptEl) transcriptEl.textContent = `You said: "${text}"`;

    // Match Indian Political Parties and Candidates by Voice
    let matchedCand = null;
    if (text.includes("1") || text.includes("one") || text.includes("bjp") || text.includes("lotus") || text.includes("kamal") || text.includes("sharma") || text.includes("bhartiya")) {
      matchedCand = CANDIDATES[0];
    } else if (text.includes("2") || text.includes("two") || text.includes("congress") || text.includes("inc") || text.includes("hand") || text.includes("haath") || text.includes("hath") || text.includes("patel")) {
      matchedCand = CANDIDATES[1];
    } else if (text.includes("3") || text.includes("three") || text.includes("sapa") || text.includes("sp") || text.includes("samajwadi") || text.includes("cycle") || text.includes("bicycle") || text.includes("yadav")) {
      matchedCand = CANDIDATES[2];
    } else if (text.includes("4") || text.includes("four") || text.includes("aap") || text.includes("aam aadmi") || text.includes("broom") || text.includes("jhadu") || text.includes("saxena")) {
      matchedCand = CANDIDATES[3];
    } else if (text.includes("5") || text.includes("five") || text.includes("bsp") || text.includes("bahujan") || text.includes("elephant") || text.includes("hathi") || text.includes("maya") || text.includes("kumari")) {
      matchedCand = CANDIDATES[4];
    } else if (text.includes("6") || text.includes("six") || text.includes("nota") || text.includes("none") || text.includes("reject")) {
      matchedCand = CANDIDATES[5];
    }

    if (matchedCand) {
      if (this.voiceRecognition && this.speechRecognitionActive) {
        this.voiceRecognition.stop();
        this.speechRecognitionActive = false;
      }

      this.selectedCandidate = matchedCand;
      
      const confirmBox = document.getElementById('voiceConfirmationPromptBox');
      const candDisplay = document.getElementById('voiceMatchedCandidateDisplay');
      if (confirmBox) confirmBox.style.display = 'block';
      if (candDisplay) {
        candDisplay.textContent = `Candidate #${matchedCand.id}: ${matchedCand.name} (${matchedCand.partyCode} • ${matchedCand.symbol})`;
      }

      const spokenConfirm = this.selectedLanguage === 'hi-IN'
        ? `आपने ${matchedCand.partyCode}, ${matchedCand.name} कहा। वोट की पुष्टि करने के लिए हाँ बोलें या बटन दबाएं।`
        : `You said ${matchedCand.partyCode}, ${matchedCand.name}. Say Yes to confirm or No to go back.`;
      window.soundEngine.speak(spokenConfirm, this.selectedLanguage);
    }
  }

  // Confirm and cast final vote (Screen 6)
  confirmAndCastVote() {
    const modal = document.getElementById('voteConfirmModal');
    if (modal) modal.classList.remove('active');

    // 1. Play official EVM long beep tone
    window.soundEngine.playEVMConfirmationBeep();

    // 2. Generate Cryptographic Blockchain VVPAT Receipt
    const voter = (this.verificationResult && this.verificationResult.identity) 
      ? this.verificationResult.identity 
      : { name: "Vivan", voterId: "IND-2026-VIVAN-8849", constituency: "04 - Central District" };

    const cand = this.selectedCandidate || CANDIDATES[1]; // default fallback
    const timestamp = new Date().toLocaleString();
    const blockHash = "0x" + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join('');
    const txId = "VOT-" + Math.floor(10000000 + Math.random() * 90000000);

    this.lastReceipt = {
      voterName: voter.name,
      voterIdMasked: voter.voterId.replace(/(.{4})(.*)(.{4})/, '$1-XXXX-$3'),
      constituency: voter.constituency,
      candidateName: cand.name,
      partyName: cand.party,
      candidateSymbolSvg: cand.symbolSvg,
      candidateSymbolName: cand.symbolName,
      ballotNumber: cand.id,
      timestamp,
      blockHash,
      txId
    };

    // Render receipt on Screen 6
    this.renderReceipt(this.lastReceipt);

    // Spoken completion
    const isHindi = this.selectedLanguage === 'hi-IN';
    const successMsg = isHindi 
      ? "आपका वोट सफलतापूर्वक दर्ज हो गया है। कृपया अपनी डिजिटल रसीद एकत्र करें।" 
      : "Your vote has been cast successfully! Cryptographic receipt generated.";
    setTimeout(() => {
      window.soundEngine.speak(successMsg, this.selectedLanguage);
    }, 1200);

    this.navigateTo('screen-result');
  }

  // Render Receipt on Screen 6
  renderReceipt(r) {
    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText('receiptTxId', r.txId);
    setText('receiptTimestamp', r.timestamp);
    setText('receiptVoterName', r.voterName);
    setText('receiptVoterId', r.voterIdMasked);
    setText('receiptConstituency', r.constituency);
    setText('receiptCandidate', `#${r.ballotNumber} — ${r.candidateName}`);
    setText('receiptParty', r.partyName);
    
    const symEl = document.getElementById('receiptSymbol');
    if (symEl) {
      symEl.innerHTML = r.candidateSymbolSvg || '';
    }

    setText('receiptBlockHash', r.blockHash.substring(0, 24) + '...');
  }

  // Reset Session for the next citizen
  resetSession() {
    this.selectedCandidate = null;
    this.verificationResult = null;
    window.biometricEngine.resetAttempts();

    const confirmBox = document.getElementById('voiceConfirmationPromptBox');
    if (confirmBox) confirmBox.style.display = 'none';

    window.soundEngine.playClickTone();
    this.navigateTo('screen-welcome');
  }
}

// Global initialization on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.kioskApp = new KioskApp();
  window.kioskApp.init();
});
