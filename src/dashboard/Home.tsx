import { useState } from "react";
import "./styles/Home.css";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

function Home({currentAddress}: {currentAddress: string}) {
    type PeriodKey = "6M" | "1Y" | "3Y" | "5Y" | "All";

    type Periods = {
        [key in PeriodKey]: number;
    };

    var periods: Periods = {
        "6M": 6,
        "1Y": 12,
        "3Y": 36,
        "5Y": 60,
        "All": 0,
    }

    const [period, setPeriod] = useState<PeriodKey>(Object.keys(periods)[0] as PeriodKey);

    function renderPeriod() {
        return (
            <div className="range">
                {Object.keys(periods).map((key) => {
                    return (
                        <h3
                            className={key === period ? "active" : ""}
                            onClick={() => {
                                setPeriod(key as PeriodKey);
                            }}
                        >
                            {key}
                        </h3>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="home">
            <div className="graphContainer">
                <div className="graphMenu">
                    <h2>Expenses</h2>
                    { renderPeriod() }
                </div>
                <BarChart period={Number(periods[period])} />
            </div>

            <div className="left">
                <div className="totalToPay">
                    <div className="totalToPayTitle">
                        <h2>Invoice Total</h2>
                        <div className="totalToPayButton">
                            <i className="ri-arrow-right-line"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="doughnutChart">
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
                
                <div className="meters">
                    <div className="metersTitle">
                        <h2>Meters</h2>
                    </div>
                    <div className="metersField">
                        <form>
                            <label>
                                Apă rece <br />
                                <span>9874</span>
                            </label>
                            <div className="metersFieldInput">
                                <input type="number" placeholder="New value" />
                                <button><i className="ri-upload-line"></i></button>
                            </div>
                        </form>
                        <form>
                            <label>
                                Apă caldă <br />
                                <span>0523</span>
                            </label>
                            <div className="metersFieldInput">
                                <input type="number" placeholder="New value" />
                                <button><i className="ri-upload-line"></i></button>
                            </div>
                        </form>
                        <form>
                            <label>
                                Apă rece <br />
                                <span>9874</span>
                            </label>
                            <div className="metersFieldInput">
                                <input type="text" placeholder="New value" />
                                <button><i className="ri-upload-line"></i></button>
                            </div>
                        </form>
                        <form>
                            <label>
                                Apă caldă <br />
                                <span>0523</span>
                            </label>
                            <div className="metersFieldInput">
                                <input type="text" placeholder="New value" />
                                <button><i className="ri-upload-line"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
