import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
export function SzallasSinglePage() {

    const param = useParams();
    const id = param.szallasId;
    const [szallas, setSzallas] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`https://nodejs.sulla.hu/data/${id}`)
        const szallas =await res.json();
        setSzallas(szallas);
        } catch(error) {
            console.log(error);
        }
        finally{
            setPending(false);
        }
    })();
 }, [id]);
 return (
   <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !szallas.id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                    <div className='card-body'>
                    <h4>{szallas.location}</h4>
                    <h5 className='card-title'>{szallas.name}</h5>
                       <NavLink  to={"/"}>
                        <h5>{szallas.minimum_nights}</h5>
                        <h5>{szallas.hostname}</h5>
                        <h5>{szallas.price}</h5>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    ); 
}