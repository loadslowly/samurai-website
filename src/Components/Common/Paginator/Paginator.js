import classes from "./Paginator.module.css";
import {useEffect, useState} from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage]);

    let portionCount = Math.ceil(totalUsersCount / portionSize);

    let [portionNumber,setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber  * portionSize ;

    return <div className={classes.numbers}>
        {portionNumber > 1 && <button className={classes.first} onClick={() => {setPortionNumber(portionNumber - 1)}}>Back</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(i => {
                return <span key={i} className={currentPage === i && classes.active} onClick={(e) => {
                    onPageChanged(i);
                }}>{i}</span>
            })}
        {portionCount > rightPortionPageNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
}

export default Paginator;