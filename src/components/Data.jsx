import React,{useState,useEffect} from 'react';
import {Table} from './Table';
import '../css/formData.css';

export function Data(){

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [elementList, setElementList] = useState([]);


    function addElement(){
        if(day.trim() !== '' && month.trim() !== '' && year.trim() !== ''){
            let newObj = {
                theId: Math.floor(Math.random() * 100),
                theday: day,
                themonth: month,
                theyear: year,
            }
            setElementList([...elementList,newObj]);
            setDay('');
            setMonth('');
            setYear('');
            console.log(newObj)
        }else{
            alert('Fields can not be empty')
        }
    }

    function deleteItem(theId){
        setElementList([...elementList.filter(x => x.theId !== theId)])
    }


    useEffect( () => {
        console.log(`Day: ${day}  Month: ${month} Year: ${year}`)
    }, [day,year,month])

    return(
        <div id = 'data'>
            <div className = 'formdata'>
                <span>Day: <input type = 'number' value = {day} onChange={(e) =>{setDay(e.target.value)}}/></span>
                <span>Month: <input type = 'text' value = {month} onChange={(e) =>{setMonth(e.target.value)}}/></span>
                <span>Year: <input type = 'number' value = {year} onChange={(e) =>{setYear(e.target.value)}}/></span>
                <button className = 'btn-add-date' onClick={addElement}>Add</button>
            </div>
            <Table listOfItems={elementList} deleteItem={deleteItem}/>
        </div>
    )
}