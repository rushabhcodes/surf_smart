import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const HeroSection = () => (
  <Card className="w-full max-w-2xl mb-8 dark:bg-card dark:border-border shadow-lg relative overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none animate-gradient bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-2xl"></div>
    <CardHeader className="flex flex-col items-center gap-2 px-8 py-12 dark:bg-card relative z-10">
      <CardTitle className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center dark:text-primary flex items-center gap-3">
        <span role="img" aria-label="surfing" className="text-5xl md:text-6xl">🏄‍♂️</span>
        Safe Surfing, Smart Living
      </CardTitle>
      <CardDescription className="mt-4 text-lg sm:text-xl md:text-2xl text-center dark:text-primary-foreground">
        Empower yourself with the knowledge and tools to protect your digital life.<br className="hidden sm:block" />
        <span className="inline-block mt-2 text-pink-600 dark:text-pink-400 font-semibold">Surf smart, stay safe, and have fun online!</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="flex justify-center py-6 relative z-10">
      <a href="#dos-donts" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg transition text-lg font-semibold dark:bg-primary dark:text-primary-foreground focus:outline-none">
        <span>See Dos & Don'ts</span>
        <span role="img" aria-label="checklist" className="text-xl">✅</span>
      </a>
    </CardContent>
  </Card>
);

export default HeroSection;
