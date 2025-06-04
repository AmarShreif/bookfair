import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllbookComponent } from './components/allbook/allbook.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { NotfondComponent } from './components/notfond/notfond.component';
import { DetailsComponent } from './components/details/details.component';
import { AuthorsBookComponent } from './components/authors-book/authors-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';

export const routes: Routes = [
{path:'',redirectTo:'Home',pathMatch:'full'},
{path:'Home',component:HomeComponent,title:'Home'},
{path:'all Book',component:AllbookComponent,title:'AllBook'},
{path:'Authors',component:AuthorsComponent,title:'Authors'},
{path:'Collections',component:CollectionsComponent,title:'Collections'},
{path:'Details/:id',component:DetailsComponent,title:'Details'},
{path:'authorsBook/:id',component:AuthorsBookComponent,title:'Authors Book'},
{path:'detailsBook/:id',component:DetailsBookComponent,title:'DetailsBook'},
{path:'**',component:NotfondComponent,title:'NotFond'}
];
