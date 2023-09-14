import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import { BiImageAdd } from 'react-icons/bi'

import { toast } from 'react-toastify';
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { putUpdateUser } from '../../../services/apiServices';
import _ from 'lodash'
import { deleteUser, putUpdateUser } from '../../Services/api.service';
const ModalOptionUser = (props) => {
    const { show, setShow, dataOption } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: dataOption.email,
            password: dataOption.password,
            firstName: dataOption.firstName,
            lastName: dataOption.lastName,
            gender: dataOption.gender,
            phoneNumber: dataOption.phoneNumber,
            positionId: dataOption.positionId,
            roleId: dataOption.roleId,
            // image: null
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required Email!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address!"),
            password: Yup.string().required("Required Password"),
            firstName: Yup.string().required("Required FirstName"),
            lastName: Yup.string().required("Required LastName"),
            gender: Yup.string().required("Required Select Gender"),
            phoneNumber: Yup.string().required("Required Phone Number").matches(/^[0-9\-\+]{9,15}$/, "Please enter a valid phone number!"),
            positionId: Yup.string().nullable(),
            roleId: Yup.string().nullable(),
            // image: Yup.string().nullable()
        }),
        onSubmit: async (values, { resetForm }) => {
            // console.log(`gg`)
            // console.log(values);
            // console.log(`type =`, type)
            // if (type === 'update') {

            //     await putUpdateUser(values)
            //         .then(res => {
            //             // console.log(`ress `, res)
            //             toast.success(res.message)
            //             handleClose()
            //         })

            // }
            // // if 
            // handleClose()
            // props.setCurrentPage(1);
            // await props.fetchListUserWithPaginate(1);
        }

    })

    const handleClose = () => {
        formik.resetForm({ values: '' })
        setShow(false);
        setImage("")
        setPreviewImage("");
    }

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('USER');
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        // console.log(dataOption)
        if (!_.isEmpty(dataOption)) {
            setEmail(dataOption.email);
            setUsername(dataOption.username);
            setPreviewImage(dataOption.image ? `data:image/jpeg;base64,${dataOption.image}` : "");

            setRole(dataOption.role);
        }
    }, [dataOption])



    const handleSubmitUpdateUser = async () => {
        if (formik.errors) {
            for (var key in formik.errors)
                toast.error(formik.errors[key])
        }
        console.log(`values : ${formik.values.role}`)
        await putUpdateUser(formik.values)
            .then(res => {
                // console.log(`ress `, res)
                toast.success(res.message)
                handleClose()
            })
        props.setCurrentPage(1);
        await props.fetchListUserWithPaginate(1);
    }

    const handleSubmitDeleteUser = async () => {
        // console.log(dataOption)
        await deleteUser(dataOption.id)
            .then(res => {
                // console.log(`ress `, res)
                toast.success(res.message)
                handleClose()
            })
        props.setCurrentPage(1);
        await props.fetchListUserWithPaginate(1);
    }



    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            //setPreviewImage('');
        }

    }

    // console.log(dataOption)

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} >
                Create new user
            </Button> */}

            <Modal backdrop="static"
                show={show} onHide={handleClose} size='xl'
                className='modal-add-user'
            // onExiting={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Info a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id='email'
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id='password'
                                name='password'
                                placeholder='******'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                disabled
                            />
                        </div>

                        <div className="col-md-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id='firstName'
                                name='firstName'
                                value={formik.values.firstName ? formik.values.firstName : ' '}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id='lastName'
                                name='lastName'
                                value={formik.values.lastName ? formik.values.lastName : ' '}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select"
                                name='gender'
                                onChange={event => formik.setFieldValue('gender', event.target.value)}
                                value={formik.values.gender}
                            >
                                <option value='M'>MALE</option>
                                <option value='F'>FEMALE</option>
                                <option value='O'>OTHER</option>

                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id='phoneNumber'
                                name='phoneNumber'
                                value={formik.values.phoneNumber ? formik.values.phoneNumber : ' '}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Position</label>
                            <select className="form-select"
                                name='position'
                                onChange={event => formik.setFieldValue('positionId', event.target.value)}
                                value={formik.values.positionId}
                            >
                                <option value='P0'>NONE</option>
                                <option value='P1'>MASTER</option>
                                <option value='P2'>DOCTOR</option>
                                <option value='P3'>ASSOCIATE PROFESSOR</option>
                                <option value='P4'>PROFESSOR</option>

                            </select>
                            {/* <input
                                // size={'lg'}
                                type="text"
                                className="form-control"
                                id='position'
                                name='position'
                                value={formik.values.positionId ? formik.values.positionId : ' '}
                                onChange={formik.handleChange}
                            /> */}
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                name='role'
                                onChange={event => formik.setFieldValue('roleId', event.target.value)}
                                value={formik.values.roleId}
                            >
                                <option value='R3'>CLIENT</option>
                                <option value='R2'>DOCTOR</option>
                                <option value='R1'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload' >
                                <FcPlus />
                                Upload File Image</label>
                            <input
                                type='file'
                                hidden id='labelUpload'
                                name='image'
                                onChange={(event) => handleUploadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <div>
                                    <label className='form-label label-upload-1' htmlFor='labelUpload1' >
                                        <BiImageAdd /></label>
                                    <input
                                        type='file'
                                        hidden id='labelUpload1'
                                        name='image'
                                        onChange={(event) => handleUploadImage(event)}
                                    />
                                </div>

                            }


                        </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitUpdateUser}>
                        Update
                    </Button>
                    <Button variant="danger" onClick={handleSubmitDeleteUser}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalOptionUser;