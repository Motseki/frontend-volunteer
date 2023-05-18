import React, { useEffect, useState } from "react"
import logo from '../assets/plus-icon.png';

const TrendingSongs = () => {
  const [artists, setArtists] = useState([]);


  const findMusic = () => {
    const url = `https://itunes.apple.com/search?term=all`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setArtists(data.results);
        })
    }


  const fetchData = () => {

    const url = `https://itunes.apple.com/search?term=all&limit=5`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.results);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {artists.length && (
              
              <div>
                {artists.map((artist) => {
                  const list = (
                    <>
                      <div class="flex flex-row bg-white my-5 py-3 px-1">
                        {artist.trackCensoredName}  by {artist.artistName}   <img
                    className="ml-3 mt-1.5 h-3 w-auto sm:h-3"
                    src={logo} alt='logo'
                  />
                      </div>
                    </>
                  );
                  return list;
                })}
            </div>
        )}
        <div class="flex justify-center">
            <button  className="btn" onClick={(() => findMusic() )} 
            class="px-6 py-1 text-black bg-brightRed rounded-[5%] 
            shadow-2xl baseline hover:bg-gray-900">
                View more
            </button>  
        </div>
    </div>
  )
}

export default TrendingSongs
