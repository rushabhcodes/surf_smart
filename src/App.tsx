import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table"

function App() {
  return (
  <div className="min-h-screen bg-background dark:bg-background flex flex-col items-center py-4 px-2 sm:px-4 md:px-8 dark:text-foreground" data-theme="dark">
  <Card className="w-full max-w-2xl mb-8 dark:bg-card dark:border-border shadow-lg relative overflow-hidden">
  {/* Animated gradient background flair */}
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
          <button type="button" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg transition text-lg font-semibold dark:bg-primary dark:text-primary-foreground focus:outline-none">
      <span>See Dos & Don'ts</span>
      <span role="img" aria-label="checklist" className="text-xl">✅</span>
    </button>
        </CardContent>
      </Card>
  <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mb-4 dark:bg-card dark:border-border">
  <CardHeader className="px-4 sm:px-6 md:px-8 dark:bg-card">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-primary">Safe Web Surfing Awareness</CardTitle>
          <CardDescription className="text-base sm:text-lg dark:text-primary-foreground">Learn how to protect yourself online and surf smart!</CardDescription>
        </CardHeader>
      </Card>
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
            </TableBody>
          </Table>
        </CardContent>
      </Card>
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
      <footer className="w-full max-w-lg sm:max-w-xl md:max-w-2xl text-center py-4 text-foreground dark:text-primary-foreground">
        <p className="text-sm sm:text-base">
          For more tips, visit <a href="https://www.getsafeonline.org/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">Get Safe Online</a> and <a href="https://www.staysafeonline.org/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-primary">Stay Safe Online</a>.
        </p>
      </footer>
    </div>
  )
}

export default App;