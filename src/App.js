import ImageCard from './components/ImageCard';

function App() {
  const images = [
    {
      url: 'https://source.unsplash.com/random',
      name: 'John',
      view: 4000,
      dowload: 300,
      like: 400,
      tags: ['#tag1', '#tag2', '#tag3']
    },
    {
      url: 'https://source.unsplash.com/random',
      name: 'Marry',
      view: 2000,
      dowload: 291,
      like: 292,
      tags: ['#tag1', '#tag2']
    },
    {
      url: 'https://source.unsplash.com/random',
      name: 'Bob',
      view: 10000,
      dowload: 4000,
      like: 5555,
      tags: ['#tag1', '#tag2']
    }
  ];

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {
          images.map((image, index) => <ImageCard key={index} image={image} />)
        }
      </div>
    </div>
  );
}

export default App;
