// @ts-check
import { caseStudiesSidebar } from './docs/sidebars/caseStudiesSidebar';
import { collabCodingSidebar } from './docs/sidebars/collabCodingSidebar';
import { documentationSidebar } from './docs/sidebars/documentationSidebar';
import { liveCodingSidebar } from './docs/sidebars/liveCodingSidebar';
import { generalInformationSidebar } from './docs/sidebars/generalInformationSidebar';
import { startupModuleSidebar } from './docs/sidebars/startupModuleSidebar';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const sidebars = {
  liveCodingSidebar,
  collabCodingSidebar, 
  caseStudiesSidebar,
  documentationSidebar,
  generalInformationSidebar,
  startupModuleSidebar,
};

export default sidebars;
