import React, { useState } from 'react';
import style from './Paginator.module.css';


const Paginator = ({ totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
   const start = '<<';
    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    let portionOnCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState((currentPage + portionSize - 1) / portionSize);
    let leftPortion = (portionNumber - 1) * portionSize + 1;
    let rightPortion = portionNumber * portionSize;

    let setPortionAndPage = (changedPortionNumber) =>{
        debugger
        setPortionNumber(changedPortionNumber);
        let newCurrentPage = (changedPortionNumber * portionSize) - (portionSize - 1);
        onPageChanged(newCurrentPage);
    }
    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <span>
                <button onClick={() => setPortionAndPage(1)}>{start}</button> 
                <button onClick={() => setPortionAndPage(portionNumber - 1)} >Prev</button>
                </span>
            }
            {pages
                .filter(page => page >= leftPortion && page <= rightPortion)
                .map(page => {
                    return <span className={currentPage === page && style.selectedPage}
                        key={page}
                        onClick={(e) => { onPageChanged(page) }}>
                        {page}
                    </span>
                })}
            { portionOnCount > portionNumber &&
                <button onClick={() =>setPortionAndPage(portionNumber + 1) } >Next</button>
            }


        </div>
    )
}

export default Paginator;