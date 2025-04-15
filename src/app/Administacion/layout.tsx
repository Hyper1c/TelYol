// app/Administracion/layout.tsx

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-xl font-semibold mb-4">Área de Administración</h2>
        {children}
      </div>
    );
  }
  