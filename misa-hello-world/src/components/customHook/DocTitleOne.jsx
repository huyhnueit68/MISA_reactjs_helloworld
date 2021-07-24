import React, { useState, useEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

// import { Container } from './styles';

function DocTitleOne() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count)
    
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Count - { count }</button>
        </div>
    );
}

export default DocTitleOne;