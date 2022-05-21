/*eslint-disable*/
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  let modal배열 = [];
  글제목.map(function (a, i) {
    modal배열.push(false);
  });
  let [modal, setModal] = useState(modal배열);
  // let [modal, setModal] = useState([false, false, false]);

  let 따봉배열 = [];
  글제목.map(function (a, i) {
    따봉배열.push(0);
  });
  let [따봉, 따봉변경] = useState(따봉배열);
  // let [따봉, 따봉변경] = useState(0,0,0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        정렬 버튼
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}
      >
        수정
      </button>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key="i">
            <h4
              onClick={() => {
                let copy = [...modal];
                copy[i] = copy[i] ? false : true;
                setModal(copy);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 18일 발행</p>
            {modal[i] == true ? <Modal /> : null}
          </div>
        );
      })}
    </div>
  );
}

function Modal() {
  return (
    <div>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
