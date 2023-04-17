const handler = async (req, res) => {
  if (req.method === "GET") {
    const storyId = req.query.storyId;
    return res.status(200).json({ storyId });
  }
};

export default handler;
