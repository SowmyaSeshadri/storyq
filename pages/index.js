import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to StoryQ!</h1>

      <Link href="/stories">
        <button>Start building stories!</button>{" "}
      </Link>
    </>
  );
};

export default LandingPage;
