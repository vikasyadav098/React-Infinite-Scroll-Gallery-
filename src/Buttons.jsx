import React from 'react'

const Buttons = ({index,setIndex}) => {
  return (
    <div>
        <div className="flex justify-center items-center gap-3 p-4">
        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if(index>1){
              setIndex(index - 1)
              setUserData([])
            } ;
          }}
        >
          Prev
        </button>
        <h4>Page{index}</h4>
        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Buttons
