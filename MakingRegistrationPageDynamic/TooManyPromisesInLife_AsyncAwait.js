document.addEventListener("DOMContentLoaded", async function () {
    const User = {
      username: "Shweta",
      lastActivityTime: new Date().getTime(),
      posts: [],
    };
  
    async function createPost(post) {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const newPost = { content: post, timestamp: new Date().toLocaleTimeString() };
          User.posts.push(newPost);
          resolve(newPost);
        }, 1000);
      });
    }
  
    function updateLastUserActivityTime() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newLastActivityTime = new Date().getTime();
          User.lastActivityTime = newLastActivityTime;
          resolve(newLastActivityTime);
        }, 1000);
      });
    }
  
    async function deletePost() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (User.posts.length > 0) {
            const deletedPost = User.posts.pop();
            resolve(deletedPost);
          } else {
            reject("No posts to delete.");
          }
        }, 1000);
      });
    }
  
    function formatTimeElapsed(timestamp) {
      const currentTime = new Date().getTime();
      const elapsedSeconds = (currentTime - timestamp) / 1000;
      return `${elapsedSeconds.toFixed(3)} seconds ago`;
    }
  
    function displayOutput(message, timestamp) {
      const outputList = document.getElementById("output");
      if (outputList) {
        const liElement = document.createElement("li");
        const timeElapsed = timestamp ? ` - last updated ${formatTimeElapsed(timestamp)}` : "";
        liElement.textContent = `${message}${timeElapsed}`;
        outputList.appendChild(liElement);
  
        // If it's a post deletion, remove the message after a delay
        if (message.startsWith("Post deleted")) {
          setTimeout(() => {
            liElement.remove();
          }, 2000);
        }
      } else {
        console.error("Output list not found.");
      }
    }
  
    function displayPosts(posts) {
      const outputList = document.getElementById("output");
      if (outputList) {
        outputList.innerHTML = "";
  
        posts.forEach((post) => {
          const liElement = document.createElement("li");
          const timeElapsed = formatTimeElapsed(User.lastActivityTime);
          liElement.textContent = `Post: ${post.content} - last updated activity -> ${timeElapsed}`;
          outputList.appendChild(liElement);
        });
      } else {
        console.error("Output list not found.");
      }
    }
  
    // Create multiple posts
    const postsToCreate = ["Post 1", "Post 2", "Post 3"];
  
    try {
      const createdPosts = await Promise.all(postsToCreate.map(createPost));
      displayPosts(createdPosts);
  
      const lastActivityTime = await updateLastUserActivityTime();
      displayOutput("Last activity time updated", lastActivityTime);
  
      await deletePost();
      displayPosts(User.posts); // Display remaining posts after deleting one
    } catch (error) {
      displayOutput(`An error occurred: ${error}`);
    }
  });
  