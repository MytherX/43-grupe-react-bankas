/*#U1 Bankas REACT
  REACT banko aplikacijos versija
Banką sudaro puslapis, kuriame yra:
 1.Sąskaitų sąrašas su Vardu, Pavarde, Sąskaitos suma, Mygtuku “ištrinti”,
  laukeliu vertei įrašyti ir dviem mygtukais tam laukeliui: “pridėti lėšų” ir “nuskaičiuoti lėšas”;
 2.Naujos sąskaitos sukūrimas (įvedami duomenys: vardas ir pavardė.
Paaiškinimai ir reikalavimai.
1.Nauja sąskaita sukuriama su pradine 0 suma,
 o lėšos pridedamos/nuimamos sąraše įvedant sumą ir spaudžiant atitinkamą mygtuką.
2.Sąskaitos, kurioje yra lėšų ištrinti neturi būti galima.
3.Sąskaitoje likusi suma negali būti minusinė. 
4.Sąskaitas saraše rūšiuoti pagal savininko pavardę.
5.Duomenų bazė - LocalStorage.
*/


import { useState,  } from "react"

export default function AddNewAccount({ setCreateData }) {
    const[vardas,setVardas] = useState('');
    const[pavarde, setLastPavarde] = useState('');

    const save = (event) => {
        event.preventDefault();
    
        if (/^[A-Za-z]+$/.test(vardas) && /^[A-Za-z]+$/.test(pavarde)) {
          setCreateData({
           Vardas:vardas,
            Pavarde: pavarde,
            Balance: 0,
          });
    
          setVardas('');
          setLastPavarde('');
        } else {
          alert('PLEASE ENTER NAME AND SURNAME');
        }
      };

    return (
        <>
            <div className="card">
                <h2 className="card-header">NAME/SURNAME</h2>
                <div className="m-3">
                    <form>
                        <fieldset className="fieldset-add-new">
                            <label htmlFor="vardas" style={{display:'none'}}></label>
                            <input className="fieldset-input" type="text" id="vardas" placeholder="NAME" required value={vardas} onChange={e => setVardas(e.target.value)} />
                            <label htmlFor="pavarde" style={{display:'none'}}></label>
                            <input value={pavarde} onChange={e => setLastPavarde(e.target.value)} className="fieldset-input" type="text" id="lastPavarde" placeholder="SURNAME" required />
                        </fieldset>
                    </form>
                    <button className="button-add" onClick={save}>ADD CLIENT</button>
                </div>
            </div>
        </>
    )
}  