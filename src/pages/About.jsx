import {   AboutDiscover, AboutTopSection,  TrustedPartners } from "../components"


function About() {
  return (
    <div className="w-full pb-16">
        <AboutTopSection/>
        {/* <AboutAllLawsSection/> */}
        {/* <Experties/> */}
        <AboutDiscover/>
        <TrustedPartners/>
        {/* <AboutContact/> */}
    </div>
  )
}

export default About
