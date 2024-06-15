import styled from 'styled-components';

const PickUpButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SampleImportCssInJs = () => {
  return (
    <div>
      <PickUpButton>Click Me</PickUpButton>
    </div>
  );
};

export default SampleImportCssInJs;
