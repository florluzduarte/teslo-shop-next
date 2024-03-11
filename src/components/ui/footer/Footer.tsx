import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center text-xs mb-10 gap-6">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        <span> | Shop </span>
        <span> - {new Date().getFullYear()}</span>
      </Link>

      <Link href="/">
        Términos y condiciones
      </Link>

      <Link href="/">
        Ubicaciones
      </Link>
    </div>
  )
}
