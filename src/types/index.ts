export interface DifferentiationPoint {
  id: number;
  title: string;
  description: string;
  benefits?: string[];
  quote?: string;
  additionalInfo?: string;
  features?: {
    title: string;
    description: string;
  }[];
  conclusion?: string;
}

export interface PerformanceMetric {
  icon: string;
  value: string;
  title: string;
  description: string;
  color: string;
  textColor: string;
}

export interface IntegrationStep {
  step: string;
  title: string;
  description: string;
  bgColor: string;
  stepColor: string;
  iconColor?: string;
  icon?: string;
}

export interface ComparisonRow {
  category: string;
  competitor: string;
  aden: string;
  competitorColor: string;
  adenColor: string;
  bgColor?: string;
}

