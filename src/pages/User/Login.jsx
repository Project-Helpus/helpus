import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postLogin } from "../../redux/modules/userSlice";
import { KAKAO_AUTH_URL } from "./KakaoLogin";
import kakaoLogin from "../../asset/kakaoLogin.png";
import StUserWrap from "../../components/UI/StUserWrap";
import arrow_forward_ios from "../../asset/arrow_forward_ios.svg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //input state 초기값
  const [account, setAccount] = useState({ email: "", password: "" });

  //input 이벤트 핸들러
  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  //submit 이벤트 핸들러
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await dispatch(__postLogin(account));
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/postlist");
    }
  };

  return (
    <StWarp>
      <StUserWrap></StUserWrap>
      <Starrow
        src={arrow_forward_ios}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      ></Starrow>
      <StLoginWrap>
        <div>
          <h1>로그인</h1>
          <form>
            <label>이메일</label>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요."
              onChange={onChangeAccount}
            ></input>
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={onChangeAccount}
            ></input>
            <button onClick={loginSubmitHandler}>로그인</button>
            <a href={KAKAO_AUTH_URL}>
              <img src={kakaoLogin} alt="" />
            </a>
            <StSingOut onClick={() => navigate("/signup")}>회원가입</StSingOut>
          </form>
        </div>
      </StLoginWrap>
    </StWarp>
  );
};

export default Login;

const StWarp = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-size: 0.8em;
  h1 {
    text-align: center;
  }
`;

const Starrow = styled.img`
  width: 30px;
  height: 30px;
  margin: 5em 0 0 2em;
  cursor: pointer;
`;
const StLoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    input {
      all: unset;
      height: 40px;
      border: 1px solid #e0e0e0;
      border-radius: 7px;
      margin: 6px;
      background-color: #fafafa;
      padding-left: 8px;
      box-sizing: border-box;
    }
    button {
      border: 0;
      width: 300px;
      height: 45px;
      background-color: #ffc3d5;
      border-radius: 7px;
      margin: 6px;
      font-size: 1.1em;
    }
    img {
      margin: 6px;
    }
    label {
      padding-left: 6px;
      padding-top: 4px;
    }
  }
`;
const StSingOut = styled.div`
  padding: 4px 6px;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
