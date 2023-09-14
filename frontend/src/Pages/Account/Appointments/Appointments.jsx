import React, { useEffect, useState } from "react";
import {
  getAllCode,
  getDoctorLimit,
  getScheduleById,
} from "../../../Services/api.service";
import { faker } from "@faker-js/faker";
import "./Appointments.scss";
import ToggleButton from "react-bootstrap/esm/ToggleButton";
import Select from "react-select";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import moment from "moment";
import "moment/locale/ru";
import _ from "lodash";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Button from "react-bootstrap/esm/Button";
const Appointments = () => {
  const [listDoctor, setListDoctor] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [key, setKey] = useState("make-appointment");
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [selectedDate, setSelectedDate] = useState({});
  const [rangeTime, setRangeTime] = useState([]);
  const [initRangeTime, setInitRangeTime] = useState([]);
  const [valuesTime, setValuesTime] = useState([]);

  // console.log(moment(new Date()).locale('ru').format("ddd - DD/MM"))

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
        console.log(`list `, listDoctor);
        console.log(`ress `, selectedDoctor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchRangeTime = async () => {
    getAllCode("TIME")
      .then((res) => {
        res.map((element) => {
          return (element.isAvailable = false);
        });
        setInitRangeTime(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchListDays = async () => {
    let arrDate = [];
    for (let i = 0; i < 7; i++) {
      let obj = {};
      obj.label = moment(new Date()).add(i, "d").format("ddd - DD/MM");
      obj.value = moment(new Date()).add(i, "d").startOf("day").valueOf();
      arrDate.push(obj);
    }
    setDaysAvailable(arrDate);
  };
  const handleSelectTime = (val) => setValuesTime(val);

  const handleSelectDate = async (e) => {
    setSelectedDate(e);
    // fetchRangeTime()
  };

  useEffect(() => {
    fetchListDoctor();
    fetchListDays();
    fetchRangeTime();
  }, []);

  useEffect(() => {
    if (!_.isEmpty(selectedDoctor) && !_.isEmpty(selectedDate)) {
      getScheduleById({
        id: selectedDoctor.value,
        date: moment(selectedDate.value).format("YYYY-MM-DD"),
      }).then((res) => {
        // console.log(allRangeTime)
        if (!_.isEmpty(res)) {
          let cloneRangeTime = _.cloneDeep(initRangeTime);
          for (let i = 0; i < res.length; i++)
            for (let j = 0; j < cloneRangeTime.length; j++)
              if (res[i].timeType == cloneRangeTime[j].key)
                cloneRangeTime[j].isAvailable = true;
          setRangeTime(cloneRangeTime);
          // console.log(res, `range`)
        } else {
          setRangeTime(initRangeTime);
        }
      });
    }
  }, [selectedDoctor, selectedDate]);

  // const handleSelected
  // console.log(valuesTime)
  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="make-appointment" title="Appointments">
        <div className="appointment-container">
          <div className="row">
            <div className="col-6 form-group">
              <label htmlFor="">Select doctor</label>
              <Select
                defaultValue={selectedDoctor}
                onChange={setSelectedDoctor}
                options={listDoctor}
                className="select-doctor"
              />
            </div>
            <div className="col-6 form-group">
              <label htmlFor="">Select date</label>
              <Select
                defaultValue={selectedDate}
                onChange={(e) => handleSelectDate(e)}
                options={daysAvailable}
                // className='select-doctor'
              />
            </div>
          </div>
          <div className="row select-time">
            <div className="form-group pick-hour-container">
              <label htmlFor="">Select time</label>
              {/* <ToggleButtonGroup type="checkbox" value={valuesTime} onChange={handleSelectTime} >
            {
              rangeTime && rangeTime.length> 0 && rangeTime.map((item)=>{
                return (
                  <ToggleButton variant='outline-success' id={`tbg-btn-${item.id}`} value={item.key} key={item.id} disabled={item.isAvailable}>
                    {item.valueVi}
                  </ToggleButton>
                )                
              })
            }
            </ToggleButtonGroup> */}

              <ButtonGroup className="mb-2">
                {rangeTime &&
                  rangeTime.length > 0 &&
                  rangeTime.map((item) => {
                    if (item.isAvailable)
                      return (
                        <ToggleButton
                          key={item.id}
                          id={`radio-${item.id}`}
                          type="radio"
                          variant="outline-success"
                          name="radio"
                          value={item.key}
                          checked={valuesTime === item.key}
                          // disabled={item.isAvailable}
                          onChange={(e) => setValuesTime(e.currentTarget.value)}
                        >
                          {item.valueVi}
                        </ToggleButton>
                      );
                  })}
              </ButtonGroup>
            </div>
          </div>
          <Button
            variant="primary"
            // onClick={handleSaveInfoDoctor}
            className="mt-3"
          >
            Save
          </Button>
        </div>
      </Tab>
    </Tabs>
  );
};

export default Appointments;
