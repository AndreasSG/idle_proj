import { useState, useEffect } from 'react'
import './App.css'

import { familiarTypes, familiar } from "./familiars.ts"

function App() {
    const [bloodAmount, setBloodAmount] = useState<number>(0)
    const [playerFamiliarList, setPlayerFamiliarList] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
                handleGameTick();
                }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    function incrementBlood(amountToAdd: number) {
        setBloodAmount(currentAmount => currentAmount + amountToAdd);
    }

    function handleBloodClicked() {
        incrementBlood(1);
    }

    function handleAddFamiliar(familiarType: familiar) {
        setPlayerFamiliarList(
            [
                ...playerFamiliarList,
                familiarType
            ]
        )
    }

    function getAmountOwned(familiarName: string) {
       return playerFamiliarList.reduce((amount, familiar) => familiar.name === familiarName ? ++amount : amount, 0);
    }

    function incrementByFamiliars() {
        playerFamiliarList.forEach(familiar => {
            incrementBlood(familiar.incrementAmount);
        });
    }

    function handleGameTick() {
      incrementByFamiliars();
    }


    const listFamiliars = familiarTypes.map((familiar: familiar, index) => {
        const amount = getAmountOwned(familiar.name);
        return (
            <tr key={index}>
                <th>{familiar.name}</th>
                <td>{familiar.description}</td>
                <td>{familiar.incrementAmount}</td>
                <td>{amount}</td>
                <td><button className="btn btn-info" onClick={() => {handleAddFamiliar(familiar)}}>Add familiar</button></td>
            </tr>
    )});

    return (
        <>
            <section className="my-12">
                <h1>Blood collected: {bloodAmount}</h1>
            </section>

            <section id="inputs" className="">
                <button className="btn btn-primary" onClick={handleBloodClicked}>Get blood</button>
            </section>

            <section id="familiars" className="my-12">
                <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Blood collected</th>
                        <th>Amount owned</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        {listFamiliars}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default App
