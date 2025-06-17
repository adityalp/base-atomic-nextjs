import React from 'react'
import Card from '../elements/Card/Card'

export default function TableLayouts({ title, children, desc = '' }) {
  return (
    <Card title="Latest Transactions">
      {/* Card Header */}
      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          {title}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        )}
      </div>
      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </Card>
  )
}
