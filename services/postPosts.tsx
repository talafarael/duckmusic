export const postAuthorInfoPosts= async (id:string)=>{
    const response = await fetch('https://project-49di.onrender.com/auth/getauthorinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 120,
        },
        body: JSON.stringify({
            author: id,
        }),  
     });
    return response.json()
      
}