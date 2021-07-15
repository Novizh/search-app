import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLink } from '../store/actions/personAction';
import toastr from 'toastr';
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function SearchResult() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.personReducer.data);

    useEffect(() => {
        
    }, [data])

    function handleClick(link) {
        dispatch(setLink(link));
        toastr.success('Page loaded successfully!');
    }

    return (
        <div className="card mb-3">
            <div className="card-header">
                Search Result
            </div>
            <div className="card-body search-result" style={{ height: "40vh" }}>
                {/* Table of links */}
                {
                    data.length ? (
                        <table className="table table-striped table-bordered">
                            <thead className="table-secondary">
                                <tr>
                                    <th className="col-1">No</th>
                                    <th className="col">Title</th>
                                    <th className="col">Link</th>
                                    <th className="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((result, id) => {
                                        return (
                                            <tr key={id}>
                                                <td>{id+1}</td>
                                                <td>{result.title}</td>
                                                <td>{result.link}</td>
                                                <td>
                                                    <button onClick={() => handleClick(result.link)} type="button" className="btn btn-success">Visit</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    )
}

export default SearchResult