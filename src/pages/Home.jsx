import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchResult from '../components/SearchResult';
import Content from '../components/Content';

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="row">
                <div className="col-2 mt-3">
                    <Sidebar />
                </div>
                <div className="col mt-3 mx-3">
                    <div className="row">
                        <SearchResult />
                    </div>
                    <div className="row">
                        <Content />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;