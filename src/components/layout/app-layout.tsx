interface IAppLayout {
  children: React.ReactNode;
}

export function AppLayout({ children }: IAppLayout) {
  return <div className="px-6 py-7">{children}</div>;
}
