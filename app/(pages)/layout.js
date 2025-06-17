'use client';

import React from 'react'
import { useSidebar } from '../context/SidebarContext';
import Sidebar from '../components/fragments/Sidebar/Sidebar';
import Backdrop from '../components/fragments/Backdrop/Backdrop';
import Header from '../components/fragments/Header/Header';

export default function layout({ children }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]"

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <Sidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <Header />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  )
}
