import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Visiona EduLab | Laboratorio de Innovación Educativa con Realidad Virtual',
    description: 'Transformamos el aprendizaje con Meta Quest 3. Experiencias VR inmersivas para instituciones educativas en Argentina: Astronomía, Biología, Historia y Arte.',
    keywords: 'realidad virtual educacion, VR educativo argentina, Meta Quest 3 escuela, aprendizaje inmersivo, neuroeducacion, edtech argentina, visiona edulab',
    openGraph: {
        title: 'Visiona EduLab | Educación Inmersiva con Realidad Virtual',
        description: 'Laboratorio itinerante de VR educativo. Llevamos Meta Quest 3 a tu institución y transformamos el aprendizaje.',
        url: 'https://visionaedulab.com.ar',
        siteName: 'Visiona EduLab',
        locale: 'es_AR',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={jakarta.className}>{children}</body>
        </html>
    );
}
