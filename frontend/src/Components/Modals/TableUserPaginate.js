import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { BsCheck2Circle } from 'react-icons/bs'
import { SlOptions } from 'react-icons/sl'
import './Paginate.scss'
import Button from "react-bootstrap/esm/Button";
const TableUserPaginate = (props) => {

    const { listUsers, pageCount } = props;


    const handlePageClick = (event) => {
        props.setCurrentPage(+event.selected + 1);
        props.fetchListUserWithPaginate(+event.selected + 1);
        // console.log(`User requested page number ${event.selected}`);

    };

    const convertRole = (roleId) => {
        if (roleId === 'R1') {
            return 'Admin'
        } else if (roleId === 'R2') {
            return 'Doctor'
        } else {
            return 'Client'
        }
    }

    const formatDate = (date, type = 'full') => {
        const dateFormat = new Date(date)
        if (type === 'full')
            return `${dateFormat.getHours()}:${dateFormat.getMinutes()}:${dateFormat.getSeconds()} ${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()}`
        return `${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()}`
    }

    const convertStatus = (date) => {
        const nowDate = new Date()
        if (date > nowDate)
            return (
                <span style={{ "fill": "green" }}> <BsCheck2Circle /></span>
            )
        return <span > <BsCheck2Circle /></span>
    }

    return (
        <>
            <table className="table table-hover table-bordered" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope='col' className="user">USER </th>
                        {/* <th scope="col">Email</th> */}
                        <th scope="col">ROLE</th>
                        <th scope="col">LOGIN AT</th>
                        <th scope="col" className="status">STATUS AT</th>
                        <th scope="col" className="date-create">CREATED AT</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&

                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td className="user-info">
                                        <div className="avatar">

                                        </div>
                                        <div className="info">
                                            <p className="fullname">
                                                {`${item.firstName} ${item.lastName}`}
                                            </p>
                                            <p className="email">
                                                {item.email}
                                            </p>
                                        </div>

                                    </td>
                                    <td>{convertRole(item.roleId)}</td>
                                    <td>{formatDate(item.updatedAt)}</td>
                                    <td className="status">{convertStatus(item.refresh_expired)}</td>
                                    <td className="date-create">{formatDate(item.createdAt, 'short')}</td>
                                    <td className="action">
                                        <span className="option-btn" onClick={() => props.handleClickBtnOption(item)}> <SlOptions /></span>

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
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}> Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div className="user-pagination d-flex justify-content-center mt-5 gap-5">
                <Button variant="primary" onClick={() => props.setShowModelCreateUser(true)} >Create new user</Button>
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
export default TableUserPaginate