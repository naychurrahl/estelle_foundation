interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm mb-4">
      {children}
    </div>
  );
}
