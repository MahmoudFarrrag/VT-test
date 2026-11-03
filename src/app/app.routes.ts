import { Routes } from '@angular/router';
import { AboutPage, ContactPage, HomePage, ProjectDetailPage, ProjectsPage } from './pages';

export const routes: Routes = [
	{ path: '', component: HomePage, pathMatch: 'full', data: { title: 'VT Visions Tech | Digital products, thoughtfully engineered', description: 'We design and engineer digital products that move ambitious businesses forward.' } },
	{ path: 'about', component: AboutPage, data: { title: 'About | VT Visions Tech', description: 'Meet the people and principles behind VT Visions Tech.' } },
	{ path: 'projects', component: ProjectsPage, data: { title: 'Selected work | VT Visions Tech', description: 'Explore concept projects across commerce, health, fintech, AI, and more.' } },
	{ path: 'projects/:slug', component: ProjectDetailPage },
	{ path: 'contact', component: ContactPage, data: { title: 'Contact | VT Visions Tech', description: 'Tell us about the next thing you want to make possible.' } },
	{ path: '**', redirectTo: '' }
];
