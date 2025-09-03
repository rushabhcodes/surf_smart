import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ResourcesSection = () => (
  <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mb-4 dark:bg-card dark:border-border">
    <CardHeader className="px-4 sm:px-6 md:px-8 dark:bg-card">
      <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold dark:text-primary">Resources for Safe Surfing</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-4 sm:pl-6 space-y-2">
        <li>
          <a href="https://www.getsafeonline.org/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">Get Safe Online</a> – Tips and guides for staying safe on the internet.
        </li>
        <li>
          <a href="https://www.staysafeonline.org/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">Stay Safe Online</a> – Resources for individuals and businesses.
        </li>
        <li>
          <a href="https://www.cyberaware.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">Cyber Aware</a> – UK government advice on cyber security.
        </li>
        <li>
          <a href="https://www.consumer.ftc.gov/topics/online-security" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">FTC Online Security</a> – US government tips for online safety.
        </li>
        <li>
          <a href="https://www.childnet.com/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">Childnet</a> – Internet safety for children and families.
        </li>
      </ul>
    </CardContent>
  </Card>
);

export default ResourcesSection;
