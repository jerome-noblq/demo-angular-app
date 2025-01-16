import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task.component';
import { CardComponent } from './shared/card/card.component';
import { UserTaskComponent } from './tasks/user-task/user-task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

// to fix this error remove standalone in app.componen.ts and imports.
// to start angular application in modules we need to change the main.ts file
// to render and fix error in ui we need to import the browsermodule in the directive
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent,
    UserTaskComponent,
    NewTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
