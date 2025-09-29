import { LinkCard } from './LinkCard'
import { InstagramIcon, MailIcon, PortfolioIcon } from './Icons'
import { Header } from './Header'
import ceramicsData from '../data/ceramics.json'

interface CeramicData {
  id: number
  order: number
  title: string
  subtitle: string | null
  photo: string
  price: string
  etsyLink: string | null
  outOfStock: boolean
}

export function HomePage() {
  // Sort ceramics by order field (low to high)
  const sortedCeramics = (ceramicsData as CeramicData[]).sort((a, b) => a.order - b.order)

  return (
    <div className="min-h-screen bg-neutral-lighter">
      {/* Header */}
      <Header />

      {/* Grid Layout */}
      <div className="p-2 pt-48 md:p-4 md:pt-48 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4" style={{gridAutoRows: 'min-content'}}>
        {/* Logo */}
        <div className="h-56 md:h-[28rem]">
          <img
            src="/website/logo.png"
            alt="Studio Claudine Logo"
            className="w-full h-full rounded-2xl shadow-sm object-cover"
          />
        </div>

        {/* Navigation buttons */}
        <div className="bg-neutral-lightest rounded-2xl p-3 md:p-6 shadow-sm h-48 md:h-80 flex flex-col">
          <nav className="space-y-2 md:space-y-3 flex-1 flex flex-col justify-center">
            <LinkCard
              href="/website/shop"
              icon={<PortfolioIcon size={12} />}
              internal
            >
              Shop
            </LinkCard>
            <LinkCard
              href="https://www.instagram.com/studio.claudine/"
              icon={<InstagramIcon size={12} />}
              external
            >
              Instagram
            </LinkCard>
            <LinkCard
              href="mailto:studioclaudine@outlook.com"
              icon={<MailIcon size={12} />}
            >
              Contact
            </LinkCard>
          </nav>
        </div>

        {/* All ceramics */}
        {sortedCeramics.map((ceramic, index) => {
          const isInColumn2Desktop = ((index + 2) % 3) === 1 // +2 because logo and navigation come first
          const marginClass = isInColumn2Desktop && index >= 1 ? "md:-mt-32" : ""

          return (
            <div key={ceramic.id} className={`h-56 md:h-[28rem] relative group cursor-pointer ${marginClass}`}>
              <img
                src={encodeURI(ceramic.photo)}
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
        })}
      </div>
    </div>
  )
}