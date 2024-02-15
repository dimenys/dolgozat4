import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function SzallasModPage() {

    const param = useParams();
    const navigate = useNavigate();
    const id = param.szallasid;
    const [, setszallas] = useState([]);
    const [modname, setModname] = useState("");
    const [modlocation, setModlocation] = useState("");
    const [modminimum_nights, setModminimum_nights] = useState("");
    const [modprice, setModprice] = useState("");
    const [modhostname, setModhostname] = useState("");

    useEffect(() => {

        (async () => {
            try {
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`);
            const szallasData = await res.json();
            setszallas(szallasData);
            setModname(szallasData.name);
            setModlocation(szallasData.location);
            setModminimum_nights(szallasData.minimum_nights);
            setModprice(szallasData.price);
            setModhostname(szallasData.hostname);
        } catch (error) {
            console.log(error);   
        } 
    })();
}, [id, modname, modlocation, modminimum_nights, modprice, modhostname]);

const modName = (e) => {
    setModname(e.target.value);
}
const modLocation = (e) => {
    setModlocation(e.target.value);
}
const modMinimum_nights = (e) => {
    setModminimum_nights(e.target.value);
}
const modPrice = (e) => {
    setModprice(e.target.value);
}
const modHostname = (e) => {
    setModhostname(e.target.value);
}
return(
    <div className='p-5 content bg-lavender text-center'>
        <h2>Szállás módosítás</h2>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            const szallas={
                name: e.target.elements.name.value,
                hostname: e.target.elements.hostname.value,
                location: e.target.elements.location.value,
                price: e.target.elements.price.value,
                minimum_nights: e.target.elements.minimum_nights.value,
            }
            console.log(szallas)
            fetch(`https://nodejs.sulla.hu/data/${id}`, {
                headers: { "Content-Type": "application/json" },    
            method: "PUT",
                body: JSON.stringify(
                    
                    szallas
                    
                ),
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}
            >
            <div className='form-group row pb-3'>
                <label htmlFor="name" className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control" autoComplete='name' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="hostname" className='col-sm-3 col-form-label'> Hostname: </label>
                    <div>
                        <input type="text" id="hostname" name="hostname" className="form-control" autoComplete='hostname' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="location" className='col-sm-3 col-form-label'> location: </label>
                    <div>
                        <input type="text" id="location" name="location" className="form-control" autoComplete='location' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="price" className='col-sm-3 col-form-label'> price: </label>
                    <div>
                        <input type="number" id="price" name="price" className="form-control" autoComplete='price' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="minimum_nights" className='col-sm-3 col-form-label'> minimum_nights: </label>
                    <div>
                        <input type="text" id="minimum_nights" name="minimum_nights" className="form-control" autoComplete='minimum_nights' />
                    </div>
            </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}