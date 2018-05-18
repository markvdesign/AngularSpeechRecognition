import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { WindowReferenceService } from './window-reference.service';

@NgModule({
  declarations: [
    SpeechRecognitionComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [SpeechRecognitionComponent],
  providers: [WindowReferenceService],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SpeechRecognitionComponent, { injector: this.injector });
    customElements.define('speech-recognition', el);
  }
}
