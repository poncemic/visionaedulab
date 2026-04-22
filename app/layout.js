import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Visiona EduLab | Innovación Educativa Inmersiva',
  description: 'Expandiendo los límites de la educación en la frontera de la innovación tecnológica.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
