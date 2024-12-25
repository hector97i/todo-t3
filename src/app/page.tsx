const mockImages = [
  // {
  //   name: "Screenshot 2024-12-10 at 11.44.54 a.m..png",
  //   key: "7xd3r8ySPE5iMEkuprDS4sjTGHFfcUoxlud76YtVzIkrACN0",
  //   customId: 1,
  //   url: "https://utfs.io/f/7xd3r8ySPE5iMEkuprDS4sjTGHFfcUoxlud76YtVzIkrACN0",
  //   size: 988252,
  //   uploadedAt: "2024-12-25T21:28:49.000Z",
  // },
  {
    name: "Screenshot 2024-11-29 at 3.18.17 p.m..png",
    key: "7xd3r8ySPE5i7UZROdySPE5ieNWjB2pOYc6V03DzMH4ZsqIX",
    customId: 2,
    url: "https://utfs.io/f/7xd3r8ySPE5i7UZROdySPE5ieNWjB2pOYc6V03DzMH4ZsqIX",
    size: 941323,
    uploadedAt: "2024-12-25T21:28:49.000Z",
  },
  {
    name: "Screenshot 2024-11-29 at 3.18.24 p.m..png",
    key: "7xd3r8ySPE5ilnD9pQJep98Lb74VrqFQCyGBcgAzH26XlPRw",
    customId: 3,
    url: "https://utfs.io/f/7xd3r8ySPE5ilnD9pQJep98Lb74VrqFQCyGBcgAzH26XlPRw",
    size: 1990948,
    uploadedAt: "2024-12-25T21:28:49.000Z",
  },
  {
    name: "Screenshot 2024-12-10 at 12.14.21 p.m..png",
    key: "7xd3r8ySPE5iqDf82MPsUXNzpdGA2a3kMnjytowvVfDc61IR",
    customId: 4,
    url: "https://utfs.io/f/7xd3r8ySPE5iqDf82MPsUXNzpdGA2a3kMnjytowvVfDc61IR",
    size: 1019581,
    uploadedAt: "2024-12-25T21:28:49.000Z",
  },
];

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.customId}>
            <img src={image.url} alt={image.name} className="w-60" />
          </div>
        ))}
      </div>
    </main>
  );
}
