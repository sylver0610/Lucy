import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import { BiImageAdd } from 'react-icons/bi'
import { toast } from 'react-toastify';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Modal.scss'
import { postCreateUser } from '../../Services/api.service';

import { faker } from '@faker-js/faker/locale/ru';
import _ from 'lodash'
import CommonUtils from '../../utils/commonUtils';
const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    //const [show, setShow] = useState(false);

    const handleClose = () => {
        formik.resetForm({ values: '' })
        setShow(false);
        setImage("")
        setPreviewImage("");

    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '123456',
            firstName: '',
            lastName: '',
            gender: 'M',
            phoneNumber: '',
            positionId: "P0",
            roleId: "R3",
            image: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required Email!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address!"),
            password: Yup.string().required("Required Password"),
            firstName: Yup.string().required("Required FirstName"),
            lastName: Yup.string().required("Required LastName"),
            gender: Yup.string().required("Required Select Gender"),
            phoneNumber: Yup.string().required("Required Phone Number"),
            positionId: Yup.string().nullable(),
            roleId: Yup.string().nullable(),
            image: Yup.string().nullable()
        }),
        onSubmit: async (values, { resetForm }) => {

            // console.log(`gg`)
            console.log(values);
            await postCreateUser(values)
                .then(res => {
                    // console.log(`ress `, res)
                    toast.success(res.message)
                    handleClose()
                })
                .catch(err => {
                    console.log(`err `, err)
                })

        }
    })
    // console.log(formik.errors);



    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");


    const handleFakeData = async () => {
        // const dataMock = _.cloneDeep(fakeDataUser)
        // dataMock.email = faker.internet.email();
        // dataMock.gender = faker.helpers.arrayElement(['M', 'F', 'O'])
        // dataMock.firstName = faker.name.firstName(dataMock.gender === 'M' ? 'male' : 'female')
        // dataMock.lastName = faker.name.lastName(dataMock.gender === 'M' ? 'male' : 'female')
        // dataMock.phoneNumber = faker.phone.number('+7 ### ### ## ##')
        // dataMock.positionId = faker.helpers.arrayElement(['P0', 'P1', 'P2', 'P3', 'P4'])
        // dataMock.roleId = faker.helpers.arrayElement(['R1', 'R2', 'R3'])
        // setFakeDataUser(dataMock)    
        await formik.setFieldValue('email', faker.internet.email())
        await formik.setFieldValue('gender', faker.helpers.arrayElement(['M', 'F', 'O']))
        await formik.setFieldValue('firstName', faker.name.firstName(formik.values.gender === 'M' ? 'male' : 'female'))
        await formik.setFieldValue('lastName', faker.name.lastName(formik.values.gender === 'M' ? 'male' : 'female'))
        await formik.setFieldValue('phoneNumber', faker.phone.number('+7 ### ### ## ##'))
        await formik.setFieldValue('positionId', faker.helpers.arrayElement(['P0', 'P1', 'P2', 'P3', 'P4']))
        await formik.setFieldValue('roleId', faker.helpers.arrayElement(['R1', 'R2', 'R3']))
        // console.log(fakeDataUser)
    }

    const handleSubmitCreateUser = async () => {
        console.log(`value: `, formik.values)
        if (formik.errors) {
            for (var key in formik.errors)
                toast.error(formik.errors[key])
        }
        formik.handleSubmit()
        props.setCurrentPage(1);
        await props.fetchListUserWithPaginate(1);
    }



    const handleUploadImage = async (event) => {
        // console.log(`run here`)
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
            let base64 = await CommonUtils.getBase64(event.target.files[0])
            await formik.setFieldValue('image', base64)
        } else {
            //setPreviewImage('');
        }
    }

    return (
        <>

            <Modal backdrop="static"
                show={show} onHide={handleClose} size='xl'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title> Add new user</Modal.Title>
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
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id='password'
                                name='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}

                            />
                        </div>

                        <div className="col-md-3">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id='firstName'
                                name='firstName'
                                value={formik.values.firstName}
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
                                value={formik.values.lastName}
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
                                value={formik.values.phoneNumber}
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
                        <div className="col-md-3 d-flex flex-column">
                            <label className="form-label">Generate</label>
                            <Button variant="info" onClick={handleFakeData}>
                                Here
                            </Button>
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
                                    <label className='form-label label-upload-1' htmlFor='labelUpload' >
                                        <BiImageAdd /></label>
                                    <input
                                        type='file'
                                        hidden id='labelUpload'
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
                    <Button variant="primary" onClick={handleSubmitCreateUser}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalCreateUser;