import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const DosDontsSection = () => (
  <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mb-4 dark:bg-card dark:border-border">
    <CardHeader className="px-4 sm:px-6 md:px-8 dark:bg-card">
      <CardTitle id="dos-donts" className="text-lg sm:text-xl md:text-2xl font-bold dark:text-primary">Dos and Don'ts of Safe Web Surfing</CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto">
      <Table className="dark:bg-card">
        <TableHeader className="dark:bg-card">
          <TableRow className="dark:bg-card">
            <TableHead className="w-1/2 text-base sm:text-lg md:text-xl dark:text-primary">Do</TableHead>
            <TableHead className="w-1/2 text-base sm:text-lg md:text-xl dark:text-primary">Don't</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="dark:bg-card">
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Use strong, unique passwords</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Share your passwords with others</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Keep your software updated</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Ignore security updates</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Check website URLs for HTTPS</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Click suspicious links or pop-ups</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Use two-factor authentication</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Reuse the same password everywhere</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Log out of accounts on shared devices</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Download files from untrusted sources</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Report suspicious activity to your provider</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Ignore warning messages from your browser</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Use privacy settings on social media</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Overshare personal information online</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Verify emails before clicking links</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Open attachments from unknown senders</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Back up important data regularly</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Forget to back up your files</TableCell>
          </TableRow>
          {/* Additional Dos and Don'ts */}
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Use a VPN on public Wi-Fi</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Access sensitive accounts on open networks</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Educate yourself about phishing scams</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Respond to suspicious requests for information</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Use secure, up-to-date browsers</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Disable browser security features</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Review app permissions regularly</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Grant unnecessary permissions to apps</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Be cautious with social media friend requests</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Accept requests from unknown people</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Install antivirus and keep it updated</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Ignore antivirus warnings</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Check privacy policies before signing up</TableCell>
            <TableCell className="text-xs sm:text-sm md:text-base dark:text-primary-foreground">Sign up without reading terms</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default DosDontsSection;
