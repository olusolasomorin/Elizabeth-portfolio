import {
  aboutPage,
  clients,
  contactForm,
  faqs,
  home,
  packages,
  process,
  services,
  servicesPage,
  tools,
  workPage,
} from './pages'
import { projectCategories, projects } from './projects'
import { settings } from './settings'

/**
 * Seed content for the whole site. The shape of this object is the contract
 * between the public site and the (future) admin dashboard / content API.
 */
export const seedContent = {
  settings,
  projects,
  projectCategories,
  home,
  clients,
  tools,
  process,
  workPage,
  servicesPage,
  services,
  packages,
  faqs,
  aboutPage,
  contactForm,
}
