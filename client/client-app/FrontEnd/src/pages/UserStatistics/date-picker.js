import React,{useState,forwardRef} from "react";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar} from "@fortawesome/free-solid-svg-icons";



const DataPickerComponent=()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      console.log(dates);
    };
    const handleSubmit=(value)=>{
      console.log("Submiting values",value);
    }
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (

        <div className="calendar_header">
          <div>
            <label>Select date range</label>
          </div>

        
        <div className="icon_wrap">
          <FontAwesomeIcon
          icon={faCalendar}
          size="fa-sm"
          style={{ color: "#3a80ba" }}
          />
        </div>
        <div>
          <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
          </button>
        </div>
       
        </div>
        
    ));

    const MyContainer = ({ className, children }) => {
        return (
        <form>
          <div  style={{ paddingBottom: "64px",
            paddingLeft:"16px",
            paddingTop:"16px",
            paddingRight:"16px",
            background: "white"}} className="my-container">
            <div className={className}>
              <div style={{ background: "#f0f0f0" }}>
              </div>
              <div style={{ position: "relative" }}>
                {children}
              </div>
            </div>
          </div>
         <div className="block_apply-cancel">
           <button className="block_apply-cancel__apply" disabled={true} type="submit">Apply</button>
           <div className="block_apply-cancel__or">or</div>
           <button className="block_apply-cancel__cancel" disabled={true}>Cancel</button>
         </div>
          </form>
        );
      };

        return (
        <div> 
          <FontAwesomeIcon icon="fa-solid fa-calendar-minus" />
          <DatePicker
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            
            }) => (
              <div>
                <button
                  aria-label="Previous Month"
                  className={
                    "react-datepicker__navigation react-datepicker__navigation--previous"
                  }
                  style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                  onClick={decreaseMonth}
                >
                  <span
                    className={
                      "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                    }
                  >
                    {"<"}
                  </span>
                </button>
                <span className="react-datepicker__current-month">
                  {monthDate.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  aria-label="Next Month"
                  className={
                    "react-datepicker__navigation react-datepicker__navigation--next"
                  }
                  style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                  onClick={increaseMonth}
                >
                  <span
                    className={
                      "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                    }
                  >
                    {">"}
                  </span>
                </button>
              </div>
            )}
            dateFormat="MMM d,yyyy"
            startDate={startDate}
            onChange={onChange}
            endDate={endDate}
            monthsShown={2}
            selectsRange
            calendarContainer={MyContainer}
            customInput={<ExampleCustomInput />}
            popperPlacement="top-end"
          />
          </div>
        );
      };
export default DataPickerComponent;

