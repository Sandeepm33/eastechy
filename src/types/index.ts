export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  deliverables: string[];
  metrics: string;
  category: 'web' | 'marketing' | 'tech';
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  targetAudience: string;
  category: 'Real Estate' | 'Healthcare' | 'Retail' | 'Food' | 'E-Commerce';
  description: string;
  resultMetric: string;
  tags: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  services: string;
  title: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Company' | 'Services' | 'Results' | 'Process';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  businessType: string;
  companyTurnover: string;
  servicesRequired: string[];
  monthlyBudget: string;
  expectedStartDate: string;
  meetingDateTime: string;
  timeZone: string;
  preferredMode: string;
  message: string;
  privacyAgreed: boolean;
}
