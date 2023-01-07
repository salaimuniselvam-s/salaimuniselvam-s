import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  let { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({
      success: true,
      message: "All fields are required",
      data: null,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    switch (req.method) {
      case "POST":
        let bodyObject = req.body;
        await db.collection("posts").insertOne(bodyObject);
        res.status(200).json({
          success: true,
          message: "Message sent successfully",
          data: "",
        });
        break;
      case "GET":
        const allPosts = await db.collection("allPosts").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Failed To Submit",
      data: null,
    });
  }
};
