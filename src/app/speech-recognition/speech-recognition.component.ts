import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';

import { WindowReferenceService } from '../window-reference.service';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SpeechRecognitionComponent implements OnInit {
  private _window: any;
  speechRecognition: SpeechRecognition;
  speechRecognitionStarted = false;
  displayTranscript = '';

  constructor(private zone: NgZone, windowRefService: WindowReferenceService) {
    this._window = windowRefService.nativeWindow;
  }

  ngOnInit() {
    this._window.SpeechRecognition = this._window.SpeechRecognition || this._window.webkitSpeechRecognition;
    this.speechRecognition = new this._window.SpeechRecognition();
    this.speechRecognition.interimResults = true;
    this.speechRecognition.lang = 'en-US';
  }

  startSpeech() {
    if (this.speechRecognitionStarted) {
      return;
    }
    this.speechRecognition.start();
    this.speechRecognitionStarted = true;
    this.speechRecognition.onresult = (ev) => {
      this.zone.run(() => {
        this.displayTranscript = ev.results[0][0].transcript;
      });
    };
  }

  stopSpeech() {
    this.speechRecognition.stop();
    this.speechRecognitionStarted = false;
  }

  clearSpeech() {
    this.displayTranscript = '';
  }
}
