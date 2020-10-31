function ImageCard({ image }) {
  const { url, name, view, dowload, like, tags } = image;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={url} alt='img' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>Photo by {name}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {view}
          </li>
          <li>
            <strong>Dowloads: </strong>
            {dowload}
          </li>
          <li>
            <strong>Likes: </strong>
            {like}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {
          tags.map((tag, index) => <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr2'>{tag}</span>)
        }
      </div>
    </div>
  );
}

export default ImageCard;
