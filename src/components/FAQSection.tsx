import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQSection = () => (
  <Card className="w-full max-w-2xl mb-8 dark:bg-card dark:border-border shadow-md">
    <CardHeader className="px-8 py-6 flex flex-col items-center gap-2">
      <CardTitle className="text-2xl font-bold text-center dark:text-primary">Frequently Asked Questions</CardTitle>
      <CardDescription className="text-center dark:text-primary-foreground">Answers to common online safety questions.</CardDescription>
    </CardHeader>
    <CardContent>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>How do I know if a website is safe?</AccordionTrigger>
          <AccordionContent>Look for HTTPS in the URL, a padlock icon, and avoid sites with lots of pop-ups or spelling errors.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>What should I do if I receive a suspicious email?</AccordionTrigger>
          <AccordionContent>Don’t click any links or download attachments. Verify the sender and report phishing attempts to your provider.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>How can I protect my social media accounts?</AccordionTrigger>
          <AccordionContent>Use strong passwords, enable two-factor authentication, and review privacy settings regularly.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </CardContent>
  </Card>
);

export default FAQSection;
