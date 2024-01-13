export const getMainPosts= async()=>{
    const response =await fetch('http://localhost:9000/auth/getsongsforcreatmainpage',
    {next: {
        revalidate: 60,
      }})
    if (!response.ok) throw new Error("Unable to fetch posts.");
    return  response.json()
}