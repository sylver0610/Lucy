import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./Managers.scss";
import {
  getAllCode,
  getAllPet,
  getAllUser,
  getDetailDoctorById,
  getDoctorLimit,
  getPetWithPaginate,
  getUserWithPaginate,
  postCreateSchedules,
  postDetailDoctor,
} from "../../../Services/api.service";
import { toast } from "react-toastify";
import ModalCreateUser from "../../../Components/Modals/ModalCreateUser";
import TableUserPaginate from "../../../Components/Modals/TableUserPaginate";
import ModalOptionUser from "../../../Components/Modals/ModalOptionUser";
import DatePicker from "react-date-picker";
import _ from "lodash";
import moment from "moment";
import ToggleButton from "react-bootstrap/esm/ToggleButton";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { TablePetPaginate } from "../../../Components/Modals/TablePetPaginate";
import { ModalOptionPet } from "../../../Components/Modals/ModalOptionPet";
import { ModalCreatePet } from "../../../Components/Modals/ModalCreatePet";
const Managers = () => {
  const limitUser = 5;
  const limitPet = 5;
  const [key, setKey] = useState("managerUsers");
  const [listUser, setListUser] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);
  const [showModelOptionUser, setShowModelOptionUser] = useState(false);
  const [showModelCreatePet, setShowModelCreatePet] = useState(false);
  const [showModelOptionPet, setShowModelOptionPet] = useState(false);
  const [dataOption, setDataOption] = useState({});
  const [dataOptionForPet, setDataOptionForPet] = useState({});
  const [listDoctor, setListDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [valueDatePicker, setValueDatePicker] = useState(new Date());
  const [rangeTime, setRangeTime] = useState([]);
  const [valuesTime, setValuesTime] = useState([]);
  const [infoDoctor, setInfoDoctor] = useState({
    contentMarkdown: "",
    contentHTML: "",
    description: "",
    hasOldData: false,
  });
  const [listPayment, setListPayment] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState({});
  const [listPrice, setListPrice] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({});
  const [listPet, setListPet] = useState([]);
  const [listUserForPet, setListUserForPet] = useState([]);
  const MINDATE = new Date();
  const MAXDATE = new Date(moment().add(7, "d"));

  const fetchDetailDoctor = async () => {
    // console.log(selectedPayment)
    console.log(selectedDoctor);
    if (selectedDoctor)
      getDetailDoctorById(selectedDoctor.value).then((res) => {
        let cloneInfo = _.cloneDeep(infoDoctor);
        if (res?.Markdown || res?.DoctorInfo) {
          cloneInfo.hasOldData = true;
          cloneInfo.contentMarkdown = res.Markdown?.contentMarkdown;
          cloneInfo.contentHTML = res.Markdown?.contentHTML;
          cloneInfo.description = res.Markdown?.description;
          // cloneInfo.paymentId = res.DoctorInfo?.paymentId
          if (res.DoctorInfo?.paymentId) {
            listPayment.map((payment) => {
              if (payment.value === res.DoctorInfo?.paymentId) {
                selectedPayment(payment);
              }
            });
          }
          // cloneInfo.priceId = res.DoctorInfo?.priceId
          if (res.DoctorInfo?.priceId) {
            listPrice.map((price) => {
              if (price.value === res.DoctorInfo?.priceId) {
                selectedPrice(price);
              }
            });
          }
          setInfoDoctor(cloneInfo);
        } else {
          setInfoDoctor({
            contentMarkdown: "",
            contentHTML: "",
            description: "",
            hasOldData: false,
          });
        }
      });
  };

  const fetchListDoctor = async () => {
    getDoctorLimit("max")
      .then((res) => {
        let list = res.map((item) => {
          return {
            value: item.id,
            label: `${item.firstName} ${item.lastName}`,
          };
        });
        setListDoctor(list);
        setSelectedDoctor(listDoctor[0]);
        // console.log(`ress `,list)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchListUserForPet = async () => {
    getAllPet()
      .then((res) => {
        // console.log(res);
        let list = res.map((item) => {
          return {
            value: item.clientId,
            label: `${item.clientData?.firstName} ${item.clientData?.lastName}`,
          };
        });
        setListUserForPet(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchRangeTime = async () => {
    getAllCode("TIME")
      .then((res) => {
        res.map((element) => {
          return (element.isSelected = false);
        });
        setRangeTime(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchMethodPayment = async () => {
    getAllCode("PAYMENT").then((res) => {
      let list = res.map((item) => {
        return {
          value: item.key,
          label: `${item.valueEn}`,
        };
      });
      setListPayment(list);
    });
  };

  const fetchPrice = async () => {
    getAllCode("PRICE").then((res) => {
      let list = res.map((item) => {
        return {
          value: item.key,
          label: `${item.valueRu} rub`,
        };
      });
      setListPrice(list);
    });
  };

  const mdParser = new MarkdownIt(/* Markdown-it options */);

  function handleEditorChange({ html, text }) {
    let cloneInfo = _.cloneDeep(infoDoctor);
    cloneInfo.contentHTML = html;
    cloneInfo.contentMarkdown = text;
    setInfoDoctor(cloneInfo);
    // console.log('handleEditorChange', html, text);
  }

  const handleClickBtnOption = (user) => {
    setDataOption(user);
    setShowModelOptionUser(true);
  };

  const handleClickBtnOptionForPet = (pet) => {
    setDataOptionForPet(pet);
    setShowModelOptionPet(true);
  };
  // const handleClickBtnTime = (time,val) => {
  //   // console.log(`slt : `,time)
  //   let cloneRangeTime = _.cloneDeep(rangeTime)
  //   cloneRangeTime = cloneRangeTime.map(item => {
  //     if (item.id === time.id){
  //       item.isSelected =  !item.isSelected
  //     }
  //     return item
  //   })
  //   setRangeTime(cloneRangeTime)
  //   setValuesTime(val)
  // }
  const handleSelectTime = (val) => setValuesTime(val);

  const fetchListUserWithPaginate = async (page) => {
    // console.log(`called`)
    getUserWithPaginate(page, limitUser).then((res) => {
      setListUser(res.users);
      setPageCount(res.totalPages);
      // console.log(`l `,listUser )
    });
  };

  const fetchListPetWithPaginate = async (page) => {
    // console.log(`called`)
    getPetWithPaginate(page, limitPet).then((res) => {
      setListPet(res.pets);
      setPageCount(res.totalPages);
      // console.log(`l `,listUser )
    });
  };

  const handleSaveScheduleDoctor = async () => {
    if (!valueDatePicker) {
      toast.error("Invalid date! ");
      return;
    }
    if (!selectedDoctor || _.isEmpty(selectedDoctor)) {
      toast.error("Invalid doctor! ");
      return;
    }
    // console.log(moment(valueDatePicker).format('DD/MM/YYYY') , selectedDoctor) moment(valueDatePicker).unix()
    // console.log(valuesTime)
    // console.log({
    //   date:new Date(valueDatePicker).getTime(),
    //   date1: moment(new Date(valueDatePicker).getTime()).format('DD/MM/YYYY'),
    //   doctorId:selectedDoctor.value,
    //   time: valuesTime
    // })
    postCreateSchedules({
      date: new Date(valueDatePicker).getTime(),
      doctorId: selectedDoctor.value,
      time: valuesTime,
    }).then((res) => {
      toast.success(res);
    });
  };

  const handleSaveInfoDoctor = async () => {
    // console.log(`okce`, {...infoDoctor,selectedDoctor})
    postDetailDoctor({
      ...infoDoctor,
      doctorId: selectedDoctor.value,
      priceId: selectedPrice.value,
      paymentId: selectedPayment.value,
    }).then((res) => {
      toast.success(res);
    });
  };

  const handleOnChangeDescription = async (e) => {
    let cloneInfo = _.cloneDeep(infoDoctor);
    cloneInfo.description = e;
    setInfoDoctor(cloneInfo);
  };
  // const fetchListUserWithPaginate = useCallback( async(page)=>{
  //   console.log(`called`)
  //   getUserWithPaginate(page, limitUser)
  //   .then(res => {
  //     setListUser(res.users);
  //     setPageCount(res.totalPages);
  //     // console.log(`l `,listUser )
  //   })
  // },[listUser])

  useEffect(() => {
    // fetchListUser()
    if (key === "managerUsers") fetchListUserWithPaginate(1);
    if (key === "managerSchedule") {
      fetchListDoctor();
      fetchRangeTime();

      // console.log(`list Doctors ${listDoctor}`)
    }
    if (key === "managerDoctor") {
      fetchListDoctor();
      fetchMethodPayment();
      fetchPrice();
      // fetchRangeTime()
      // console.log(`list Doctors ${listDoctor}`)
    }
    if (key === "managerPet") {
      // console.log(`called`);
      fetchListUserForPet();
      fetchListPetWithPaginate(1);
    }
  }, [key]);

  useEffect(() => {
    if (key !== "managerUsers" && !_.isEmpty(selectedDoctor)) {
      fetchDetailDoctor();
    }
  }, [selectedDoctor, key]);

  // console.log("list user for pet ", listUserForPet);
  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="managerUsers" title="Manager Users">
        <div className="manager-users-content">
          <div className="btn-add-new">
            <ModalCreateUser
              show={showModelCreateUser}
              setShow={setShowModelCreateUser}
              // fetchListUser={fetchListUser}
              fetchListUserWithPaginate={fetchListUserWithPaginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <ModalOptionUser
              show={showModelOptionUser}
              setShow={setShowModelOptionUser}
              // fetchListUser={fetchListUser}
              dataOption={dataOption}
              fetchListUserWithPaginate={fetchListUserWithPaginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="table-users-container">
            {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnOption={handleClickBtnOption}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
            <TableUserPaginate
              listUsers={listUser}
              setShowModelCreateUser={setShowModelCreateUser}
              handleClickBtnOption={handleClickBtnOption}
              fetchListUserWithPaginate={fetchListUserWithPaginate}
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </Tab>
      <Tab eventKey="managerSchedule" title="Manager Schedule of Doctor">
        <div className="manager-schedule-content">
          <div className="row">
            <div className="col-6 form-group">
              <label htmlFor="">Select doctor</label>
              {/* <input type="text" className='form-control' />
               */}
              <Select
                defaultValue={selectedDoctor}
                onChange={setSelectedDoctor}
                options={listDoctor}
                className="select-doctor"
              />
            </div>
            <div className="col-6 form-group">
              <label htmlFor="">Select date</label>
              {/* <input type="text" className='form-control'/> */}
              <DatePicker
                onChange={setValueDatePicker}
                value={valueDatePicker}
                locale="ru-RU"
                minDate={MINDATE}
                maxDate={MAXDATE}
                className="form-control"
              />
            </div>
            <div className="col-12 pick-hour-container">
              <ToggleButtonGroup
                type="checkbox"
                value={valuesTime}
                onChange={handleSelectTime}
              >
                {rangeTime &&
                  rangeTime.length > 0 &&
                  rangeTime.map((item) => {
                    return (
                      <ToggleButton
                        variant="outline-info"
                        id={`tbg-btn-${item.id}`}
                        value={item.key}
                        key={item.id}
                      >
                        {item.valueVi}
                      </ToggleButton>
                    );
                  })}
              </ToggleButtonGroup>
            </div>
          </div>
          <Button variant="primary" onClick={handleSaveScheduleDoctor}>
            Save{" "}
          </Button>
        </div>
      </Tab>
      <Tab eventKey="managerDoctor" title="Manager Info of Doctor">
        <div className="manager-doctor-content">
          <div className="row">
            <div className="col-4 form-group">
              <label htmlFor="">Select doctor</label>
              {/* <input type="text" className='form-control' />
               */}
              <Select
                defaultValue={selectedDoctor}
                onChange={setSelectedDoctor}
                options={listDoctor}
                className="select-doctor"
              />
            </div>
            <div className="col-4 form-group">
              <label htmlFor="">Select payment</label>
              {/* <input type="text" className='form-control' />
               */}
              <Select
                defaultValue={selectedPayment}
                onChange={setSelectedPayment}
                options={listPayment}
                className="select-payment"
              />
            </div>
            <div className="col-4 form-group">
              <label htmlFor="">Select price</label>
              {/* <input type="text" className='form-control' />
               */}
              <Select
                defaultValue={selectedPrice}
                onChange={setSelectedPrice}
                options={listPrice}
                className="select-price"
              />
            </div>
            <div className="col-12 form-group mt-5 mb-5">
              <label htmlFor="">Description: </label>
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="5"
                onChange={(e) => handleOnChangeDescription(e.target.value)}
                value={infoDoctor.description}
              ></textarea>
            </div>
            <MdEditor
              style={{ height: "400px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={handleEditorChange}
              value={infoDoctor.contentMarkdown}
            />
          </div>
          <Button
            variant="primary"
            onClick={handleSaveInfoDoctor}
            className="mt-3"
          >
            Save{" "}
          </Button>
        </div>
      </Tab>
      <Tab eventKey="managerPet" title="Manager Info of Pets">
        <div className="manager-pets-content">
          <ModalCreatePet
            show={showModelCreatePet}
            setShow={setShowModelCreatePet}
            listUserForPet={listUserForPet}
            // fetchListUser={fetchListUser}
            fetchListPetWithPaginate={fetchListPetWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <ModalOptionPet
            show={showModelOptionPet}
            setShow={setShowModelOptionPet}
            // fetchListUser={fetchListUser}
            dataOption={dataOptionForPet}
            fetchListPetWithPaginate={fetchListPetWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div className="table-pet-container">
            <TablePetPaginate
              listPet={listPet}
              setShowModelCreatePet={setShowModelCreatePet}
              handleClickBtnOptionForPet={handleClickBtnOptionForPet}
              fetchListPetWithPaginate={fetchListPetWithPaginate}
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default Managers;
