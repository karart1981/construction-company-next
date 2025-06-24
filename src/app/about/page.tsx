import React from 'react'
import AboutContent from '@/components/aboutContent/AboutContent';
import AboutHero from '@/components/aboutHero/AboutHero';
import AboutCompany from '@/components/aboutCompany/AboutCompany'


const About = () => {
  return (
    <div>
       <AboutHero />
       <AboutContent />
       <AboutCompany />
    </div>
  )
}

export default About;
