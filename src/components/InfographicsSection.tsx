import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const InfographicsSection = () => (
  <Card className="w-full max-w-2xl mb-8 dark:bg-card dark:border-border shadow-md">
    <CardHeader className="px-8 py-6 flex flex-col items-center gap-2">
      <CardTitle className="text-2xl font-bold text-center dark:text-primary">Web Safety by the Numbers</CardTitle>
      <CardDescription className="text-center dark:text-primary-foreground">Quick stats to highlight the importance of safe surfing.</CardDescription>
    </CardHeader>
    <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
      <div className="flex flex-col items-center">
        <span className="text-5xl">🔒</span>
        <span className="text-2xl font-bold mt-2">80%</span>
        <span className="text-sm text-center mt-1">of breaches involve weak or reused passwords</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl">📧</span>
        <span className="text-2xl font-bold mt-2">300K+</span>
        <span className="text-sm text-center mt-1">phishing sites detected monthly</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-5xl">🛡️</span>
        <span className="text-2xl font-bold mt-2">60%</span>
        <span className="text-sm text-center mt-1">of users don’t use two-factor authentication</span>
      </div>
    </CardContent>
  </Card>
);

export default InfographicsSection;
