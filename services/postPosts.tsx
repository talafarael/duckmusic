type Song = {
  _id: string;
  autor: string;
  songs: string;
  img_autor: string;
  idpath: string;
  like: number;
};

export async function postAuthorInfoPosts(id: string) {

  const response = await fetch('https://project-49di.onrender.com/auth/getauthorinfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      author: id,
    }),
  });

  const data = response.json();
  return data;

}
export async function getData(id: string){
  try {
    const response = await fetch('https://project-49di.onrender.com/auth/getsongsforautor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 120,
      },
      body: JSON.stringify({
        autor: id,
      }),
    });

    const data =await response.json();
   const res=data.music
    return res as Song[];
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
}