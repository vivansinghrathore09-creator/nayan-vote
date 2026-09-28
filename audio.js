/**
 * NAYAN VOTE — Audio & Speech Synthesis Engine
 * Web Audio API Biometric Sound Effects & Web Speech API Voice Guidance
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.speechEnabled = true;
    this.currentLanguage = 'en-US';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play synthetic tone using oscillator
  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.15) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  // Biometric radar sweep blip
  playRadarBlip() {
    this.playTone(880, 'sine', 0.08, 0.1);
  }

  // Iris scanning laser pulse sound
  playScanPulse() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.12);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  // Iris Reticle Target Lock-on Sound
  playLockTone() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [1046.5, 1318.5, 1567.98].forEach((f, i) => {
      setTimeout(() => {
        this.playTone(f, 'triangle', 0.12, 0.2);
      }, i * 60);
    });
  }

  // Identity Verification Success Fanfare
  playSuccessTone() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const chords = [523.25, 659.25, 783.99, 1046.5]; // C E G C
    chords.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.35, 0.25);
      }, idx * 90);
    });
  }

  // Scan Failure Buzzer
  playErrorTone() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [220, 196].forEach((f, idx) => {
      setTimeout(() => {
        this.playTone(f, 'sawtooth', 0.25, 0.25);
      }, idx * 160);
    });
  }

  // Button Click / Tap feedback
  playClickTone() {
    this.playTone(600, 'sine', 0.04, 0.12);
  }

  // Official EVM Ballot Confirmation Beep (iconic long sustained confirmation beep)
  playEVMConfirmationBeep() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'square';
      osc.frequency.setValueAtTime(1000, now); // standard 1kHz EVM tone

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.setValueAtTime(0.2, now + 1.8);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 2.0);
    } catch (e) {}
  }

  // Speak Voice Prompt in target language using SpeechSynthesis
  speak(text, lang = null) {
    if (!this.speechEnabled || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel(); // cancel previous utterance

    const targetLang = lang || this.currentLanguage;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang;
    utterance.rate = 0.95; // clear and slightly slower for kiosk accessibility
    utterance.pitch = 1.0;

    // Try to match appropriate voice if available
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(targetLang.slice(0, 2))) || voices[0];
    if (voice) {
      utterance.voice = voice;
    }

    window.speechSynthesis.speak(utterance);
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  setLanguage(langCode) {
    this.currentLanguage = langCode;
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopSpeech();
    }
    return this.muted;
  }

  toggleSpeech() {
    this.speechEnabled = !this.speechEnabled;
    if (!this.speechEnabled) {
      this.stopSpeech();
    }
    return this.speechEnabled;
  }
}

// Export global instance
window.soundEngine = new SoundEngine();
