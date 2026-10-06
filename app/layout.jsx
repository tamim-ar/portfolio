import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: 'Tamim Ahasan Rijon | Software Quality Assurance Engineer',
  description: 'Portfolio of Tamim Ahasan Rijon, Software Quality Assurance Engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-slate-900">
            <div className="relative">
              <div
                className="fixed inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none"
                style={{ backgroundSize: '32px 32px' }}
              />
              <div className="fixed inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
              <div className="fixed inset-0 noise opacity-20 pointer-events-none" />
              <div className="relative">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
