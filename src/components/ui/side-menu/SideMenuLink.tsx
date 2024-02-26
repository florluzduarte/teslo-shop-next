import Link from "next/link"

interface MenuLinkProps {
  title: string;
  icon: JSX.Element;
  href: string;
}

export const SideMenuLink = ({ title, icon, href }: MenuLinkProps) => {
  return (
    <Link href={href}
      className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
    >
      {icon}
      <span className="ml-3">{title}</span>
    </Link>
  )
}
