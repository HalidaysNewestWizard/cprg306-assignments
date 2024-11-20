export default async function Page({ params }) {
  // destructure the id from the params
  const { id } = params;
  // Check if the id is not provided
  if (!id) {
    return <div> Page not found</div>;
  }

  // Convert the id to a number
  const blogId = parseInt(id);
  if (isNaN(blogId)) {
    return <div> Page no Num found</div>;
  }
  // Check if the id is in the range of 1 to 50
  if (blogId < 1 || blogId > 50) {
    return <div> Page not in range</div>;
  }

  return (
    <div>
      <h1>Page</h1>
      <p>This is the page content</p>
      <h1>{blogId}</h1>
    </div>
  );
}
