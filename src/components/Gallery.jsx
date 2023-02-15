import IMAGES from '../images.js';

function Gallery () {
  return (
    <>
      {
        IMAGES && IMAGES.map((item) =>
          <div key={item.id}>
            <p>{item.description}</p>
            <img src={item.image} className="dpt-img" alt=""/>
          </div>
        )
      }
    </>
  )
}

export default Gallery
