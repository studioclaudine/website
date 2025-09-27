import { LinkCard } from './LinkCard'
import { InstagramIcon, EtsyIcon, MailIcon, PortfolioIcon } from './Icons'
import { Header } from './Header'
import ceramicsData from '../data/ceramics.json'
import { useState, useEffect } from 'preact/hooks'

export function HomePage() {
  // Sort ceramics by order field
  const sortedCeramics = [...ceramicsData].sort((a, b) => a.order - b.order)

  // State for lazy loading
  const [visibleItems, setVisibleItems] = useState(sortedCeramics.length + 2)

  // Load more items when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        setVisibleItems(prev => Math.min(prev + 4, sortedCeramics.length))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sortedCeramics.length])

  return (
    <div className="min-h-screen bg-neutral-lightest">
      {/* Header */}
      <Header />

      {/* Grid Layout */}
      <div className="p-2 pt-32 md:p-4 md:pt-32 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4" style={{gridAutoRows: 'min-content'}}>
        {/* Render items based on visibleItems */}
        {Array.from({ length: Math.min(visibleItems, sortedCeramics.length + 2) }).map((_, index) => {
          // Determine if this item should have negative margin (items in column 2 on desktop)
          const isInColumn2Desktop = (index % 3) === 1
          const marginClass = isInColumn2Desktop && index > 2 ? "md:-mt-32" : ""

          // First card - photo
          if (index === 0) {
            const ceramic = sortedCeramics[0]
            return (
              <div key="first" className="h-56 md:h-[28rem] relative group cursor-pointer">
                <img
                  src={ceramic.photo}
                  alt={ceramic.title}
                  className="w-full h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-serif text-lg mb-2">{ceramic.title}</h3>
                  <p className="text-white text-sm mb-4">{ceramic.price}</p>
                  {ceramic.etsyLink ? (
                    <a
                      href={ceramic.etsyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                    >
                      View on Etsy
                    </a>
                  ) : (
                    <div className="text-center">
                      {ceramic.outOfStock && (
                        <>
                          <p className="text-white text-sm mb-2">Out of stock</p>
                          <p className="text-white text-xs mb-3">Available on request</p>
                        </>
                      )}
                      <a
                        href={`mailto:studioclaudine@outlook.com?subject=Inquiry about ${ceramic.title}&body=Hi, I'm interested in "${ceramic.title}". Please let me know about availability.`}
                        className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                      >
                        Email me
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          // Second card - logo
          if (index === 1) {
            return (
              <div key="logo" className="h-42 md:h-80 row-span-1">
                <img
                  src="/website/logo.png"
                  alt="Studio Claudine Logo"
                  className="w-full h-full rounded-2xl shadow-sm object-cover"
                />
              </div>
            )
          }

          // Third card
          if (index === 2) {
            const ceramic = sortedCeramics[1]
            return (
              <div key="third" className="h-56 md:h-[28rem] relative group cursor-pointer">
                <img
                  src={ceramic.photo}
                  alt={ceramic.title}
                  className="w-full h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-serif text-lg mb-2">{ceramic.title}</h3>
                  <p className="text-white text-sm mb-4">{ceramic.price}</p>
                  {ceramic.etsyLink ? (
                    <a
                      href={ceramic.etsyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                    >
                      View on Etsy
                    </a>
                  ) : (
                    <div className="text-center">
                      {ceramic.outOfStock && (
                        <>
                          <p className="text-white text-sm mb-2">Out of stock</p>
                          <p className="text-white text-xs mb-3">Available on request</p>
                        </>
                      )}
                      <a
                        href={`mailto:studioclaudine@outlook.com?subject=Inquiry about ${ceramic.title}&body=Hi, I'm interested in "${ceramic.title}". Please let me know about availability.`}
                        className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                      >
                        Email me
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          // Fourth card
          if (index === 3) {
            const ceramic = sortedCeramics[2]
            return (
              <div key="fourth" className="h-56 md:h-[28rem] relative group cursor-pointer">
                <img
                  src={ceramic.photo}
                  alt={ceramic.title}
                  className="w-full h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-serif text-lg mb-2">{ceramic.title}</h3>
                  <p className="text-white text-sm mb-4">{ceramic.price}</p>
                  {ceramic.etsyLink ? (
                    <a
                      href={ceramic.etsyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                    >
                      View on Etsy
                    </a>
                  ) : (
                    <div className="text-center">
                      {ceramic.outOfStock && (
                        <>
                          <p className="text-white text-sm mb-2">Out of stock</p>
                          <p className="text-white text-xs mb-3">Available on request</p>
                        </>
                      )}
                      <a
                        href={`mailto:studioclaudine@outlook.com?subject=Inquiry about ${ceramic.title}&body=Hi, I'm interested in "${ceramic.title}". Please let me know about availability.`}
                        className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                      >
                        Email me
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          // Fifth card - photo
          if (index === 4) {
            const ceramic = sortedCeramics[3]
            return (
              <div key={ceramic.id} className={`h-56 md:h-[28rem] relative group cursor-pointer ${marginClass}`}>
                <img
                  src={ceramic.photo}
                  alt={ceramic.title}
                  className="w-full h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-serif text-lg mb-2">{ceramic.title}</h3>
                  <p className="text-white text-sm mb-4">{ceramic.price}</p>
                  {ceramic.etsyLink ? (
                    <a
                      href={ceramic.etsyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                    >
                      View on Etsy
                    </a>
                  ) : (
                    <div className="text-center">
                      {ceramic.outOfStock && (
                        <>
                          <p className="text-white text-sm mb-2">Out of stock</p>
                          <p className="text-white text-xs mb-3">Available on request</p>
                        </>
                      )}
                      <a
                        href={`mailto:studioclaudine@outlook.com?subject=Inquiry about ${ceramic.title}&body=Hi, I'm interested in "${ceramic.title}". Please let me know about availability.`}
                        className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                      >
                        Email me
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          // Sixth card - navigation buttons
          if (index === 5) {
            return (
              <div key="navigation" className={`bg-white rounded-2xl p-2 md:p-6 shadow-sm h-56 md:h-[28rem] flex flex-col ${marginClass}`}>
                <nav className="space-y-1 md:space-y-4 flex-1 flex flex-col justify-center">
                  <LinkCard
                    href="/website/portfolio"
                    icon={<PortfolioIcon size={12} />}
                    internal
                  >
                    Portfolio
                  </LinkCard>
                  <LinkCard
                    href="https://www.instagram.com/studio.claudine/"
                    icon={<InstagramIcon size={12} />}
                    external
                  >
                    Instagram
                  </LinkCard>
                  <LinkCard
                    href="https://www.etsy.com/shop/StudioClaudineDelft"
                    icon={<EtsyIcon size={12} />}
                    external
                  >
                    Etsy Shop
                  </LinkCard>
                  <LinkCard
                    href="mailto:studioclaudine@outlook.com"
                    icon={<MailIcon size={12} />}
                  >
                    Contact
                  </LinkCard>
                </nav>
              </div>
            )
          }

          // Remaining cards - photos
          const ceramicIndex = index - 2 // Subtract 2 because we have logo and navigation as special items
          if (ceramicIndex >= 4 && ceramicIndex < sortedCeramics.length) {
            const ceramic = sortedCeramics[ceramicIndex]
            return (
              <div key={ceramic.id} className={`h-56 md:h-[28rem] relative group cursor-pointer ${marginClass}`}>
                <img
                  src={ceramic.photo}
                  alt={ceramic.title}
                  className="w-full h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-serif text-lg mb-2">{ceramic.title}</h3>
                  <p className="text-white text-sm mb-4">{ceramic.price}</p>
                  {ceramic.etsyLink ? (
                    <a
                      href={ceramic.etsyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                    >
                      View on Etsy
                    </a>
                  ) : (
                    <div className="text-center">
                      {ceramic.outOfStock && (
                        <>
                          <p className="text-white text-sm mb-2">Out of stock</p>
                          <p className="text-white text-xs mb-3">Available on request</p>
                        </>
                      )}
                      <a
                        href={`mailto:studioclaudine@outlook.com?subject=Inquiry about ${ceramic.title}&body=Hi, I'm interested in "${ceramic.title}". Please let me know about availability.`}
                        className="bg-white text-neutral-darkest px-4 py-2 rounded-lg hover:bg-neutral-light transition-colors duration-200"
                      >
                        Email me
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}