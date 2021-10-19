

const addPostHandler = async(event) =>{
  event.preventDefault();
  const title = $("#postTitle").val();
  console.log("ran app post handler")
  const content = $("#postContent").val()
  

  console.log(title + " " + content);
  if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            "title": title,
            "content": content,
            // "owner": req.session.user_id
            
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      if (response.ok) {
        document.location.replace('/');
        alert("made new post")
      } else {
        alert('Failed to create project');
      }
    }
  
  

  

}











document
.querySelector("#addPost")
.addEventListener("submit",addPostHandler)