import React from 'react'

const ActionIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
    
    className="
      p-4 rounded-full
      bg-white/5 border border-white/10
      text-blue-400
      hover:scale-110 hover:border-blue-400/40
      transition-all duration-300
      cursor-pointer
    "
  >
        {children}
    </div>
  )
}

export default ActionIcon
