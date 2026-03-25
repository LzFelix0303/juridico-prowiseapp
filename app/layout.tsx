import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veredicta | Jurídico com IA',
  description: 'A Veredicta conecta seus fluxos jurídicos e coloca agentes de IA para executar etapas operacionais com mais ordem e agilidade.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
