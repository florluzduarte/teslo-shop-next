"use client";
import Link from "next/link"
import { IoSearchOutline, IoCartOutline } from "react-icons/io5"
import { titleFont } from "@/config/fonts"
import { useUiStore } from "@/store";

export const TopMenu = () => {

  const handleOpenMenu = useUiStore((store) => store.handleOpenMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} font-bold antialiased`}>Teslo</span>
          <span className={titleFont.className}> | Shop</span>
        </Link>
      </div>

      {/* Center menu */}
      <div className="hidden sm:block">
        <Link href="/category/men"
          className="m-2 p-2 rounded-md hover:bg-gray-100 transition-all"
        >Hombres</Link>

        <Link href="/category/women"
          className="m-2 p-2 rounded-md hover:bg-gray-100 transition-all"
        >Mujeres</Link>

        <Link href="/category/kids"
          className="m-2 p-2 rounded-md hover:bg-gray-100 transition-all"
        >Niños</Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-3">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={handleOpenMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  )
}
