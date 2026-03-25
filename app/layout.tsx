import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veredicta | Operação jurídica com IA',
  description: 'A Veredicta integra fluxos jurídicos, documentos e comunicação para operar rotinas legais com IA.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
