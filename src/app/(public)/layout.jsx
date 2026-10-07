export default async function PublicLayout({ children }) {
  return (
    <div className="flex flex-1 flex-col pb-16 lg:pb-0">
      <main className="mx-auto w-full flex-1">{children}</main>
    </div>
  );
}
