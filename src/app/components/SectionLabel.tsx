interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm mb-4">
      {children}
    </div>
  );
}
