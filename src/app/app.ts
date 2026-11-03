import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html'
})
export class App {
  menuOpen = false;
  loading = true;

  constructor(private readonly router: Router) {
    window.setTimeout(() => this.loading = false, 850);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const route = this.router.routerState.snapshot.root.firstChild;
      const title = route?.data['title'] as string | undefined;
      const description = route?.data['description'] as string | undefined;
      if (title) document.title = title;
      if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    });
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
