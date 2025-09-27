import { EtsyIcon, MailIcon } from './Icons'

interface CeramicItemProps {
  id: number
  title: string
  subtitle: string
  photo: string
  price: string
  etsyLink: string | null
}

export function CeramicItem({ title, subtitle, photo, price, etsyLink }: CeramicItemProps) {
  const isAvailable = etsyLink !== null

  return (
    <div className="bg-neutral-lightest rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-neutral-light">
      <div className="aspect-square overflow-hidden">
        <img
          src={photo}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center'
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-charcoal mb-1">{title}</h3>
        <p className="text-sm text-neutral-darker mb-2">{subtitle}</p>
        <p className="text-xl font-bold text-neutral-accent mb-3">{price}</p>

        {isAvailable ? (
          <a
            href={etsyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-neutral-accent hover:bg-neutral-darker text-neutral-lightest px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
          >
            <EtsyIcon size={20} />
            Shop on Etsy
          </a>
        ) : (
          <div className="text-center p-3 rounded-lg bg-neutral-light/50 border border-neutral-medium">
            <p className="text-neutral-darker text-sm mb-2">Interested?</p>
            <a
              href="mailto:studioclaudine@outlook.com"
              className="inline-flex items-center gap-1 text-neutral-accent hover:text-neutral-darker transition-colors duration-300 font-medium text-sm"
            >
              <MailIcon size={16} />
              Contact me by email
            </a>
          </div>
        )}
      </div>
    </div>
  )
}