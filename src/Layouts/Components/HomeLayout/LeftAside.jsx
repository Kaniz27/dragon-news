import React, { Suspense, } from 'react';
import Categories from '../Categories';

const Leftaside = () => {
   

    
    return (
        <div>
           <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default Leftaside;