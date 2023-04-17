import { useRouter } from "next/router";

const Story = () => {
  const router = useRouter();
  const { storyId } = router.query;

  return (
    <>
      <h1>{storyId}</h1>
    </>
  );
};

export default Story;
