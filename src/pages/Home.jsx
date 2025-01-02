import { GlobalAffiliations, HeroSection, UpdatesSection } from "../components"

function Home() {
  return (
    <div className="w-full pb-16">
        <HeroSection/>
        <GlobalAffiliations/>
        <UpdatesSection/>
    </div>
  )
}

export default Home
