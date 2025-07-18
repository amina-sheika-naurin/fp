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
    href: "/services",
    children: [
      {
        title: "Piping Solutions",
        href: "/services",
        description: "GRP/GRE pipe installation and maintenance",
        children: [
          {
            title: "GRP/GRE Installation",
            href: "/services#installation",
            description: "Professional installation for all pipe diameters"
          },
          {
            title: "Maintenance & Repairs",
            href: "/services#maintenance",
            description: "Shutdown services and emergency repairs"
          },
          {
            title: "In-Situ Lamination",
            href: "/services#lamination",
            description: "Specialized lamination services"
          },
          {
            title: "Supply & Trading",
            href: "/services#supply",
            description: "Complete procurement solutions"
          }
        ]
      },
      {
        title: "Project Management",
        href: "/services#project-management",
        description: "Professional project execution and management"
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