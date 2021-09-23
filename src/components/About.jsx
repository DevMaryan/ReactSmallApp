import React,{useState,useEffect} from 'react';
import {Alert} from './Alert';
import '../css/formAbout.css';

export function About(){

    const [studentId, setStudentId] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState('');
    const [gpa, setGpa] = useState('');

    const [objectList, setObjectsList] = useState([]);

    const [isVisible, setisVisible] = useState(false);

    function createObject(){
        if(studentId.trim() !== '' && city.trim() !== '' && dob.trim() !== '' && gpa.trim() !== ''){
            let newObj = {
                id:studentId,
                city:city,
                dob:dob,
                gpa:gpa,
            }
            setObjectsList([...objectList,newObj])
            setisVisible(true);
            setStudentId('');
            setCity('');
            setDob('');
            setGpa('');
            
            console.log(newObj)
        }else{
            alert("Fields should not be empty!")
        }

    }

    function HideForm(){
        setisVisible(false);
    }

    useEffect( () => {
        console.log(`StudentId: ${studentId}  City: ${city} Dob: ${dob}, GPA: ${gpa}`)
    }, [studentId,city,dob,gpa])


    return(
        <div id = 'about'>
            <h2>About</h2>
            <div className = 'formabout'>
                <span>StudentID: <input type = 'number' value = {studentId} onChange={(e) => {setStudentId(e.target.value)}}/></span>
                <span>City: <input type = 'text' value = {city} onChange={(e) => {setCity(e.target.value)}}/></span>
                <span>DOB: <input type = 'number'value = {dob} onChange={(e) => {setDob(e.target.value)}}/></span>
                <span>G.P.A.: <input type = 'number' value = {gpa} onChange={(e) => {setGpa(e.target.value)}}/></span>
                <button className = 'btn-add-date' onClick={createObject}>Alert</button>
            </div>
            {
                isVisible ? <Alert objectList={objectList} hideForm={HideForm}/> : <p></p>
            }
            
        </div>
        
    )
}
