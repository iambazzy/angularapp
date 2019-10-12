import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ContentBody } from "./Components/ContentBody/ContentBody.component";
import { HeaderComponent } from "./Components/Header/header.component";
import { MainBody } from "./Components/MainBody/MainBody.component";
import { sidemenu } from "./Components/SideMenu/sidemenu.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    sidemenu,
    ContentBody,
    MainBody
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
