import { CityCard } from "@/components/city-card"
import { CityFilters } from "@/components/city-filters"
import { SiteHeader } from "@/components/site-header"
import { readCities } from "@/lib/readCities"

export default async function Home() {
  const cities = await readCities()

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-6 space-y-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Discover Popup Cities</h1>
            <p className="text-muted-foreground">
              Explore Pop-Up Cities and Network States around the world
            </p>
          </div>
          <CityFilters />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city['Popup Name']} {...city} />
            ))}
          </div>
        </section>
{/*         
        <section className="container py-6 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="text-2xl font-bold">Interactive Map</h2>
            <p className="text-muted-foreground">
              View all popup cities on an interactive map to explore their locations
            </p>
          </div>
          <Map cities={cities} />
        </section> */}
      </main>
    </div>
  )
}

