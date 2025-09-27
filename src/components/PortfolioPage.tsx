import { CeramicItem } from './CeramicItem'
import { Header } from './Header'
import ceramicsData from '../data/ceramics.json'

interface CeramicData {
  id: number
  order: number
  title: string
  subtitle: string
  photo: string
  price: string
  etsyLink: string | null
}

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-neutral-lightest">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-neutral-lighter to-neutral-light py-32 pt-40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl text-neutral-charcoal mb-6 font-semibold tracking-wide">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-neutral-darker max-w-2xl mx-auto font-light">
            Discover our collection of handcrafted ceramic pieces, each uniquely made with love and attention to detail.
          </p>
        </div>
      </div>

      {/* Navigation Back */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <a
          href="/website/"
          className="inline-flex items-center gap-2 text-neutral-accent hover:text-neutral-darker transition-colors duration-300 font-medium"
        >
          ← Back to Home
        </a>
      </div>

      {/* Ceramics Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {(ceramicsData as CeramicData[]).sort((a, b) => a.order - b.order).map((item) => (
            <CeramicItem
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              photo={item.photo}
              price={item.price}
              etsyLink={item.etsyLink}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-neutral-light py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-neutral-darker mb-4">
            Can't find what you're looking for? Let's create something special together.
          </p>
          <a
            href="mailto:studioclaudine@outlook.com"
            className="inline-flex items-center gap-2 bg-neutral-accent hover:bg-neutral-darker text-neutral-lightest px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}