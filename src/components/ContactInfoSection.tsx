import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const ContactInfoSection = () => (
  <Card className="w-full max-w-2xl mb-8 dark:bg-card dark:border-border shadow-md">
    <CardHeader className="px-8 py-6 flex flex-col items-center gap-2">
      <CardTitle className="text-2xl font-bold text-center dark:text-primary">Report Cybercrime & Get Help (India)</CardTitle>
      <CardDescription className="text-center dark:text-primary-foreground">Reach out to official Indian resources for assistance or to report an incident.</CardDescription>
    </CardHeader>
    <CardContent>
      <Alert className="bg-muted dark:bg-muted text-base">
        <AlertTitle>Contact Information</AlertTitle>
        <AlertDescription>
          <ul className="list-disc pl-4 space-y-2">
            <li>National Cyber Crime Helpline: <a href="tel:1930" className="underline">1930</a></li>
            <li>Report Online: <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="underline">cybercrime.gov.in</a> (Government of India portal)</li>
            <li>Delhi Police Cyber Cell: <a href="https://delhipolice.gov.in/cyber-crime" target="_blank" rel="noopener noreferrer" className="underline">delhipolice.gov.in/cyber-crime</a></li>
            <li>Maharashtra Cyber: <a href="https://cybercrime.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="underline">cybercrime.maharashtra.gov.in</a></li>
            <li>Email: <a href="mailto:cybercrime@gov.in" className="underline">cybercrime@gov.in</a></li>
          </ul>
          <div className="mt-4 text-sm">
            <strong>Tip:</strong> For state-specific reporting, visit your state police website and look for the cyber cell section.
          </div>
        </AlertDescription>
      </Alert>
    </CardContent>
  </Card>
);

export default ContactInfoSection;
