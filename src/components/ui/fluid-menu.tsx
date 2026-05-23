"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

import { AnimatePresence, motion } from "framer-motion"

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right" | "center"
  showChevron?: boolean
}

export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-[var(--color-paramo-bone)]" aria-hidden="true" />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute ${
              align === "right" ? "right-0" : align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
            } mt-4 w-64 rounded-xl bg-[var(--color-paramo-dark)]/95 backdrop-blur-xl shadow-2xl ring-1 ring-[var(--color-paramo-bone)]/10 focus:outline-none z-50`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-2" role="none">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MenuItemProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  isActive?: boolean
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false }: MenuItemProps) {
  return (
    <button
      className={`relative flex items-center w-full px-6 py-4 text-left group transition-colors duration-300
        ${disabled ? "text-gray-500 cursor-not-allowed" : "text-[var(--color-paramo-bone)] hover:bg-white/5 hover:text-white"}
        ${isActive ? "bg-white/10 text-[var(--color-paramo-yellow)]" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="mr-4 text-[var(--color-paramo-yellow)]">
          {icon}
        </span>
      )}
      <span className="font-sans tracking-widest uppercase text-xs">
        {children}
      </span>
    </button>
  )
}
