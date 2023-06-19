import { useRef } from "react";

export default function MoneyBalance({ setEditData, account }) {

    const moneyFlow = useRef(0);

    const plus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        if (isNaN(money) || money <= 0) {
            setEditData({ ...account, Balance: account.Balance });
            alert('Please enter the amount. It cannot be negative or zero.');

        } else {
            const newBalancePlus = account.Balance + money;
            setEditData({ ...account, Balance: newBalancePlus });
            moneyFlow.current.value = null;
            // alert('Money was added to the account.');
        }
    };

    const minus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        if (money===undefined|| money <= 0) {
            setEditData({ ...account, Balance: account.Balance });
            alert('Please enter the amount. It cannot be negative or zero.');
        }

        if (money > account.Balance) {
            setEditData({ ...account, Balance: account.Balance });
            alert('You cannot withdraw more than your balance');
        }
        else {
            const newBalanceMinus = account.Balance - money;
            setEditData({ ...account, Balance: newBalanceMinus });
            moneyFlow.current.value = null;
            // alert('The money was withdrawn from the account.');
        }
    };

    return (
        <form>
            <fieldset className="fieldset">
                <label htmlFor="moneyFlow" style={{ display: 'none' }}></label>
                <input ref={moneyFlow} type="number" id="moneyFlow" className="fieldset-input" placeholder="" />
                <div className="fieldset-buttons">
                    <button className="button" onClick={plus}>ADD MONEY</button>
                    <button className="button" onClick={minus}>WITHDRAW</button>
                </div>
            </fieldset>
        </form>
    )
}
