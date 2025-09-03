import HeroSection from "@/components/HeroSection"
  import InfographicsSection from "@/components/InfographicsSection"
  import DosDontsSection from "@/components/DosDontsSection"
  import FAQSection from "@/components/FAQSection"
  import ResourcesSection from "@/components/ResourcesSection"
  import ContactInfoSection from "@/components/ContactInfoSection"
  
function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-background flex flex-col items-center py-4 px-2 sm:px-4 md:px-8 dark:text-foreground" data-theme="dark">
      <HeroSection />
      <InfographicsSection />
      <DosDontsSection />
      <FAQSection />
      <ResourcesSection />
      <ContactInfoSection />
      <footer className="w-full max-w-lg sm:max-w-xl md:max-w-2xl text-center pb-4 text-foreground dark:text-primary-foreground">
        <p className="text-xs sm:text-sm">
          Made with <span role="img" aria-label="love">❤️</span> by <a href="https://instagram.com/sujal_1559" target="_blank" rel="noopener noreferrer" className="underline">Sujal</a>
        </p>
      </footer>
    </div>
  )
}

export default App;