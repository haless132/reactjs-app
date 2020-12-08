// import logo from './logo.svg';
import './App.scss';
import AlbumFeature from './Feature/Album';
// import TodoFeature from './Feature/Todo/pages';

function App() {
  // const name = 'Hau';
  // const age = 18;
  // const isMale = true;
  // const student = {
  //   name: 'Hùng',
  //   age: '30',
  // };

  // const colors = ['Red', 'Green', 'Blue'];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {' '}
          Xin chào {name} - {age}t - {isMale ? 'Male' : 'Female'}
        </p>

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <div>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </div>
        )}

        <p>{student.name}</p>
        <p>
          {colors.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </p>
      </header> */}

      {/* <TodoFeature /> */}

      <AlbumFeature />
    </div>
  );
}

export default App;

//-------------------
// Note:
//-------------------

// Dữ liệu null undefine không render trên màng hình.

// {isMale && <p>Male</p>}      |   2 Dòng code này nghĩa là:
// {!isMale && <p>Female</p>}   |   nếu như 'DỮ LIỆU NÀY' thì render thế này.

// Trường hợp có nhiều dòng... mình phải thêm 1 thẻ <div> vào để render hoặc thẻ trống.

// Chuỗi không render trên màng hình... phải giống như là student.name

// mảng thì render qua hàm map()

//---------------------------
// Cách bố trí component
//---------------------------

// src
// |__ component(share component between feature)
// |   |__loading
// |   |__index.jsx
// |   |__ styles.scss
// |
// |__ feature
// |   |__Todo
// |      |__ component (component of feature Todo)
// |      |__ pages (pages of feature Todo)
// |      |__ index.jsx (entry point of feature Todo)
// |__ App.js
