import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Content() {
    const link = useSelector(state => state.personReducer.link)

    useEffect(() => {
        console.log(`page rendered`);
        console.log(link);
    }, [link])

    return (
        <div className="card mb-3">
            <div className="card-header">
                Content
            </div>
            <div className="card-body content" style={{height: "40vh"}}>
                {/* Iframe tag, width and height 100% */}
                <iframe src={link} title="content" width="100%" height="100%"></iframe>
            </div>
        </div>
    )
}

export default Content;