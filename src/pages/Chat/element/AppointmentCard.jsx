import styled from "styled-components";
import invitation from "../../../asset/invitation.svg";
import StButton from "../../../c                omponents/UI/StButton";
import { useSelector } from "react-redux";
import { acception } from "../../../utils/socket";

const AppointmentCard = ({ invitation, accepted, acceptRequest, userId }) => {
  const myId = useSelector((state) => state.userSlice.userInfo.userId);
  console.log(invitation);
  return (
    <StCard>
      <StDiv>
        {((userId !== myId && accepted !== "`card`1") || invitation) && (
          <StButton mode="greenBlueBtn" onClick={acceptRequest}>
            수락하기
          </StButton>
        )}
      </StDiv>
    </StCard>
  );
};

export default AppointmentCard;

const StCard = styled.div`
  width: 208px;
  height: 292px;
  background-image: url(${invitation});
`;

const StDiv = styled.div`
  position: relative;
  transform: translate(20%, 500%);
`;
