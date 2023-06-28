import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './FilterData.css';
import Dropdown from 'react-bootstrap/Dropdown';
const FilterData = (props) => {
    const [isModalVisible,setIsModalVisible]=useState(false)
    const [checkboxData,setCheckboxData]=useState({
        subscription:false,
        burner:true
    })
    const checkBoxHandler=(name)=>{
        if(name === 'subscription'){
            setCheckboxData({...checkboxData,subscription:!checkboxData.subscription})
        }else{
            setCheckboxData({...checkboxData,burner:!checkboxData.burner})
        }
    }
    const applyHandler=()=>{
        props.applyHandler(checkboxData)
        setIsModalVisible(false)
        // console.log(checkboxData)
    }
    return (
        <>
            <div className='filterCard' onClick={()=>setIsModalVisible(!isModalVisible)}>
                <div className='filterCard__main'>
                    <div>
                        <img src='https://www.freepnglogos.com/uploads/search-png/search-icon-endless-icons-33.png' width={30} height={30} />
                    </div>
                    <div className='filterCard__label'>
                        <img src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-filter-list_90240.png' width={20} height={20} />
                        <span>Filter</span>
                    </div>
                </div>
            </div>
            {isModalVisible && (
                <div className='filterCard__modal'>
                    <div className='filterCard__modal__title'>Filters</div>
                    <hr className='filterCard__hr' />
                    <div className='filterCard__checkbox'>
                        <div className='filterCard__checkbox__label'>Type</div>
                    </div>
                    <div className='filterCard__checkbox__main'>
                        <div className='filterCard__checkbox__data'>
                            <div className='filterCard__checkbox__data__box1'>
                                <input type='checkbox' checked={checkboxData.subscription} onChange={()=>checkBoxHandler('subscription')}/>
                                <label className='filterCard__checkbox__data__box'>subscription</label>
                            </div>
                            <div>
                                <input type='checkbox' checked={checkboxData.burner} onChange={()=>checkBoxHandler('burner')}/>
                                <label className='filterCard__checkbox__data__box'>Burner</label>
                            </div>
                        </div>
                    </div>
                    <div className='filterCard__modal__cardholder'>
                        <div className='filterCard__checkbox__label'>Cardholder</div>
                        <Dropdown className='filterCard__modal__cardholder__dropdown'>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='filterCard__modal__cardholder__dropdown__box'>
                                Select Cardholder
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Card Data 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Card Data 2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {/* cto */}
                    <div className='filterCard__modal__btn'>
                        <Button variant="danger" className='text-center' onClick={applyHandler}>Apply</Button>

                        <Button className='filterCard__cancel__btn' onClick={()=>setIsModalVisible(false)}>Clear</Button>
                    </div>

                </div>
            )}
        </>
    )
}

export default FilterData;
