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

  let [입력값, 입력값변경] = useState(['']);

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

  function 정렬() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }
  function 수정() {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={정렬}>정렬 버튼</button>
      <button onClick={수정}>수정 버튼</button>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              className="title"
              onClick={() => {
                let copy = [...modal];
                copy[i] = copy[i] ? false : true;
                setModal(copy);
              }}
            >
              {글제목[i]}
              <span
                className="따봉"
                onClick={e => {
                  e.stopPropagation(); // 이벤트 버블링 방지
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {' ' + 따봉[i] + ' '}
              <button
                onClick={e => {
                  e.stopPropagation();
                  let copy글제목 = [...글제목];
                  let copy따봉 = [...따봉];
                  copy글제목.splice(i, 1);
                  copy따봉.splice(i, 1);
                  글제목변경(copy글제목);
                  따봉변경(copy따봉);
                }}
              >
                삭제
              </button>
            </h4>
            <p>2월 18일 발행</p>
            {modal[i] == true ? (
              <Modal
                title={i}
                color={'skyblue'}
                글제목={글제목}
                수정={() => {
                  let copy = [...글제목];
                  copy[i] = '여자 코트 추천';
                  글제목변경(copy);
                }}
              ></Modal>
            ) : null}
          </div>
        );
      })}
      <input
        type="text"
        onChange={e => {
          입력값변경(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy글제목 = [...글제목];
          let copy따봉 = [...따봉];
          copy글제목.unshift(입력값);
          copy따봉.unshift(0);
          글제목변경(copy글제목);
          따봉변경(copy따봉);
        }}
      >
        등록
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <div
        className="modal"
        style={{ background: props.color }}
      >
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.수정}>수정</button>
      </div>
    </div>
  );
}

export default App;
