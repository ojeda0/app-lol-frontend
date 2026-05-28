import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [

    {path:'', component: Home},
    {path:'inicio', component: Home},
    {path:'contacto', component: Contact}

];
