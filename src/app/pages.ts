import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project, projects } from './project-data';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      this.element.nativeElement.classList.add('is-visible');
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.element.nativeElement.classList.add('is-visible');
        this.observer?.unobserve(this.element.nativeElement);
      }
    }, { threshold: 0.12 });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}

@Directive({ selector: '[appCount]', standalone: true })
export class CountDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private frame = 0;
  private started = false;

  ngOnInit(): void {
    const target = Number(this.element.nativeElement.getAttribute('appCount'));
    const numberNode = this.element.nativeElement.firstChild;
    if (!Number.isFinite(target) || !numberNode) return;
    const original = numberNode.textContent?.trim() ?? String(target);
    const digits = original.length;
    const render = (value: number): void => {
      numberNode.textContent = String(Math.round(value)).padStart(digits, '0');
    };
    const animate = (): void => {
      if (this.started) return;
      this.started = true;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        render(target);
        return;
      }
      const start = performance.now();
      const tick = (now: number): void => {
        const progress = Math.min((now - start) / 1100, 1);
        render(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) this.frame = requestAnimationFrame(tick);
      };
      this.frame = requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) {
      animate();
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate();
        this.observer?.disconnect();
      }
    }, { threshold: 0.4 });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
}

const sharedImports = [CommonModule, RouterLink, RevealDirective, CountDirective];

@Component({ selector: 'app-home', standalone: true, imports: sharedImports, templateUrl: './home.html' })
export class HomePage {
  readonly featured = [projects[0], projects[2], projects[5], projects[7]];
  slide = 0;
  moveSlide(direction: number): void { this.slide = (this.slide + direction + this.featured.length) % this.featured.length; }
}

@Component({ selector: 'app-about', standalone: true, imports: sharedImports, templateUrl: './about.html' })
export class AboutPage {
  readonly team = [
    { name: 'Maya Chen', role: 'Founder & Product Strategist', bio: 'Connects ambitious ideas to products people can use with confidence.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85' },
    { name: 'Jordan Ellis', role: 'Engineering Director', bio: 'Builds resilient platforms and the teams behind them.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85' },
    { name: 'Priya Raman', role: 'Design Lead', bio: 'Turns complex workflows into clear, quietly memorable experiences.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85' },
    { name: 'Theo Brooks', role: 'Principal Engineer', bio: 'Finds the elegant architecture beneath the hard problems.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85' }
  ];
  teamIndex = 0;
  moveTeam(direction: number): void { this.teamIndex = Math.max(0, Math.min(this.team.length - 2, this.teamIndex + direction)); }
}

@Component({ selector: 'app-projects', standalone: true, imports: sharedImports, templateUrl: './projects.html' })
export class ProjectsPage {
  readonly projects = projects;
  readonly categories = ['All work', ...new Set(projects.map((project) => project.category))];
  activeCategory = 'All work';
  get filteredProjects(): Project[] {
    return this.activeCategory === 'All work' ? this.projects : this.projects.filter((project) => project.category === this.activeCategory);
  }
  countCategory(category: string): number {
    return category === 'All work' ? this.projects.length : this.projects.filter((project) => project.category === category).length;
  }
  setCategory(category: string): void { this.activeCategory = category; }
}

@Component({ selector: 'app-project-detail', standalone: true, imports: sharedImports, templateUrl: './project-detail.html' })
export class ProjectDetailPage implements OnInit {
  project?: Project;
  constructor(private readonly route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.project = projects.find((item) => item.slug === params.get('slug'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (this.project) {
        document.title = `${this.project.name} | VT Visions Tech`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', this.project.description);
      }
    });
  }
}

@Component({ selector: 'app-contact', standalone: true, imports: [CommonModule, ReactiveFormsModule, RevealDirective], templateUrl: './contact.html' })
export class ContactPage {
  private readonly formBuilder = inject(FormBuilder);
  submitted = false;
  readonly inquiryForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    service: ['', Validators.required],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  submitInquiry(): void {
    this.inquiryForm.markAllAsTouched();
    if (this.inquiryForm.valid) this.submitted = true;
  }
}
