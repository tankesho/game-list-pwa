import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component'
import { IntroComponent } from './intro/intro.component';
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import { SearchComponent } from './search/search.component';
import { GameContainerComponent } from './list/game-container/game-container.component';
import { AddGameFormComponent } from './add-game-form/add-game-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,
    IntroComponent,
    ListComponent,
    GameComponent,
    SearchComponent,
    GameContainerComponent,
    AddGameFormComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
