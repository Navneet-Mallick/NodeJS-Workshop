async function createBlog(req, res) {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;

  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description,
  });

  res.json({
    message: "Blog created successfully",
  });
}
async function readBlog(req, res) {
  const blog = await Blog.findById(req.params.id);

  res.json({
    message: "Blog fetched successfully",
    blog,
  });
}
async function deleteBlog(req, res) {
  const id = req.params.id;

  await Blog.findByIdAndDelete(id);

  res.json({
    message: "Blog deleted successfully",
  });
}
module.exports={createBlog,readBlog,deleteBlog}