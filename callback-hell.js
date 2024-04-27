function fetchUser(userId, callback) {
    setTimeout(() => {
      console.log("Fetching user...");
      callback({ userId, name: "John Doe" });
    }, 1000);
  }
  
  function fetchPosts(userId, callback) {
    setTimeout(() => {
      console.log("Fetching posts...");
      callback([{ id: 1, title: "First Post" }, { id: 2, title: "Second Post" }]);
    }, 1000);
  }
  
  function fetchComments(postId, callback) {
    setTimeout(() => {
      console.log("Fetching comments...");
      callback([{ id: 1, content: "Nice post!" }]);
    }, 1000);
  }
  
  fetchUser(1, (user) => {
    console.log("User fetched:", user);
    fetchPosts(user.userId, (posts) => {
      console.log("Posts fetched:", posts);
      fetchComments(posts[0].id, (comments) => {
        console.log("Comments fetched:", comments);
      });
    });
  });
  