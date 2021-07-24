import {useEffect} from 'react';

// import { Container } from './styles';

function useDocumentTitle(count) {

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return <div />;
}

export default useDocumentTitle;