const SessionLenght = () => {
    return (
        <div className="col-md-6">
            <p>Session Lenght</p>
            <div className="row counter">
                <div className="col-md-4">
                    <button className="btn btn-default" id="sessDec">
                        -
                    </button>
                </div>
                <div className="col-md-2">
                    <div id="session"></div>
                </div>
                <div class="col-md-4">
                    <button className="btn btn-default" id="sessInc">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SessionLenght;
