import React, { useState } from "react";
import "./caluclato.css";
export const Calculator = () => {
  function handelChange() {
    setValue(eval(value));
  }

  const [theme, setTheme] = useState(1);
  const classname = () => {
    if (theme === 1) {
      return "ball-theme-mode-1";
    } else if (theme === 2) {
      return "ball-theme-mode-2";
    } else if (theme === 3) {
      return "ball-theme-mode-3";
    }
  };
  const classnameCard = () => {
    if (theme === 1) {
      return "card cardStyle-1";
    } else if (theme === 2) {
      return "card cardStyle-2";
    } else if (theme === 3) {
      return "card cardStyle-3";
    }
  };
  const classnameGrid = () => {
    if (theme === 1) {
      return "grid-1";
    } else if (theme === 2) {
      return "grid-2";
    } else if (theme === 3) {
      return "grid-3";
    }
  };
  const classnameInput = () => {
    if (theme === 1) {
      return "form-control bg-dark inputStyle-1";
    } else if (theme === 2) {
      return "form-control bg-dark inputStyle-2";
    } else if (theme === 3) {
      return "form-control bg-dark inputStyle-3";
    }
  };
  const classnameCalc = () => {
    if (theme === 1) {
      return "col-10 colorStyle-1";
    } else if (theme === 2) {
      return "col-10 colorStyle-2";
    } else if (theme === 3) {
      return "col-10 colorStyle-3";
    }
  };

  const classnameListNumber = () => {
    if (theme === 1) {
      return "numberOne";
    } else if (theme === 2) {
      return "numberTwo";
    } else if (theme === 3) {
      return "numberThree";
    }
  };
  const [value, setValue] = useState("");
  return (
    <div className="content-style">
      <div className="container d-flex justify-content-center align-items-center">
        <div className={classnameCard()}>
          <div className="row">
            <h6 className={classnameCalc()}>calc</h6>

            <div className="col-2 now">
              <div className="d-flex justify-content-space-between">
                <div
                  className={classnameListNumber()}
                  id="number-1"
                  onClick={() => setTheme(1)}
                >
                  1
                </div>
                <div
                  className={classnameListNumber()}
                  id="number-2"
                  onClick={() => setTheme(2)}
                >
                  2
                </div>
                <div
                  className={classnameListNumber()}
                  id="number-3"
                  onClick={() => setTheme(3)}
                >
                  3
                </div>
              </div>

              <div className="theme-mode mt-1">
                <div className={classname()}></div>
              </div>
            </div>
          </div>
          <div className="m-1 mt-2 mb-2">
            <input
              type="text"
              class={classnameInput()}
              value={value}
              onChange={() => setValue(value)}
              autoFocus
            />
          </div>
          <div className={classnameGrid()}>
            <div className="grid-container-1">
              <input type="button" value="AC" onClick={() => setValue("")} />
              <input
                type="button"
                value={"DE"}
                onClick={() => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                value={"."}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"/"}
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>

            <div className="grid-container-1">
              <input
                type="button"
                value={"7"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"8"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"9"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"*"}
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="grid-container-1">
              <input
                type="button"
                value={"4"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"5"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"6"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"+"}
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="grid-container-1">
              <input
                type="button"
                value={"1"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"2"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"3"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"-"}
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div className="grid-container-1">
              <input
                type="button"
                value={"00"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"0"}
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                className="equal"
                type="button"
                value={"="}
                onClick={handelChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
