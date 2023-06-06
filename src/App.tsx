import { useState, useEffect } from 'react'
import './App.css'

import { familiarTypes, familiar } from "./familiars.ts"
import Castle from './castle.tsx'

function App() {
    const [bloodAmount, setBloodAmount] = useState<number>(10)
    const [playerFamiliarList, setPlayerFamiliarList] = useState<familiar[]>(familiarTypes)

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

        if (bloodAmount < familiarType.cost) return;

        console.log("Adding ", familiarType.name);

        const familiarIndex = playerFamiliarList.findIndex((el) => el.name === familiarType.name);

        let newFamiliarList = [...playerFamiliarList];
        
        newFamiliarList[familiarIndex] = {...newFamiliarList[familiarIndex], playerOwnedTotal: newFamiliarList[familiarIndex].playerOwnedTotal++};

        setPlayerFamiliarList(newFamiliarList);

        setBloodAmount(bloodAmount - familiarType.cost);
    }

    function getAmountOwned(familiarName: string) {
        return playerFamiliarList.reduce((amount, familiar) => familiar.name === familiarName ? ++amount : amount, 0);
    }

    function incrementByFamiliars() {
        let amountToIncrement = 0;
        playerFamiliarList.forEach(familiar => {
            amountToIncrement = amountToIncrement + (familiar.incrementAmount * familiar.playerOwnedTotal)
            // console.log(familiar);
            

        });
        incrementBlood(amountToIncrement);
    }

    function handleGameTick() {
        incrementByFamiliars();
    }

    const listFamiliars = familiarTypes.map((familiar: familiar, index) => {
        return (
            <tr key={index}>
                <th>{familiar.name}</th>
                <td>{familiar.description}</td>
                <td>{familiar.incrementAmount}</td>
                <td>{familiar.cost}</td>
                <td><button className="btn btn-secondary" onClick={() => { handleAddFamiliar(familiar) }}>Add familiar</button></td>
            </tr>
        )
    });

    return (
        <>
            <section className='bg-base-100 w-screen h-screen pt-8'>
                <Castle></Castle>

                <h1 className='my-12 text-gray-200 text-2xl font-bold'>Blood collected: {bloodAmount}</h1>

                <section id="inputs" className="">
                    <button className="btn btn-accent" onClick={handleBloodClicked}>Get blood</button>
                </section>

                <section id="familiars" className="my-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Blood collected</th>
                                <th>Blood Cost</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listFamiliars}
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    );
}

export default App
