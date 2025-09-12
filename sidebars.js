// @ts-check
import { caseStudiesSidebar } from './docs/sidebars/caseStudiesSidebar';
import { collabCodingSidebar } from './docs/sidebars/collabCodingSidebar';
import { documentationSidebar } from './docs/sidebars/documentationSidebar';
import { liveCodingSidebar } from './docs/sidebars/liveCodingSidebar';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const sidebars = {
  liveCodingSidebar,
  collabCodingSidebar, 
  caseStudiesSidebar,
  documentationSidebar
};

export default sidebars;
