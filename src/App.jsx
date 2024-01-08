import "./App.css";
function App() {
  return (
    <>
      <div>
        <div className="header">
          <img src="/src/assets/headerTitle.png" className="title-img" />
          <br />
          <span className="title-text">درختواره کسب و کار</span>
          <div className="search-div">
            <input placeholder="جستجو" className="search-input"></input>
          </div>
          <div className="close-div">
            <button className="close-btn" type="button">
              <img className="close-img" src="/src/assets/close.png" />
            </button>
          </div>
          <br />
          <br />
          <div className="divHeaderOfPermissions"></div>
          <div className="items-container">
            <ul>
              <li>خدمات</li>
              <li>کشاورزی</li>
              <li>صنعت</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
