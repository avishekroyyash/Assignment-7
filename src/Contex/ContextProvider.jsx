import React, { createContext, useState } from 'react';


export const SocialContex = createContext(); 


const ContextProvider = ({children}) => {
    
    const [social,setSocial] = useState([]);
   
    const data = {
      social,
      setSocial
    };

    return <SocialContex.Provider value={data}>
        {children}
    </SocialContex.Provider>
};

export default ContextProvider;