import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal';
import Select from "react-select";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { postCreatePet } from '../../Services/api.service';
export const ModalCreatePet = (props) => {
    const { show, setShow, listUserForPet } = props;

    const handleClose = () => {
        formik.resetForm({ values: '' })
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [selectedUser, setSelectedUser] = useState({})

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            type: 'O',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required name"),
            type: Yup.string().required("Required type"),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log(selectedUser)
            postCreatePet({ ...values, clientId: selectedUser.value })
                .then(res => {
                    handleClose()

                })
                .catch(err => {
                    console.log(`err `, err)
                })
        }

    })

    const handleSubmitCreatePet = async () => {
        // console.log(`value: `, formik.values)
        if (formik.errors) {
            for (var key in formik.errors)
                toast.error(formik.errors[key])
        }
        await formik.handleSubmit()
        props.setCurrentPage(1);
        await props.fetchListPetWithPaginate(1);
    }

    return (
        <>
            <Modal backdrop="static"
                show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label htmlFor="">Select owner</label>

                            <Select
                                defaultValue={selectedUser}
                                onChange={setSelectedUser}
                                options={listUserForPet}
                                className="select-client"
                            />
                        </div>
                    </div>
                    <div className="row">
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
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCreatePet}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
