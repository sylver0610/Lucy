import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Modal.scss'

export const ModalOptionPet = (props) => {
    const { show, setShow, dataOption } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: dataOption.name,
            type: dataOption.type,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required name"),
            type: Yup.string().required("Required type"),
        }),
        onSubmit: async (values, { resetForm }) => {

        }

    })

    const handleClose = () => {
        formik.resetForm({ values: '' })
        setShow(false);
    }
    return (
        <>
            <Modal backdrop="static"
                show={show} onHide={handleClose} size='xl'
                className='modal-add-user'
            // onExiting={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Info of Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id='name'
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Type</label>
                            <select className="form-select"
                                name='type'
                                onChange={event => formik.setFieldValue('type', event.target.value)}
                                value={formik.values.type}
                            >
                                <option value='C'>CAT</option>
                                <option value='D'>DOG</option>
                                <option value='O'>OTHER</option>

                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Owner</label>
                            <input
                                type="text"
                                className="form-control"
                                id='Owner'
                                name='Owner'
                                value={`${dataOption.clientData?.firstName} ${dataOption.clientData?.lastName}`}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id='phoneNumber'
                                name='phoneNumber'
                                value={`${dataOption.clientData?.phoneNumber}`}
                                disabled
                            />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleSubmitUpdateUser}>
                        Update
                    </Button>*/}
                    <Button variant="danger" >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
