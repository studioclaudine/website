import { InstagramIcon, MailIcon } from './Icons'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-lighter border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - empty for balance */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:studioclaudine@outlook.com"
              className="flex items-center gap-2 text-neutral-charcoal hover:text-neutral-darkest transition-colors duration-300"
              aria-label="Send email"
            >
              <MailIcon size={20} />
              <span className="hidden sm:inline text-sm font-medium">Contact</span>
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0 text-center">
            <a href="/website/" className="block">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-neutral-lighter border-2 border-neutral-medium shadow-lg mx-auto">
                <img
                  src="/website/logo.png"
                  alt="Studio Claudine Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => console.error('Logo failed to load:', e)}
                />
              </div>
            </a>
            <p className="text-neutral-charcoal text-xs md:text-sm font-medium mt-1">
              Handmade pottery by Claudine Maas
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/studio.claudine/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-charcoal hover:text-neutral-darkest transition-colors duration-300"
              aria-label="Follow on Instagram"
            >
              <InstagramIcon size={20} />
              <span className="hidden sm:inline text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}