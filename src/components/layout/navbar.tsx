"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { text: "Inicio", href: "/" },
  { text: "Programación", href: "/programacion" },
  { text: "Nosotros", href: "/nosotros" },
  { text: "Noticias", href: "/Noticias" },
  { text: "En Vivo", href: "EnVivo" },
  { text: "Administacion", href: "Administacion" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Teleyolombo TV Logo"
            width={100}
            height={100}
            className="mr-2"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <Link
          href="/contactenos"
          className="hidden md:flex border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-zinc-800 transition-colors"
        >
          Contáctenos <span className="ml-1">→</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-zinc-800 z-40 transition-transform duration-300 pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xl hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
          <Link
            href="/contactenos"
            className="border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-zinc-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contáctenos <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
