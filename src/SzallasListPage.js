import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

export function SzallasListPage() {

    const [szallas, setSzallas] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://nodejs.sulla.hu/data")
        .then((res) => res.json())
        .then((szallasok) => setSzallas(szallasok))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
 }, []);
 return (
   <div className='p-5 m-auto text-center content bg-ivory'>
    { isFetchPending ? ( <div className='spinner-border'></div>) : (
        <div>
            <h2>Szallások</h2>
            {szallas.map((szallas) => (
                <div key={szallas.id + 4} className='card col-sm-3 d-inline-block m-1 p-2'>
                    <h6 className='text-muted'>{szallas.location}</h6>
                    <h5 className='text-muted'>{szallas.name}</h5>
                    <NavLink key={szallas.id} to={"/data/" + szallas.id}>
                    <div className='card-body'>
                        <h5>{szallas.minimum_nights}</h5>
                        <h5>{szallas.hostname}</h5>
                        <h5>{szallas.price}</h5>
                    </div></NavLink>
                    <br />
                    <NavLink key={szallas.id+1} to={"/mod-szallas/" + szallas.id}>
                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                    </NavLink>
                    <NavLink key={szallas.id+2} to={"/del-szallas/" + szallas.id} className={"text-danger"}>
                        <i className="bi bi-trash3">Törlés</i>
                    </NavLink>
                </div>
                
            ))}
        </div>
    )}
   </div> 
 );
}