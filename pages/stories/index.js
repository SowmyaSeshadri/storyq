import Link from "next/link";

const Stories = () => {
  return (
    <>
      <p>Pick the story you want to sequence!</p>
      <ul>
        <Link href="/stories/story1">
          <li>Story 1</li>
        </Link>
        <Link href="/stories/story2">
          <li>Story 2</li>
        </Link>
      </ul>
    </>
  );
};

export default Stories;
