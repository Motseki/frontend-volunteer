import React from 'react'
import Navbar from './Navbar'
import TrendingSongs from './TrendingSongs'

function Home() {
  return (
    <div>
     <Navbar/>

   <div class="px-5 py-0 mx-auto flex flex-wrap">
     <div class="h-full p-4 lg:w-2/3">
       <div class=" bg-transparent px-8 pt-16 pb-16 space-y-5 relative">

        <h2
          class="text-5xl font-bold leading-tight text-center text-black md:text-4xl md:max-w-xl md:text-left"
        >
          Make your party fun!
        </h2>
        <p>Create your own playlist today</p>
    
        <div>
          <a
            href="#"
            class="px-6 py-2 text-black bg-brightRed rounded-[5%] shadow-2xl baseline hover:bg-gray-900"
            >Create playlist</a
          >
        </div>

       </div>
     </div>


     <div class="h-full p-4 lg:w-1/3">
       <div class="bg-[#022738] px-8 pt-5 pb-5 relative h-500">

       <h1 class="flex mb-4 text-2xl justify-center text-center font-bold md:block">
          Trending songs
      </h1> 
              <TrendingSongs/>

       </div>
     </div>
   </div>

    </div>
  )
}

export default Home
