import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { WindowReferenceService } from './window-reference.service';

@NgModule({
  declarations: [
    AppComponent,
    SpeechRecognitionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WindowReferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
