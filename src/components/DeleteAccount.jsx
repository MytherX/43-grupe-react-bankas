export default function DeleteAccount({ deleteModalData, setDeleteModalData, setDeleteData }) {
    const destroy = _ => {
        setDeleteData(deleteModalData);
        setDeleteModalData(null);
    }

    if (null === deleteModalData) {
        return null;
    }

    if (deleteModalData.Balance !== 0) {
        return (
            <div className="modal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Account cannot be deleted</h5>
                            <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Account cannot be deleted, because there are funds</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="button" onClick={_ => setDeleteModalData(null)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">DELETE ACCOUNT!</h5>
                        <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete your account?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="button" onClick={_ => setDeleteModalData(null)}>CANCEL</button>
                        <button type="button" className="button-del" onClick={destroy}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
