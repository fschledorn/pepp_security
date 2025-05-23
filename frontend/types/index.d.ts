import { Icons } from "@/components/icons"

export type SiteConfig = {
  name: string
  description: string
  url: string
  // ogImage: string
  links: {
    github: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type PlannerConfig = {
  mainNav: MainNavItem[]
}
