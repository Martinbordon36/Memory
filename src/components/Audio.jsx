import React from 'react';


const Audio = ({musica}) => {
  return (
    <>
        <audio src={musica} autoPlay loop></audio>
    </>
  )
}

export default Audio