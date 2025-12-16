import { CeramicItem } from './CeramicItem'
import { Header } from './Header'
import ceramicsData from '../data/ceramics.json'
import { useState, useEffect } from 'preact/hooks'
import { route } from 'preact-router'

interface CeramicData {
  id: number
  order: number
  title: string
  subtitle: string
  photo: string
  price: string
  etsyLink: string | null
  outOfStock: boolean
}

interface PortfolioPageProps {
  filter?: string
}

export function PortfolioPage({ filter }: PortfolioPageProps) {
  const [stockFilter, setStockFilter] = useState<'all' | 'inStock' | 'outOfStock'>('inStock')

  // Update filter based on URL parameter
  useEffect(() => {
    if (filter === 'all' || filter === 'instock' || filter === 'outofstock') {
      const normalizedFilter = filter === 'instock' ? 'inStock' : filter === 'outofstock' ? 'outOfStock' : 'all'
      setStockFilter(normalizedFilter)
    } else if (!filter) {
      // Redirect to /shop/instock when no filter is specified
      route('/shop/instock', true)
    }
  }, [filter])

  const filteredCeramics = (ceramicsData as CeramicData[]).filter(item => {
    if (stockFilter === 'inStock') return !item.outOfStock
    if (stockFilter === 'outOfStock') return item.outOfStock
    return true
  }).sort((a, b) => a.order - b.order)

  return (
    <div className="min-h-screen bg-neutral-lighter">
      {/* Header */}
      <Header />


      {/* Navigation Back */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-neutral-accent hover:text-neutral-darker transition-colors duration-300 font-medium"
          >
            ← Back to Home
          </a>

          <div className="flex gap-2">
            <button
              onClick={() => route('/shop/all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                stockFilter === 'all'
                  ? 'bg-neutral-accent text-neutral-lightest'
                  : 'bg-neutral-lightest text-neutral-charcoal hover:bg-neutral-light'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => route('/shop/instock')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                stockFilter === 'inStock'
                  ? 'bg-neutral-accent text-neutral-lightest'
                  : 'bg-neutral-lightest text-neutral-charcoal hover:bg-neutral-light'
              }`}
            >
              In Stock
            </button>
            <button
              onClick={() => route('/shop/outofstock')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                stockFilter === 'outOfStock'
                  ? 'bg-neutral-accent text-neutral-lightest'
                  : 'bg-neutral-lightest text-neutral-charcoal hover:bg-neutral-light'
              }`}
            >
              Out of Stock
            </button>
          </div>
        </div>
      </div>

      {/* Ceramics Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredCeramics.map((item) => (
            <CeramicItem
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              photo={item.photo}
              price={item.price}
              etsyLink={item.etsyLink}
              outOfStock={item.outOfStock}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-neutral-lightest py-12">
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