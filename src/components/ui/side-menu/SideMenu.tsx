"use client";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { SideMenuLink } from "./SideMenuLink";
import { useUiStore } from "@/store";
import clsx from "clsx";

const menuItems = [
  {
    title: "Perfil",
    icon: <IoPersonOutline size={20} />,
    href: "/"
  },
  {
    title: "Órdenes",
    icon: <IoTicketOutline size={20} />,
    href: "/"
  },
  {
    title: "Ingresar",
    icon: <IoLogInOutline size={20} />,
    href: "/"
  },
  {
    title: "Salir",
    icon: <IoLogOutOutline size={20} />,
    href: "/"
  }
]

const managementMenuItems = [
  {
    title: "Productos",
    icon: <IoShirtOutline size={20} />,
    href: "/"
  },
  {
    title: "Órdenes",
    icon: <IoTicketOutline size={20} />,
    href: "/"
  },
  {
    title: "Usuarios",
    icon: <IoPeopleOutline size={20} />,
    href: "/"
  },
]

export const SideMenu = () => {

  const isMenuOpen = useUiStore((store) => store.isMenuOpen);
  const handleCloseMenu = useUiStore((store) => store.handleCloseMenu);

  return (
    <div>
      {/* Background Black */}
      {
        isMenuOpen && (<div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
        />)
      }


      {/* Background Blur */}
      {
        isMenuOpen && (<div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={handleCloseMenu}
        />)
      }


      {/* SideMenu */}
      <nav
        // TODO: efecto slide del menú
        className={clsx(
          "fixed p-5 top-0 right-0 w-[280px] md:w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isMenuOpen
          }
        )}
      >

        <IoCloseOutline
          size={36}
          className="fixed top-5 right-5 text-gray-800 cursor-pointer"
          onClick={handleCloseMenu}
        />

        {/* Search Input */}
        <div className="relative mt-14 mb-6">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input type="text" placeholder="Buscar"
            className="w-full bg-gray-50 rounded px-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menú */}
        {
          menuItems.map((item) => (
            <SideMenuLink key={item.title} {...item} />
          ))
        }

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-8" />

        {
          managementMenuItems.map((item) => (
            <SideMenuLink key={item.title} {...item} />
          ))
        }

      </nav>

    </div>
  )
}
