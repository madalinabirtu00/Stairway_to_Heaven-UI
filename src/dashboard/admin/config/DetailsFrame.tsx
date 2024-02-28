import { useState } from "react";
import "./styles/DetailsFrame.css";

function DetailsFrame({selectedElement}: {selectedElement: any[]}) {
    const [admin, setAdmin] = useState("");
    const [association, setAssociation] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [blockNumber, setBlockNumber] = useState("");
    const [stairNumber, setStairNumber] = useState("");
    const [apartmentNumber, setApartmentNumber] = useState("");
    const [penality, setPenality] = useState("");

    function getDetails() {
        if (selectedElement[0] === -1) {
            return (
                <div className="details">
                    <div>
                        <h4>Admin</h4>
                        <input type="text" placeholder="Admin" value={admin} onChange={(e) => setAdmin(e.target.value)} />
                    </div>

                    <div>
                        <h4>Name</h4>
                        <input type="text" placeholder="Name" value={association} onChange={(e) => setAssociation(e.target.value)} />
                    </div>
                </div>
            );
        } else if (selectedElement[1] === -1) {
            return (
                <div className="details">
                    <div>
                        <h4>Adresă</h4>
                        <input type="text" placeholder="Adresă" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div>
                        <h4>Oraș</h4>
                        <input type="text" placeholder="Oraș" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div>
                        <h4>Nume</h4>
                        <input type="text" placeholder="Nume" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
            );
        } else if (selectedElement[2] === -1) {
            return (
                <div className="details">
                    <div>
                        <h4>Număr bloc</h4>
                        <input type="text" placeholder="Număr bloc" value={blockNumber} onChange={(e) => setBlockNumber(e.target.value)} />
                    </div>
                </div>
            );
        } else if (selectedElement[3] === -1) {
            return (
                <div className="details">
                    <div>
                        <h4>Număr scară</h4>
                        <input type="text" placeholder="Număr scară" value={stairNumber} onChange={(e) => setStairNumber(e.target.value)} />
                    </div>

                    <div>
                        <h4>Penalizări</h4>
                        <input type="decimal" placeholder="Penalități" value={penality} onChange={(e) => {
                            if (e.target.value.match(/^[0-9]*$/)) {
                                setPenality(e.target.value);
                            }
                        }} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="details">
                    <div>
                        <h4>Număr apartament</h4>
                        <input type="text" placeholder="Număr apartament" value={apartmentNumber} onChange={(e) => setApartmentNumber(e.target.value)} />
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="detailsFrame">
            {
                getDetails()
            }
        </div>
    );
}

export default DetailsFrame;
