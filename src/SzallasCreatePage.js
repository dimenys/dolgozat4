import { useNavigate } from 'react-router-dom';

export function SzallasCreatePage() {
const navigate = useNavigate();

return (
    <div className='p-5 content bg-whitesmoke text-center'>
        <h2>Új szallas</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            fetch("https://nodejs.sulla.hu/data", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    name: e.target.elements.name.value,
                    hostname: e.target.elements.hostname.value,
                    location: e.target.elements.location.value,
                    price: e.target.elements.price.value,
                    minimum_nights: e.target.elements.minimum_nights.value,
                }),
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