export default async function HomePage() {
  const orgJsonLd = await resolveOrgJsonLd();

  return (
    <div className=" ">
     this is home page
    </div>
  );
}
