import React from 'react'

export default function NavigationButton({page, nextPage, prevPage}) {
  return (
    <div>
      {page!=0 &&<button     
        onClick={prevPage}>Go Back</button>}
      <button 
            onClick={nextPage}>{page==3?"Confirm":"Next Step"}</button>
    </div>
  )
}
