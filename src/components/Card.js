import { useState } from "react";
import { useDispatch,} from "react-redux";
import { useNavigate } from "react-router";
import { __postZZim } from "../redux/modules/postSlice";
import {
  StColumnCard,
  StColumnImgWrapper,
  StColumnNickName,
  StColumnCity,
  StColumnTitle,
  StColumnDate,
  StDeadLine,
  StZZimHeart,
  StHeart,
  StZZimDeadLine,
  StMainSquarePhoto,
  StMargin60,
  StSubmitButton,
  StEmptyDiv,
} from "./UI/CardStyle.js/StElements";
import {
  StRowCard,
  StRowImgWrapper,
  StImg,
  StRowTitle,
  StRowContent,
} from "./UI/CardStyle.js/Row";
import {
  StFlex,
  StCirclePhoto,
  StContentsTitle,
  StCategoryName,
  StDate,
  StNickname,
  StAddress,
  StContentsInfo,
  StMainContentsWrapper,
  StMySquarePhoto,
  StZZimSquarePhote,
  StMainContentsTitle,
  StMarginRight,
  StMainWrapper,
  StSpaceBetween,
  StEmpty,
  StTag,
} from "./UI/CardStyle.js/StCommon";
import emptyHeart from '../asset/emptyHeart.svg'
import fullHeart from '../asset/fullHeart.svg'
const Card = ({ type, data, onClick }) => {
  const [count,setCount]=useState(1)

  const tag = data.tag.split(',',3)
  const Model = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const curr = new Date(data.appointed);
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const kRTimeDiff = 9 * 60 * 60 * 1000;
    const KrCurr = new Date(utc + kRTimeDiff);
    const KoreaDate = KrCurr.toLocaleDateString();
    // toLocaleDateString = 브라우저에서 설정된 국가에서 사용되는 날짜를 뽑아줌
    const category =  data.category== 1 ?"헬피":"헬퍼"
    const content = data.content.slice(0, 26)
    const title15 = data.title.slice(0, 15)
    const deadLine = data.isDeadLine;
    const moveDetail = (id) => {
      navigate(`/post/${id}`, { state: { data: data } })
    }


    const ZZim = e => {
      dispatch(__postZZim(data.postId))
      setCount(count + 1)
    }
    
    switch (type) {
      case "가로 ":
        return (
          <StRowCard onClick={onClick}>
            <StRowImgWrapper>
              <StImg src={data.imageUrl}></StImg>
            </StRowImgWrapper>
            <div>
              <StRowTitle>{data.title}</StRowTitle>
              <StRowContent>{data.content}</StRowContent>
            </div>
          </StRowCard>
        );
      case "세로":
        return (
          <StColumnCard>
            <StColumnImgWrapper>
              <StImg alt="thumbnail" src={data.imageUrl1} onClick={()=>moveDetail(data.postId)} />
            </StColumnImgWrapper>
            <StFlex>
              <StColumnNickName>{data.userName}</StColumnNickName>
              <StColumnCity>
                {data.location1} {data.location2}
              </StColumnCity>
              {deadLine === 1 ? null : <StDeadLine>마감</StDeadLine>}
            </StFlex>
            <StColumnTitle>{data.title}</StColumnTitle>
            <StColumnDate>{KoreaDate}</StColumnDate>
          </StColumnCard>
        );
      case "채팅":
        return (
          <>
            <StFlex>
            <div>
              <StCirclePhoto src={data.imageUrl1}></StCirclePhoto>
              <StNickname>{data.userName}</StNickname>
              </div>
              <div>
              <StFlex>
                <StCategoryName>{category} 게시판</StCategoryName>
                  <StDate>&nbsp;{KoreaDate}</StDate>
                  {deadLine === 1 ? null : <StDeadLine>마감</StDeadLine>}
              </StFlex>
                <StContentsTitle>{data.title}</StContentsTitle>
                {data.content}
                </div>
              </StFlex>
          </>
        );
      case "내 게시물":
        return (
          <>
            <StFlex>
              <StMySquarePhoto src={data.imageUrl1} onClick={()=>moveDetail(data.postId)}></StMySquarePhoto>
              <div>
                <StFlex>
                  <StCirclePhoto src={data.userImage}></StCirclePhoto>
                  <StNickname>{data.userName}</StNickname>
                  <StDate>{KoreaDate}</StDate>
                  <StAddress>상세주소</StAddress>
                  {deadLine === 1 ? null : <StDeadLine>마감</StDeadLine>}
                </StFlex>
                <StContentsTitle></StContentsTitle>
                <StContentsInfo>게시물 내용</StContentsInfo>
                <StFlex>
                  {/* map 돌리기(내 게시물에 참여한 사람들 프로필 사진) */}
                  <img></img>
                  <img></img>
                  <img></img>
                </StFlex>
              </div>
            </StFlex>
          </>
        );
      case "찜 게시물":
        return (
          <>
            <StZZimSquarePhote src={data.imageUrl1} onClick={() => moveDetail(data.postId)}></StZZimSquarePhote>
            <StFlex>
              {deadLine === 1 ? <StEmptyDiv /> : <StZZimDeadLine>마감</StZZimDeadLine>}
              {count%2 === 1? 
                (<StZZimHeart onClick={ZZim} src={fullHeart} alt='wish1'></StZZimHeart>)
                :<StZZimHeart onClick={ZZim} src={emptyHeart} alt='wish2'></StZZimHeart>}
            </StFlex>
            <StFlex>
              <StCirclePhoto src={data.userImage}></StCirclePhoto>
              <StNickname>{data.userName}</StNickname>
              <div>
                <StDate>{KoreaDate}</StDate>
                <StAddress>{data.location1} {data.location2}</StAddress>
              </div>
            </StFlex>
              <StContentsTitle>{data.title}</StContentsTitle>
              <StContentsInfo>{data.content}</StContentsInfo>
          </>
        );
      case "메인":
        return (
          <StMainWrapper>
            <StFlex>
              <StMainSquarePhoto src={data.imageUrl1} onClick={() => moveDetail(data.postId)} >
              </StMainSquarePhoto>
              <StMainContentsWrapper>
                  <StFlex>
                  <StCirclePhoto src={data.userImage}></StCirclePhoto>
                  <div>
                  <StContentsTitle>{data.title}</StContentsTitle>          
                    <StNickname>{data.userName}</StNickname>
                  </div>
                </StFlex>
                
                  <StMargin60>{tag.map((item, idx) => { return <StTag key={idx}>{item}</StTag>})}</StMargin60>
                  {deadLine === 1 ? <StEmptyDiv /> : <StDeadLine>마감</StDeadLine>}

                  {/* </StSpaceBetween> */}
                </StMainContentsWrapper>
              </StFlex>
            </StMainWrapper>
        )
      case "케러셀":
        return (
          <StMarginRight>
            <StMySquarePhoto src={data.imageUrl1} onClick={()=>moveDetail(data.postId)}></StMySquarePhoto>
            <StMainContentsTitle>{title15}...</StMainContentsTitle>
          </StMarginRight>
        )
      default:
        return;
    }
  };

  return <Model />;
};

export default Card;
