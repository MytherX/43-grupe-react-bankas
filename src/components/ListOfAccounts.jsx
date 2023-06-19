import MoneyBalance from './MoneyBalance';

export default function ListOfAccounts({ accounts, setDeleteModalData, doSort, sort, setEditData }) {


    const destroy = c => setDeleteModalData(c);

    return (
        <>
        <div className="card">
            <h2 className="card-header list-header">CLIENTS ACCOUNTS</h2>
            <div className="card-body">
                <p className="sort">SORT BY NAME<span className={'sort-button ' + sort} onClick={doSort}></span></p>

                <ul className="no-bullets list-group list-group-flush">
                    {
                        accounts
                            ? accounts.length
                                ? accounts.map(c => (
                                    <li key={c.id}>
                                        <div className="accounts-list">
                                            <div className="account-name">
                                                <p>{c.Vardas}</p>
                                                <p>{c.Pavarde}</p>
                                                <p>{c.Balance}<span> €</span></p>
                                            </div>
                                            <div>
                                            <MoneyBalance account={c} setEditData={setEditData} />
                                            </div>
                                            <button className="button-del" onClick={_ => destroy(c)}>DELETE</button>
                                        </div>
                                    </li>))
                                : 'EMPTY LIST'
                            : '...loading'
                    }

                </ul>
            </div>
        </div>
    </>
)
   
      
}