export const getMainPosts= async()=>{
    const response =await fetch('https://project-49di.onrender.com/auth/getsongsforcreatmainpage')
    if (!response.ok) throw new Error("Unable to fetch posts.");
    return  response.json()
}