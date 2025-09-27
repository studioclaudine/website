interface LinkCardProps {
  href: string
  icon: any
  children: any
  external?: boolean
  internal?: boolean
}

export function LinkCard({ href, icon, children, external = false, internal = false }: LinkCardProps) {
  const baseClasses = "flex items-center gap-2 md:gap-5 px-2 md:px-6 py-3 md:py-5 rounded-2xl bg-neutral-lighter hover:bg-neutral-light transition-all duration-500 group cursor-pointer border border-neutral-medium/50 hover:border-neutral-dark/60 shadow-sm hover:shadow-lg hover:shadow-neutral-medium/20 transform hover:-translate-y-1"

  const content = (
    <>
      <div className="text-neutral-accent group-hover:text-neutral-darker transition-colors duration-500 flex-shrink-0">
        {icon}
      </div>
      <span className="text-neutral-charcoal group-hover:text-neutral-charcoal transition-colors duration-500 font-medium text-xs md:text-lg tracking-wide">
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

  if (internal) {
    return (
      <a href={href} className={baseClasses}>
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