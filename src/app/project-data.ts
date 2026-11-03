export interface Project {
  slug: string;
  name: string;
  category: string;
  industry: string;
  summary: string;
  description: string;
  image: string;
  accent: string;
  year: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: 'northstar-commerce', name: 'Northstar Commerce', category: 'Commerce', industry: 'Retail & commerce',
    summary: 'A calmer, faster way to shop the considered home.',
    description: 'A concept commerce platform shaped around confident discovery, useful product detail, and a checkout that stays out of the way.',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85', accent: '#c4e6df', year: '2025',
    services: ['Product strategy', 'Experience design', 'Platform engineering'], technologies: ['Angular', 'Node.js', 'Stripe'],
    challenge: 'Bring a broad catalog into a focused shopping journey without losing the character of each collection.',
    solution: 'We designed a modular storefront with editorial discovery, responsive product storytelling, and a low-friction checkout flow.',
    features: ['Adaptive collection discovery', 'Live inventory states', 'Accessible one-page checkout']
  },
  {
    slug: 'pulse-health', name: 'Pulse Health', category: 'Health', industry: 'Digital health',
    summary: 'Connected care, made easier to navigate.',
    description: 'A sample care coordination experience that brings appointments, care teams, and patient-reported progress into one clear view.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85', accent: '#d8e6fa', year: '2025',
    services: ['Service design', 'UX/UI design', 'Application development'], technologies: ['Angular', 'NestJS', 'PostgreSQL'],
    challenge: 'Reduce the cognitive load of navigating care plans across multiple visits and care providers.',
    solution: 'We organized care around a simple timeline and designed accessible, privacy-minded interfaces for patients and teams.',
    features: ['Care-plan timeline', 'Appointment coordination', 'Accessible patient dashboard']
  },
  {
    slug: 'moneta-mobile', name: 'Moneta Mobile', category: 'Fintech', industry: 'Financial technology',
    summary: 'A more human interface for everyday money.',
    description: 'A fintech product concept that turns scattered spending signals into useful daily guidance and clear financial habits.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85', accent: '#d8d1ff', year: '2024',
    services: ['Product discovery', 'Interface design', 'Mobile engineering'], technologies: ['Flutter', 'Go', 'Plaid'],
    challenge: 'Make financial insights feel empowering rather than judgmental, while keeping critical actions obvious.',
    solution: 'We built a clear visual language for cash flow, paired with small next steps and strong controls for user privacy.',
    features: ['Cash-flow snapshots', 'Goal-based saving spaces', 'Contextual spending insights']
  },
  {
    slug: 'fieldhouse-living', name: 'Fieldhouse Living', category: 'Property', industry: 'Real estate',
    summary: 'A digital front door for finding a place to belong.',
    description: 'A real estate discovery platform concept pairing detailed property information with a more immersive neighborhood view.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', accent: '#eee1ce', year: '2024',
    services: ['Brand experience', 'Web application', 'Integration design'], technologies: ['Angular', 'Mapbox', 'Sanity'],
    challenge: 'Help people compare homes and neighborhoods without flattening the emotional side of choosing a place.',
    solution: 'We combined thoughtful search controls with rich imagery, walkable-area context, and saved comparison sets.',
    features: ['Map and list search', 'Saved home comparisons', 'Neighborhood profiles']
  },
  {
    slug: 'atlas-operations', name: 'Atlas Operations', category: 'Enterprise', industry: 'Enterprise software',
    summary: 'A shared operating picture for complex teams.',
    description: 'An ERP interface concept for distributed operations, uniting inventory, purchasing, and delivery signals in one system.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85', accent: '#d9e3ed', year: '2024',
    services: ['Workflow mapping', 'Design systems', 'Enterprise engineering'], technologies: ['Angular', '.NET', 'Azure'],
    challenge: 'Make high-volume operational data legible to specialists while respecting different team workflows.',
    solution: 'We developed a flexible workspace model with role-based dashboards, clear status hierarchy, and consistent patterns.',
    features: ['Role-aware workspaces', 'Cross-team order tracking', 'Operational reporting']
  },
  {
    slug: 'lumen-insights', name: 'Lumen Insights', category: 'AI & data', industry: 'Artificial intelligence',
    summary: 'From fragmented signals to a sharper point of view.',
    description: 'An AI-assisted research workspace concept designed to make source material traceable and team insights actionable.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85', accent: '#d7eaff', year: '2025',
    services: ['AI product strategy', 'Interaction design', 'Application development'], technologies: ['Python', 'FastAPI', 'Angular'],
    challenge: 'Help teams move faster with AI while preserving trust, context, and human judgment.',
    solution: 'We centered the experience on cited source material, reviewable summaries, and explicit human approval steps.',
    features: ['Source-linked synthesis', 'Collaborative research boards', 'Human review checkpoints']
  },
  {
    slug: 'table-story', name: 'Table Story', category: 'Mobile', industry: 'Food & hospitality',
    summary: 'A neighborhood food experience with good timing.',
    description: 'A food discovery and ordering concept connecting independent kitchens, curious diners, and thoughtful delivery updates.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85', accent: '#f0d7c6', year: '2024',
    services: ['Service design', 'Mobile product', 'Commerce engineering'], technologies: ['React Native', 'Node.js', 'Stripe'],
    challenge: 'Balance discovery, ordering, and delivery information in a time-sensitive mobile journey.',
    solution: 'We designed a neighborhood-first browse flow and an order timeline that keeps diners informed without noise.',
    features: ['Local chef discovery', 'Live order progress', 'Flexible pickup and delivery']
  },
  {
    slug: 'openclass-studio', name: 'Openclass Studio', category: 'Education', industry: 'Education technology',
    summary: 'A focused learning space built for momentum.',
    description: 'A learning platform concept pairing guided course paths with practical exercises and supportive peer feedback.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85', accent: '#d6e8d4', year: '2025',
    services: ['Learning experience design', 'Platform engineering', 'Accessibility'], technologies: ['Angular', 'Firebase', 'WebRTC'],
    challenge: 'Create a sense of progress and connection across self-paced learning without adding pressure.',
    solution: 'We shaped learning into small milestones, optional peer sessions, and a personal workspace for applied practice.',
    features: ['Guided learning paths', 'Peer review rooms', 'Progress and reflection journal']
  }
];
