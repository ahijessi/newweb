
// Added React import to fix namespace error for React.ReactNode
import React from 'react';

export enum Page {
  Home = 'home',
  Education = 'education',
  Work = 'work',
  Publications = 'publications',
  Conferences = 'conferences',
  Other = 'other'
}

export interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactNode;
  description: string;
}
