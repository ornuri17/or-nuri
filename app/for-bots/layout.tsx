export default function ForBotsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
