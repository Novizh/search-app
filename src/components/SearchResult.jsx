import React from 'react';

function SearchResult() {
    return (
        <div className="card mb-3">
            <div className="card-header">
                Search Result
            </div>
            <div className="card-body">
                {/* Table of links */}
                <table className="table table-striped table-bordered">
                    <thead className="table-secondary">
                        <tr>
                            <th className="col-1">No</th>
                            <th className="col">Title</th>
                            <th className="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchResult