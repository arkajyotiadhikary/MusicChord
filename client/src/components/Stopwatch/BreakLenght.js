const BreakLenght = () => {
    return (
        <div className="col-md-6">
            <div className="text-center">
                <p>Break length</p>
            </div>
            <div className="d-flex justify-content-between counter">
                <div className="">
                    <button className="btn btn-default" id="sessDec">
                        -
                    </button>
                </div>
                <div className="">
                    <div id="session">00</div>
                </div>
                <div class="">
                    <button className="btn btn-default" id="sessInc">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BreakLenght;
