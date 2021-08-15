const BreakLenght = () => {
    return (
        <div class="col-md-6">
            <div class="row">
                <p>Break length</p>
            </div>
            <div class="row counter">
                <div class="col-md-4">
                    <button class="btn btn-default" id="breakDec">
                        -
                    </button>
                </div>
                <div class="col-md-2">
                    <div id="break"></div>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-default" id="breakInc">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BreakLenght;
