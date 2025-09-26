import { LinkCard } from './LinkCard'
import { InstagramIcon, EtsyIcon, MailIcon } from './Icons'

export function HomePage() {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Top section with darker background */}
      <div id="top-section" className="bg-pottery-sand flex flex-col items-center justify-center px-4 py-24 pb-32">
        <header className="text-center">
          <h1 className="text-5xl md:text-7xl text-pottery-charcoal mb-4">
            Studio Claudine
          </h1>
          <p className="text-lg md:text-xl text-pottery-clay">
            Handmade ceramics
          </p>
        </header>
      </div>

      {/* Logo positioned at the divide - using negative margin approach */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Studio Claudine Logo"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => console.error('Logo failed to load:', e)}
            />
          </div>
        </div>
      </div>

      {/* Bottom section with lighter background */}
      <div className="flex-1 bg-pottery-cream flex flex-col items-center justify-start px-4 pt-40 pb-12">
        <nav className="flex flex-col gap-4 mb-8 w-full max-w-sm">
          <LinkCard
            href="https://www.instagram.com/studio.claudine/"
            icon={<InstagramIcon size={24} />}
            external
          >
            Instagram
          </LinkCard>
          <LinkCard
            href="https://www.etsy.com/shop/StudioClaudineDelft"
            icon={<EtsyIcon size={24} />}
            external
          >
            Etsy Shop
          </LinkCard>
          <LinkCard
            href="mailto:studioclaudine@outlook.com"
            icon={<MailIcon size={24} />}
          >
            Contact
          </LinkCard>
        </nav>

      </div>
    </div>
  )
}