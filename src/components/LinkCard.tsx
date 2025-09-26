interface LinkCardProps {
  href: string
  icon: any
  children: any
  external?: boolean
}

export function LinkCard({ href, icon, children, external = false }: LinkCardProps) {
  const baseClasses = "flex items-center gap-4 p-4 rounded-lg bg-white hover:bg-white transition-all duration-300 group cursor-pointer border border-pottery-clay/40 hover:border-pottery-terracotta shadow-sm hover:shadow-md"

  const content = (
    <>
      <div className="text-pottery-terracotta group-hover:text-pottery-clay transition-colors duration-300 flex-shrink-0">
        {icon}
      </div>
      <span className="text-pottery-charcoal group-hover:text-pottery-clay transition-colors duration-300 font-medium">
        {children}
      </span>
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    )
  }

  return (
    <a href={href} className={baseClasses}>
      {content}
    </a>
  )
}