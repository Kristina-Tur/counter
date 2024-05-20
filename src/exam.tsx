import React, {useEffect, useState} from 'react';

export const Exam = () => {
    const [value, setValue] = useState(0)

    const incCounter = () => {
        setValue(value + 1)
    }

    const resetCounter = () => {
        setValue(0)
    }



    /* useEffect(() => {
         let valueIsString = localStorage.getItem('counterValue')
         if (valueIsString !== null) {
             let newValue = JSON.parse(valueIsString)
             setValue(newValue)
         }
     }, [])*/

     useEffect(() => {
         localStorage.setItem('counterValue5', JSON.stringify(value))
     }, [value])


     const onClickHandlerSetItem = () => {
         setValue(value + 1)
         localStorage.setItem('counterValue5', JSON.stringify(value))
     }

     const onClickHandlerGetItem = () => {
         let valueIsString = localStorage.getItem('counterValue5')
         if (valueIsString !== null) {
             let newValue = JSON.parse(valueIsString)
             setValue(newValue)
         }
     }

     const clearLocalStorageHandler = () => {
         localStorage.clear()
         setValue(0)
     }

     const removeItemFromLocalStorageHandler = () => {
         localStorage.removeItem('counterValue+1')
     }
    return (
        <div>
            <div>{value}</div>
            <button onClick={onClickHandlerSetItem}>SetItem</button>
            <button onClick={onClickHandlerGetItem}>GetItem</button>
        </div>
    );
};