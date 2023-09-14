import React from 'react'
import './Paginate.scss'
import ReactPaginate from 'react-paginate'
import { SlOptions } from 'react-icons/sl';
import Button from 'react-bootstrap/esm/Button';
export const TablePetPaginate = (props) => {
    const { listPet, pageCount } = props;

    const handlePageClick = (event) => {
        props.setCurrentPage(+event.selected + 1);
        props.fetchListPetWithPaginate(+event.selected + 1);
        // console.log(`User requested page number ${event.selected}`);

    };
    return (
        <>
            <table className="table table-hover table-bordered" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope='col' className="pet">Pet </th>
                        <th scope="col">Type</th>
                        <th scope="col">Owner</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listPet && listPet.length > 0 &&

                        listPet.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td className="user-info">
                                        <div className="info">
                                            <p className="fullname">
                                                {`${item.name}`}
                                            </p>
                                        </div>

                                    </td>
                                    <td>{item.type}</td>
                                    <td>{`${item.clientData?.firstName} ${item.clientData?.lastName}`}</td>
                                    <td className="action">
                                        <span className="option-btn" onClick={() => props.handleClickBtnOptionForPet(item)}> <SlOptions /></span>

                                        {/* <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                        >Update</button> */}
                                        {/* <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickBtnDelete(item)}
                                        >Delete</button> */}
                                    </td>

                                </tr>
                            )
                        })
                    }
                    {listPet && listPet.length === 0 &&
                        <tr>
                            <td colSpan={'4'}> Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div className="user-pagination d-flex justify-content-center mt-5 gap-5">
                <Button variant="primary" onClick={() => props.setShowModelCreatePet(true)} >Create new pet</Button>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>
        </>
    )
}
