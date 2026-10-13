export interface ServiceDetailExtra {
  tagline: string;
  stats: { label: string; value: string }[];
  tools: string[];
  capabilities: {
    title: string;
    description: string;
    icon: string;
  }[];
  processPhases: {
    phase: string;
    duration: string;
    title: string;
    summary: string;
    deliverable: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  matchedProjectId: string;
}

export const SERVICE_DETAILS_DATA: Record<string, ServiceDetailExtra> = {
  'web-design': {
    tagline: 'High-performance websites engineered for brand authority, seamless responsive UX, and high conversion velocity.',
    stats: [
      { label: 'Avg Core Web Vitals', value: '98/100' },
      { label: 'Mobile Conversion Lift', value: '+340%' },
      { label: 'Avg Delivery Speed', value: '3-5 Weeks' },
      { label: 'Code & IP Ownership', value: '100% Client' },
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel', 'Node.js', 'WordPress Headless'],
    capabilities: [
      {
        title: 'Modern UI/UX Design System',
        description: 'Bespoke design systems crafted in Figma with atomic design tokens, interactive prototypes, and frictionless user flows.',
        icon: 'Palette',
      },
      {
        title: 'Jamstack & Headless Engineering',
        description: 'Blazing-fast frontend architectures utilizing React and modern static-site generation for instantaneous page transitions.',
        icon: 'Code2',
      },
      {
        title: 'Mobile-First Responsive Layouts',
        description: 'Pixel-perfect rendering across all viewports—smartphones, tablets, laptops, and ultra-wide retina desktop displays.',
        icon: 'Smartphone',
      },
      {
        title: 'SEO & Core Web Vitals Hardening',
        description: 'Semantic HTML5 structure, schema.org JSON-LD structured data, optimized asset delivery, and sub-second Largest Contentful Paint (LCP).',
        icon: 'Zap',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Days 1-5',
        title: 'User Research & Information Architecture',
        summary: 'Competitive teardowns, brand discovery workshops, and wireframing high-converting page structures.',
        deliverable: 'Figma Low-Fi Wireframes & User Flows',
      },
      {
        phase: 'Phase 02',
        duration: 'Days 6-14',
        title: 'High-Fidelity Visual Design & Prototyping',
        summary: 'Crafting responsive visual components, typography scales, interactive micro-animations, and client design reviews.',
        deliverable: 'Interactive Figma Prototype & Design Tokens',
      },
      {
        phase: 'Phase 03',
        duration: 'Days 15-26',
        title: 'Full-Stack Frontend & CMS Engineering',
        summary: 'Translating design into clean, reusable component code with automated accessibility compliance and CMS bindings.',
        deliverable: 'Live Staging Deployment & Content Population',
      },
      {
        phase: 'Phase 04',
        duration: 'Days 27-30',
        title: 'Rigorous Multi-Device QA & Cross-Browser Testing',
        summary: 'Testing across iOS Safari, Android Chrome, Edge, and Firefox. Stress-testing load speeds and security configurations.',
        deliverable: 'Lighthouse 95+ Audit & QA Signoff',
      },
      {
        phase: 'Phase 05',
        duration: 'Post-Launch',
        title: 'Domain Cutover, Analytics Tracking & Warranty',
        summary: 'Zero-downtime DNS deployment, GA4 conversion event verification, heatmaps setup, and 60 days dedicated technical support.',
        deliverable: 'Production Launch & 60-Day Support Warranty',
      },
    ],
    faqs: [
      {
        question: 'How long does a custom website design project take?',
        answer: 'Most standard corporate and lead generation websites launch within 3 to 5 weeks. More extensive multi-language enterprise web applications typically require 6 to 8 weeks with phased milestone releases.',
      },
      {
        question: 'Will our team be able to update text and images easily?',
        answer: 'Yes, absolutely. We integrate user-friendly headless CMS solutions or custom WordPress admin panels where your marketing team can publish blog posts, update copy, and manage media without writing code.',
      },
      {
        question: 'Who owns the website code and design files?',
        answer: 'You have 100% complete ownership of all Figma source files, code repositories, graphics, and server assets from day one, with zero licensing lock-in or recurring proprietary platform fees.',
      },
      {
        question: 'Do you optimize for mobile and page speed?',
        answer: 'Every website we deliver is engineered mobile-first and audited against Google Core Web Vitals to score 90+ on mobile and desktop performance benchmarks.',
      },
    ],
    matchedProjectId: 'sarvam-homes',
  },
  'ecommerce': {
    tagline: 'Turn casual browsers into loyal repeat customers with lightning-fast checkout flows, mobile-first design, and enterprise catalog scalability.',
    stats: [
      { label: 'Avg Cart Abandonment Drop', value: '-34%' },
      { label: 'Conversion Rate Lift', value: '3.8x' },
      { label: 'Transaction Success Rate', value: '99.9%' },
      { label: 'Catalog Capacity', value: '100k+ SKUs' },
    ],
    tools: ['Shopify Plus', 'WooCommerce', 'Stripe', 'Razorpay', 'Next.js Commerce', 'Algolia Search', 'Klaviyo', 'PostgreSQL'],
    capabilities: [
      {
        title: 'Frictionless 1-Click Checkout',
        description: 'Optimized conversion funnels with Apple Pay, Google Pay, UPI, and instant address autocompletion to maximize order completion.',
        icon: 'ShoppingCart',
      },
      {
        title: 'Instant Predictive Product Search',
        description: 'Sub-50ms search with typo tolerance, visual facet filters, and AI-driven cross-sell recommendations.',
        icon: 'Search',
      },
      {
        title: 'ERP & Multi-Warehouse Sync',
        description: 'Real-time two-way synchronization of stock levels, inventory alerts, SKU barcodes, and multi-location fulfillment.',
        icon: 'Layers',
      },
      {
        title: 'Automated Post-Purchase Retention',
        description: 'Integrated WhatsApp order tracking, automated email drip series for abandoned carts, and loyalty reward tiers.',
        icon: 'Sparkles',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Week 1',
        title: 'Catalog Architecture & Payment Modeling',
        summary: 'Tax matrix setup, shipping tier configuration, multi-currency strategies, and SKU taxonomy design.',
        deliverable: 'Store Architecture & Payment Gateway Blueprint',
      },
      {
        phase: 'Phase 02',
        duration: 'Week 2-3',
        title: 'Custom Storefront UI/UX & Micro-copy',
        summary: 'Product detail page (PDP) layout optimization, sticky add-to-cart buttons, and trust badge design.',
        deliverable: 'Interactive Storefront Prototypes in Figma',
      },
      {
        phase: 'Phase 03',
        duration: 'Week 4-5',
        title: 'Backend Integration & Payment Gateways',
        summary: 'Webhook configurations, secure checkout integration, transactional email setups, and ERP hooks.',
        deliverable: 'End-to-End Sandbox Transaction Environment',
      },
      {
        phase: 'Phase 04',
        duration: 'Week 6',
        title: 'Load Testing & Payment Stress Tests',
        summary: 'Simulating concurrent traffic spikes, testing failed payment fallbacks, and mobile responsiveness.',
        deliverable: 'Security & Payment Compliance Audit',
      },
      {
        phase: 'Phase 05',
        duration: 'Post-Launch',
        title: 'Go-Live & Conversion Rate Optimization Sprints',
        summary: 'Live payment monitoring, heatmaps activation, and weekly A/B testing on checkout steps.',
        deliverable: 'Production Deployment & 60-Day Scaling Support',
      },
    ],
    faqs: [
      {
        question: 'Which e-commerce platforms do you build on?',
        answer: 'We build enterprise stores on Shopify Plus, custom headless Next.js Commerce, WooCommerce, and Magento, depending on your product catalog scale and business requirements.',
      },
      {
        question: 'Can you migrate our existing store without losing SEO rankings?',
        answer: 'Yes. We map every existing product URL to 301 redirects, preserve historical metadata, and migrate customer order records and review ratings smoothly.',
      },
      {
        question: 'What payment gateways do you support?',
        answer: 'We configure all global and regional gateways including Stripe, PayPal, Razorpay, Cashfree, Authorize.Net, Apple Pay, Google Pay, and Klarna Buy Now Pay Later.',
      },
      {
        question: 'How do you handle abandoned carts?',
        answer: 'We install automated multi-step recovery workflows across email and WhatsApp with personalized discount incentives that recover an average of 18-24% of abandoned carts.',
      },
    ],
    matchedProjectId: 'south-india-mall',
  },
  'seo-services': {
    tagline: 'Dominate Google search results with sustainable white-hat technical audits, high-intent semantic content clusters, and authoritative backlinks.',
    stats: [
      { label: 'Organic Traffic Lift', value: '+310%' },
      { label: 'Keywords in Top 3', value: '850+' },
      { label: 'Average Time to Page 1', value: '90-120 Days' },
      { label: 'White-Hat Safety', value: '100% Penguin Safe' },
    ],
    tools: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'SurferSEO', 'Looker Studio', 'GA4'],
    capabilities: [
      {
        title: 'Technical Crawl & Speed Diagnostics',
        description: 'Eliminating duplicate content, indexing bottlenecks, broken canonical tags, and 404 errors while maximizing crawl budget efficiency.',
        icon: 'Cpu',
      },
      {
        title: 'Search Intent Keyword Mapping',
        description: 'Targeting commercial and transactional search queries with high purchase intent, rather than just empty vanity volume.',
        icon: 'Target',
      },
      {
        title: 'High-Impact Content Clustering',
        description: 'Comprehensive topic pillar pages with interconnected cluster articles establishing topical authority that Google rewards.',
        icon: 'FileText',
      },
      {
        title: 'Authoritative Digital PR & Links',
        description: 'Earned editorial backlinks from recognized media outlets and industry publications to boost your domain authority.',
        icon: 'Globe',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Month 1',
        title: 'Deep Technical & Competitor Gap Audit',
        summary: 'Comprehensive crawl of all URLs, core web vitals speed fixes, and competitor keyword gap analysis.',
        deliverable: '100-Point Technical SEO Audit & Keyword Strategy',
      },
      {
        phase: 'Phase 02',
        duration: 'Month 2',
        title: 'On-Page Optimization & Schema Injection',
        summary: 'Rewriting title tags, meta descriptions, H1 hierarchy, internal anchor texts, and rich snippet schemas.',
        deliverable: 'On-Page Overhaul for Core Commercial Pages',
      },
      {
        phase: 'Phase 03',
        duration: 'Month 3',
        title: 'Pillar Content Production & Editorial Publishing',
        summary: 'Publishing comprehensive keyword-researched guides designed to win featured snippets and answer box rankings.',
        deliverable: 'Topical Authority Content Hub Published',
      },
      {
        phase: 'Phase 04',
        duration: 'Month 4-6',
        title: 'Authority Link Building & Digital PR Outreach',
        summary: 'Securing contextual backlinks from high DA/DR industry websites through personalized outreach.',
        deliverable: 'Monthly High-Quality Link Acquisition Dossier',
      },
      {
        phase: 'Phase 05',
        duration: 'Ongoing',
        title: 'Live Tracking, Algorithm Shield & Rank Expansion',
        summary: 'Monitoring weekly position fluctuations in Looker Studio and expanding ranking footprint to adjacent search queries.',
        deliverable: 'Real-Time Looker Studio Live Dashboard',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see real results from SEO?',
        answer: 'Typically, technical and indexing fixes show positive ranking movement within 45 to 60 days. Meaningful organic traffic jumps and revenue expansion occur consistently between months 3 to 6.',
      },
      {
        question: 'Do you use safe white-hat techniques?',
        answer: 'Yes, 100%. We adhere strictly to Google Search Essentials guidelines. We never use automated link spam or private blog networks (PBNs) that could trigger algorithmic penalties.',
      },
      {
        question: 'How do you measure SEO success?',
        answer: 'We measure success through bottom-line business metrics: organic qualified leads, non-branded search impressions, Top 3 keyword rankings, and organic revenue conversions.',
      },
      {
        question: 'Do you provide local SEO for physical locations?',
        answer: 'Yes. We specialize in Google Business Profile optimization, local map pack rankings, NAP consistency, and localized review generation strategies for businesses with physical presences.',
      },
    ],
    matchedProjectId: 'apollo-clinics',
  },
  'lead-generation': {
    tagline: 'Generate a continuous stream of qualified enterprise buyers through multi-channel ad funnels, targeted landing pages, and automated CRM qualification.',
    stats: [
      { label: 'Total Verified Leads', value: '1.2M+' },
      { label: 'Cost Per Acquisition Drop', value: '-42%' },
      { label: 'Lead-to-Call Rate', value: '38%' },
      { label: 'Client Net Pipeline', value: '$100M+' },
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'HubSpot', 'Zapier', 'Make', 'Twilio', 'Hotjar'],
    capabilities: [
      {
        title: 'High-Intent Ad Funnel Engineering',
        description: 'Laser-focused audience targeting across Google Search, LinkedIn B2B matched audiences, and Meta lookalikes.',
        icon: 'Crosshair',
      },
      {
        title: 'Conversion-Optimized Landing Pages',
        description: 'Fast, single-goal landing pages stripped of navigation leaks, featuring psychological proof elements and micro-commitments.',
        icon: 'Layout',
      },
      {
        title: 'Automated Lead Qualification & Scrubbing',
        description: 'Multi-step questionnaire forms with SMS OTP verification that filter tire-kickers and pass only decision-makers.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Instant Sales Rep Routing & CRM Drips',
        description: 'Real-time lead delivery via Webhooks to your CRM or WhatsApp within seconds of form submission.',
        icon: 'Send',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Days 1-7',
        title: 'Ideal Customer Profile (ICP) & Offer Blueprint',
        summary: 'Defining customer pain points, creating irresistible lead magnets, and structuring the funnel economics.',
        deliverable: 'Lead Acquisition Funnel Map & Offer Strategy',
      },
      {
        phase: 'Phase 02',
        duration: 'Days 8-14',
        title: 'Landing Page & Creative Asset Production',
        summary: 'Designing high-converting landing pages, ad copy angles, video hooks, and custom form steps.',
        deliverable: 'High-Converting Landing Pages & Ad Creatives',
      },
      {
        phase: 'Phase 03',
        duration: 'Days 15-18',
        title: 'Tracking, CRM Automation & Webhook Integration',
        summary: 'Setting up GA4 custom conversion events, Meta Conversions API (CAPI), and instant WhatsApp alert webhooks.',
        deliverable: 'Full Pipeline Integration & Lead Routing',
      },
      {
        phase: 'Phase 04',
        duration: 'Days 19-30',
        title: 'Campaign Launch & Algorithmic Learning',
        summary: 'Deploying campaigns across target channels with strict bid caps and continuous negative audience exclusions.',
        deliverable: 'Initial Qualified Lead Flow & CPA Benchmarking',
      },
      {
        phase: 'Phase 05',
        duration: 'Month 2+',
        title: 'Budget Scaling & Creative Refresh Sprints',
        summary: 'Scaling ad spend profitably on winning combinations while rotating fresh creative hooks to combat ad fatigue.',
        deliverable: 'Predictable Monthly Pipeline at Stable CPA',
      },
    ],
    faqs: [
      {
        question: 'How do you guarantee lead quality?',
        answer: 'We implement multi-step qualifying questions, budget filters, and phone number SMS OTP verification. Only prospects who meet your exact buyer criteria are sent to your sales team.',
      },
      {
        question: 'What channels do you use for lead generation?',
        answer: 'Depending on whether you are B2B or B2C, we utilize Google Search & Performance Max, LinkedIn Sponsored Content, Meta Ads (Facebook & Instagram), and programmatic retargeting.',
      },
      {
        question: 'How quickly do leads arrive in our CRM?',
        answer: 'Within less than 3 seconds. Our automated webhooks instantly deliver full lead details into your CRM (HubSpot, Salesforce, Zoho, etc.) and ping your sales team on WhatsApp or Slack.',
      },
      {
        question: 'What is the minimum budget recommended?',
        answer: 'We recommend an initial monthly advertising budget of at least $1,500 to $3,000 for sufficient algorithmic data density and meaningful lead volume.',
      },
    ],
    matchedProjectId: 'sarvam-homes',
  },
  'social-media': {
    tagline: 'Build an authoritative brand community, engage decision-makers, and drive organic virality with scroll-stopping visuals and high-yield content campaigns.',
    stats: [
      { label: 'Avg Social Reach Lift', value: '+450%' },
      { label: 'Engagement Rate', value: '4.8%' },
      { label: 'Reels/Shorts Views', value: '25M+' },
      { label: 'Brand Sentiment', value: '96% Positive' },
    ],
    tools: ['Canva Enterprise', 'Adobe Premiere Pro', 'Figma', 'Sprout Social', 'Meta Business Suite', 'LinkedIn Creator', 'CapCut Pro'],
    capabilities: [
      {
        title: 'Scroll-Stopping Short-Form Video',
        description: 'Engaging Instagram Reels, YouTube Shorts, and TikToks designed with strong 3-second hooks to capture immediate attention.',
        icon: 'Video',
      },
      {
        title: 'B2B LinkedIn Thought Leadership',
        description: 'Positioning your executive leadership as industry visionaries through data-backed carousels and industry commentary.',
        icon: 'Award',
      },
      {
        title: 'Curated Monthly Content Calendars',
        description: 'Strategic mix of educational, social proof, trend-jacking, and conversion posts delivered for review 10 days in advance.',
        icon: 'Calendar',
      },
      {
        title: 'Community Moderation & DM Funnels',
        description: 'Fast response times to comments, community building, and automated DM chat triggers that turn followers into booked calls.',
        icon: 'MessageSquare',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Week 1',
        title: 'Brand Voice & Visual Aesthetic Guidelines',
        summary: 'Defining visual moodboards, color palette adaptations, typography styles, and tone of voice for each platform.',
        deliverable: 'Social Media Brand Playbook',
      },
      {
        phase: 'Phase 02',
        duration: 'Week 2',
        title: 'Content Pillars & Pillar Scripting',
        summary: 'Drafting 30 days of scripts, carousel outlines, video briefs, and engagement triggers.',
        deliverable: '30-Day Master Content Calendar',
      },
      {
        phase: 'Phase 03',
        duration: 'Week 3-4',
        title: 'High-Impact Creative Production',
        summary: 'Editing motion graphics, reels, infographic carousels, and client quote graphics with brand consistency.',
        deliverable: 'Full Suite of High-Resolution Assets',
      },
      {
        phase: 'Phase 04',
        duration: 'Ongoing',
        title: 'Scheduled Publishing & Engagement Pods',
        summary: 'Publishing at optimal engagement times, community management, and active engagement within industry hashtags.',
        deliverable: 'Daily Active Community Engagement',
      },
      {
        phase: 'Phase 05',
        duration: 'Monthly',
        title: 'Performance Analytics & Viral Retrospective',
        summary: 'Reviewing top-performing hooks, audience demographics growth, and website referral traffic in comprehensive reports.',
        deliverable: 'Monthly Social Growth & Attribution Report',
      },
    ],
    faqs: [
      {
        question: 'Which social platforms do you manage?',
        answer: 'We manage LinkedIn, Instagram, Facebook, YouTube, X (Twitter), and Pinterest, tailoring content style and formats to each specific platform algorithm.',
      },
      {
        question: 'Do we get to approve posts before they go live?',
        answer: 'Yes. You receive a monthly content calendar in advance with all copy, graphics, and video previews for your feedback and approval before anything is published.',
      },
      {
        question: 'Can you create video content if we don’t have raw footage?',
        answer: 'Yes. Our creative team produces high-end motion graphics, animated explainer reels, curated b-roll video edits, and screen walkthroughs that do not require on-site filming.',
      },
      {
        question: 'Does social media actually generate revenue?',
        answer: 'Yes. We don’t just focus on vanity likes; we build DM keyword automation and link-in-bio funnels that systematically convert engaged followers into qualified website leads.',
      },
    ],
    matchedProjectId: 'kalaniketan-fabrics',
  },
  'conversion-optimization': {
    tagline: 'Maximize the return on your existing website traffic through scientific heatmaps, user session recordings, and hypothesis-driven A/B testing.',
    stats: [
      { label: 'Avg Conversion Lift', value: '+62%' },
      { label: 'Experiments Run', value: '1,400+' },
      { label: 'Statistical Confidence', value: '99% CI' },
      { label: 'Avg Payback Period', value: '< 45 Days' },
    ],
    tools: ['Hotjar', 'Microsoft Clarity', 'VWO', 'Google Optimize / Optimizely', 'GA4', 'Figma', 'Heap Analytics'],
    capabilities: [
      {
        title: 'Heatmaps & Drop-Off Diagnostics',
        description: 'Analyzing where users click, scroll, hesitate, and abandon your key conversion pages using eye-tracking and session replays.',
        icon: 'Eye',
      },
      {
        title: 'Psychological Copy & CTA Optimization',
        description: 'Replacing weak generic copy with urgency triggers, objection-crushing social proof, and value-focused calls to action.',
        icon: 'Edit3',
      },
      {
        title: 'Form & Checkout Friction Elimination',
        description: 'Streamlining input fields, removing unneeded barriers, and optimizing mobile keypad states to boost form completion rates.',
        icon: 'CheckSquare',
      },
      {
        title: 'Rigorous Scientific A/B Testing',
        description: 'Running controlled split tests until statistical significance is achieved before rolling out permanent winner variants.',
        icon: 'Split',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Days 1-10',
        title: 'Quantitative & Qualitative Data Gathering',
        summary: 'Installing heatmaps, session recording tools, funnel drop-off funnels, and analyzing Google Analytics drop points.',
        deliverable: 'Comprehensive UX Friction Teardown Dossier',
      },
      {
        phase: 'Phase 02',
        duration: 'Days 11-18',
        title: 'CRO Hypothesis Formulation & Prioritization',
        summary: 'Ranking potential testing concepts using the ICE framework (Impact, Confidence, Ease) to target quickest revenue wins.',
        deliverable: 'Prioritized 90-Day Experiment Roadmap',
      },
      {
        phase: 'Phase 03',
        duration: 'Days 19-30',
        title: 'Variant Design & Technical Test Implementation',
        summary: 'Designing Challenger variants in Figma and implementing split testing scripts via VWO or custom client code.',
        deliverable: 'Live A/B Split Test Experiments Running',
      },
      {
        phase: 'Phase 04',
        duration: 'Days 31-45',
        title: 'Statistical Significance & Winner Deployment',
        summary: 'Analyzing results at 95%+ confidence levels and permanently deploying winning variations into the codebase.',
        deliverable: 'Winner Deployed & Measured Revenue Lift',
      },
      {
        phase: 'Phase 05',
        duration: 'Continuous',
        title: 'Iterative Micro-Testing Sprints',
        summary: 'Rinse-and-repeat experimentation targeting secondary funnel stages (pricing pages, thank-you upsells, email captures).',
        deliverable: 'Continuous Cumulative Conversion Compounding',
      },
    ],
    faqs: [
      {
        question: 'How much traffic is needed for effective CRO?',
        answer: 'We recommend at least 10,000 monthly unique visitors or at least 150 conversions per month to achieve rapid statistical significance in A/B testing.',
      },
      {
        question: 'What is the difference between redesigning and CRO?',
        answer: 'A redesign changes aesthetics based on assumptions. CRO uses empirical data from your actual visitors to pinpoint exactly what drives transactions and tests changes scientifically.',
      },
      {
        question: 'Will CRO testing slow down our site?',
        answer: 'No. We use lightweight asynchronous testing snippets or server-side split tests with anti-flicker protection to ensure zero impact on your Core Web Vitals.',
      },
      {
        question: 'What kind of conversion lift can we expect?',
        answer: 'Our average client achieves a 25% to 62% increase in conversion rate across the first 90 days of structured experimentation.',
      },
    ],
    matchedProjectId: 'kalaniketan-fabrics',
  },
  'ppc-advertising': {
    tagline: 'Scale revenue profitably with data-driven Google Search, Performance Max, and Meta retargeting ad campaigns optimized for maximum return on ad spend.',
    stats: [
      { label: 'Avg ROAS Achieved', value: '4.8x' },
      { label: 'Ad Spend Managed', value: '$25M+' },
      { label: 'Negative Keywords Blocked', value: '50k+' },
      { label: 'Quality Score Average', value: '8.8/10' },
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'Looker Studio', 'SpyFu', 'Optmyzr', 'GA4'],
    capabilities: [
      {
        title: 'Google Search & PMax Mastery',
        description: 'Single-theme ad groups, exact-match negative keyword lists, and value-based bidding algorithms that eliminate budget waste.',
        icon: 'Search',
      },
      {
        title: 'Full-Funnel Meta Retargeting',
        description: 'Segmenting past visitors by behavioral depth—cart abandoners, video viewers, and past customers—with dynamic product ads.',
        icon: 'Repeat',
      },
      {
        title: 'Server-Side Conversions API (CAPI)',
        description: 'Bypassing iOS 14+ ad blocker data loss with server-to-server tracking to feed Google and Meta 100% accurate conversion data.',
        icon: 'Server',
      },
      {
        title: 'Continuous RoAS & Bid Optimization',
        description: 'Daily bid monitoring, device bid adjustments, demographic trimming, and weekly algorithmic pacing checks.',
        icon: 'TrendingUp',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Days 1-5',
        title: 'Historical Ad Account & Tracking Audit',
        summary: 'Auditing past ad spend waste, search query reports, conversion tag firing, and attribution model validity.',
        deliverable: 'PPC Account Health & Wasted Spend Diagnostic',
      },
      {
        phase: 'Phase 02',
        duration: 'Days 6-12',
        title: 'Campaign Restructuring & Negative Keyword Scrub',
        summary: 'Building clean account structures, writing responsive search ads with dynamic keyword insertion, and adding negative lists.',
        deliverable: 'Restructured Ad Architecture & Creative Deck',
      },
      {
        phase: 'Phase 03',
        duration: 'Days 13-16',
        title: 'First-Party Tracking & Enhanced Conversions',
        summary: 'Setting up Google Enhanced Conversions and Meta Conversions API via Google Tag Manager Server Container.',
        deliverable: '100% Verified Server-Side Attribution Loop',
      },
      {
        phase: 'Phase 04',
        duration: 'Days 17-30',
        title: 'Campaign Ignition & Smart Bidding Scaling',
        summary: 'Launching campaigns with Target CPA/Target ROAS constraints and monitoring auction insights against key rivals.',
        deliverable: 'Stabilized ROAS & Search Impression Share Growth',
      },
      {
        phase: 'Phase 05',
        duration: 'Ongoing',
        title: 'Continuous Bid Calibration & Scaling',
        summary: 'Reallocating budget to highest margin search terms while expanding testing into YouTube Shorts and Meta advantage+ campaigns.',
        deliverable: 'Weekly Performance Calls & Live Dashboard Access',
      },
    ],
    faqs: [
      {
        question: 'Who pays the advertising platform costs?',
        answer: 'You pay Google and Meta directly using your own company credit card. This guarantees complete billing transparency and ensures you own your historical campaign data forever.',
      },
      {
        question: 'How do you prevent wasted ad spend on irrelevant clicks?',
        answer: 'We maintain extensive master negative keyword libraries and review search query reports weekly to block click-bleeders before they waste your budget.',
      },
      {
        question: 'How do you track sales back to specific ads?',
        answer: 'We configure server-side Google Tag Manager and first-party UTM parameters linked directly into Google Analytics 4 and your CRM.',
      },
      {
        question: 'What is your management fee structure?',
        answer: 'We charge a flat monthly retainer or a transparent base fee plus performance tier, tailored to the scale and complexity of your advertising accounts.',
      },
    ],
    matchedProjectId: 'kalaniketan-fabrics',
  },
  'crm-solutions': {
    tagline: 'Never lose another lead. Integrate, automate, and streamline your entire customer lifecycle with unified CRM architecture, automated drips, and pipeline transparency.',
    stats: [
      { label: 'Pipeline Visibility', value: '100%' },
      { label: 'Follow-up Response Time', value: '< 2 Mins' },
      { label: 'Deal Slip Prevention', value: '94%' },
      { label: 'Automated Tasks/Mo', value: '50k+' },
    ],
    tools: ['HubSpot CRM', 'Zoho One', 'Salesforce', 'Zapier', 'Make.com', 'Twilio', 'Slack Webhooks', 'Stripe'],
    capabilities: [
      {
        title: 'Custom Pipeline & Deal Stage Mapping',
        description: 'Mirroring your exact sales process with custom properties, mandatory stage validation rules, and automated probability weighting.',
        icon: 'GitBranch',
      },
      {
        title: 'Automated Lead Distribution & Scoring',
        description: 'Routing incoming inquiries to the right sales reps based on geography, deal size, or round-robin availability instantly.',
        icon: 'Users',
      },
      {
        title: 'Multi-Channel Drip Sequences',
        description: 'Triggering automated personalized emails, SMS reminders, and calendar links when prospects enter specific pipeline stages.',
        icon: 'MailCheck',
      },
      {
        title: 'Executive Dashboards & Forecasting',
        description: 'Real-time reporting on rep activity, deal velocity, CAC by channel, and forecasted monthly closing volume.',
        icon: 'BarChart3',
      },
    ],
    processPhases: [
      {
        phase: 'Phase 01',
        duration: 'Week 1',
        title: 'Sales Process Discovery & Pipeline Blueprint',
        summary: 'Mapping your buyer journey, lead qualification criteria, handover points between marketing and sales, and data schemas.',
        deliverable: 'End-to-End CRM Architecture Blueprint',
      },
      {
        phase: 'Phase 02',
        duration: 'Week 2-3',
        title: 'Database Hygiene & Legacy Migration',
        summary: 'Deduplicating existing contact spreadsheets, cleansing outdated records, and importing historical deals with custom fields.',
        deliverable: 'Cleansed Data Migration & Contact Categorization',
      },
      {
        phase: 'Phase 03',
        duration: 'Week 4',
        title: 'Automated Workflows & Integration Webhooks',
        summary: 'Connecting forms, website chat, WhatsApp, and telephony tools with automatic activity logging and task assignments.',
        deliverable: 'Live Automated Drip & Distribution Workflows',
      },
      {
        phase: 'Phase 04',
        duration: 'Week 5',
        title: 'Sales Team Training & SOP Documentation',
        summary: 'Conducting live interactive training sessions for your sales reps and managers with step-by-step video cheat sheets.',
        deliverable: 'Sales Rep Video SOPs & Role-Based Permissions',
      },
      {
        phase: 'Phase 05',
        duration: 'Ongoing',
        title: 'Quarterly Optimization & Pipeline Governance',
        summary: 'Auditing unworked leads, refining email open rates on drip steps, and expanding custom reports for leadership.',
        deliverable: 'Quarterly Performance & Tech Stack Reviews',
      },
    ],
    faqs: [
      {
        question: 'Which CRM platforms do you specialize in?',
        answer: 'We are certified implementation partners across HubSpot, Zoho CRM, Salesforce Sales Cloud, and LeadSquared.',
      },
      {
        question: 'Can you migrate our messy existing spreadsheets?',
        answer: 'Yes. We de-duplicate contacts, standardize company names, cleanse email formats, and map all historical notes and phone numbers cleanly.',
      },
      {
        question: 'How do you prevent sales reps from neglecting leads?',
        answer: 'We build automated SLA warning triggers. If a lead is not contacted within 15 minutes, an automated alert pings the sales manager on Slack or WhatsApp.',
      },
      {
        question: 'Do you provide training for our sales team?',
        answer: 'Yes. We host recorded training workshops tailored to your workflows and provide comprehensive documentation so onboarding new hires is completely seamless.',
      },
    ],
    matchedProjectId: 'sarvam-homes',
  },
};
