interface IAppLayout {
  children: React.ReactNode;
}

export function AppLayout({ children }: IAppLayout) {
  return <div className="w-full max-w-[425px] mx-auto">{children}</div>;
}
