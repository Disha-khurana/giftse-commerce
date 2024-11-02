
import React from 'react';
import { RxCross2 } from "react-icons/rx";

function Giftover({handleChange,items}) {
  
    
    
  return (
    <div className='fixed inset-0 z-30 flex items-center justify-center'>
      {/* Background overlay with opacity */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Modal content */}
      <div className='bg-white relative z-40 rounded-md '>
        <div className='flex items-center justify-between gap-36 px-4 py-2 font-semibold bg-slate-200'>
          <h3 className='text-lg'>Select Occasion</h3>
         
          <RxCross2 onClick={handleChange} />
        </div>
        {items.map((item, index) => (  
        <ul key={index} className='px-4 py-2 text-[15px]'>
        
            <li>{item.name}</li>
        
          </ul>
        ))}
      </div>
     
    </div>
  );
}

export default Giftover;
