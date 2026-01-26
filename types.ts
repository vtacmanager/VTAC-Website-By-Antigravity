
// Added React import to provide access to the React namespace for type definitions like React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tag?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Solution {
  role: string;
  benefits: string[];
  image: string;
}