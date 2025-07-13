export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  children?: NavItem[];
}

export interface MegaMenuSection {
  title: string;
  items: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: "Services",
    children: [
      {
        title: "Piping Solutions",
        href: "/services/piping",
        description: "GRP/GRE pipe installation and maintenance",
        children: [
          {
            title: "GRP/GRE Installation",
            href: "/services/piping/installation",
            description: "Professional installation for all pipe diameters"
          },
          {
            title: "Maintenance & Repairs",
            href: "/services/piping/maintenance",
            description: "Shutdown services and emergency repairs"
          },
          {
            title: "Trading & Supply",
            href: "/services/piping/supply",
            description: "Complete procurement solutions"
          }
        ]
      },
      {
        title: "Civil Construction",
        href: "/services/civil",
        description: "Infrastructure and construction services",
        children: [
          {
            title: "Foundations & Concrete",
            href: "/services/civil/foundations",
            description: "Robust building bases and structures"
          },
          {
            title: "Excavation & Earthworks",
            href: "/services/civil/excavation",
            description: "Precision site preparation"
          },
          {
            title: "Infrastructure",
            href: "/services/civil/infrastructure",
            description: "Drainage and sewerage systems"
          }
        ]
      }
    ]
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Featured projects and case studies"
  },
  {
    title: "Capabilities",
    href: "/capabilities",
    description: "Our expertise and certifications"
  },
  {
    title: "About",
    href: "/about",
    description: "Company heritage and leadership"
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team"
  }
];