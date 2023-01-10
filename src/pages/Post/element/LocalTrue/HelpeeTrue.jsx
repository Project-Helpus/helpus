import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getHelpeeTrue } from "../../../../redux/modules/postSlice";
import Card from "../../../../components/Card";

const HelpeeTrue = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postSlice.helpeeTrueDate.result);
  const input = useSelector((state) => state.postSlice.inputReciver);

  useEffect(() => {
    dispatch(__getHelpeeTrue());
  }, [input]);

  return (
    <>
      <StHelpeeWrapper>
        헬피(로컬)
        {data?.map((item, idx) => {
          return <Card type={"세로"} data={item} key={idx} />;
        })}
      </StHelpeeWrapper>
    </>
  );
};
export default HelpeeTrue;

const StHelpeeWrapper = styled.div`
  width: 95%;
  margin: auto;
  border: 1px solid #000;
`;
