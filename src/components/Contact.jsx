import React,{useState} from 'react';
import '../css/formContact.css';


export function Contact(){

    const [isDisabled, setDisabled] = useState(false);

    function handleDisabling(){
        setDisabled({isDisabled : true})
    }

    function handleEnabling(){
        setDisabled(false)
    }

    return(
        <div id = 'contact'>
            <h2>Contact</h2>
            <div className = 'form-contact'>
                <span>Name: <input type = 'text' disabled={isDisabled}/></span>
                <span>Surname: <input type = 'text'disabled={isDisabled}/></span>
                <span>Address: <input type = 'text'disabled={isDisabled}/></span>
                <span>G.P.A.: <input type = 'text'disabled={isDisabled}/></span>
                { isDisabled 
                    ? <button className = 'btn-add-date' onClick={ () =>handleEnabling()}>Enable</button>
                    : <button className = 'btn-add-date' onClick={ () =>handleDisabling()}>Disable</button>
                }
            </div>
        </div>
    )
}