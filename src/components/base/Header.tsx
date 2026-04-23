"use client"

import React, { useState, useRef, useEffect } from "react"

import { TbTargetArrow } from "react-icons/tb"
import {LuBookOpen} from "react-icons/lu"
import { IoTerminalOutline } from "react-icons/io5"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import Link from "next/link";

type NavItem = {
    icon: React.ReactNode
    label: string
    href: string
}

const navItems: NavItem[] = [
    {
        icon: <LuBookOpen size={24} strokeWidth={1.25} />,
        label: "portfolio",
        href: "/",
    },
    {
        icon: <IoTerminalOutline size={24} strokeWidth={1.25}/>,
        label: "projekty",
        href: "/projects",
    },
    {
        icon: <TbTargetArrow size={24} strokeWidth={1.25} />,
        label: "o mnie",
        href: "/about",
    },
]


export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)
    const navRef = useRef<HTMLElement>(null)
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMobileOpen(false)
                setHoveredIndex(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    function handleMouseEnter(index: number) {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
        setHoveredIndex(index)
    }

    function handleMouseLeave() {
        hoverTimeout.current = setTimeout(() => {
            setHoveredIndex(null)
        }, 150)
    }


    return (
        <nav ref={navRef} className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[100%-2rem] max-w-md">
            {/* Desktop Navbar */}
            <div className="hidden md:block relative">
                <div className="relative z-20 flex items-center justify-center bg-white/2 backdrop-blur-xl shadow-2xl rounded-full border border-white/6 px-4 h-16">
                    <ul className="flex items-center gap-1">
                        {navItems.map(({ icon, label }, index) => (
                            <li
                                key={label}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    className={`relative flex flex-col items-center gap-1 px-5 py-2 rounded-lg focus-visible:outline-none transition-colors duration-200 ${
                                        hoveredIndex === index ? "text-black" : "text-black/40 hover:text-black focus:text-black"
                                    }`}
                                    href={navItems[index].href}
                                >
                                    <span aria-hidden="true">{icon}</span>
                                    <span className="text-[0.8rem] font-light tracking-widest ">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden">
                {/* Mobile top bar */}
                <div className="flex items-center justify-between bg-white/2 backdrop-blur-xl shadow-2xl rounded-full border border-white/6 px-4 h-14">
                    <span className="text-black/60 text-[10px] sm:text-sm font-light tracking-widest mx-2">Tomasz Tłusty</span>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                setMobileOpen(!mobileOpen)
                                if (mobileOpen) setMobileExpanded(null)
                            }}
                            className="w-8 h-8 text-black/50 hover:text-black rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <HiOutlineX size={16} /> : <HiOutlineMenuAlt3 size={16} />}
                        </button>
                    </div>
                </div>

                {/* Mobile rollout panel */}
                <div
                    className={`mt-2 bg-white/3 backdrop-blur-2xl border rounded-2xl shadow-2xl overflow-hidden transition-all duration-400 ease-out origin-top ${
                        mobileOpen
                            ? "max-h-150 opacity-100 scale-100 border-white/8 p-2"
                            : "max-h-0 opacity-0 scale-[0.97] border-transparent p-0"
                    }`}
                >
                    <div className="flex flex-col gap-0.5">
                        {navItems.map(({ icon, label}, index) => (
                            <div key={label}>
                                {/* Nav item button */}
                                <Link
                                    href={navItems[index].href}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                        mobileOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                                    } ${
                                        mobileExpanded === index
                                            ? "text-black bg-white/6"
                                            : "text-black/40 hover:text-black hover:bg-white/4"
                                    }`}
                                    style={{ transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms" }}
                                >
                                    <span aria-hidden="true">{icon}</span>
                                    <span className="text-sm font-light tracking-widest flex-1 text-left">{label}</span>
                                    <span
                                        className={`text-black/20 transition-transform duration-300 ${
                                            mobileExpanded === index ? "rotate-180" : ""
                                        }`}
                                    >
                                      </span>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
