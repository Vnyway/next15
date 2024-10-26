const page = async ({ params }: { params: { uid: string } }) => {
  const { uid } = await params;
  return (
    <div>
      <h1>User Profile: {uid}</h1>
    </div>
  );
};

export default page;
