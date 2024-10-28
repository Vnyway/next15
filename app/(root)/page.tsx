// interface Album {
//   userId: number;
//   id: number;
//   title: string;
// }

// export default async function Home() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/albums");
//   if (!response) throw new Error("Failed to fetch data");
//   const albums = await response.json();
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
//       {albums.map((album: Album) => (
//         <div key={album.id} className="bg-white shadow-md rounded-lg">
//           <h3 className="text-lg font-bold mb-2">{album.title}</h3>
//           <p className="text-gray-600">Album ID: {album.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

interface Book {
  id: number;
  name: string;
}

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/books");
  if (!response) throw new Error("Failed to fetch data");
  const books = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
      {books.map((book: Book) => (
        <div key={book.id} className="bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold mb-2">{book.name}</h3>
          <p className="text-gray-600">Book ID: {book.id}</p>
        </div>
      ))}
    </div>
  );
}
