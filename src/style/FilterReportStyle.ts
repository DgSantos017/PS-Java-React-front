import styled from 'styled-components';

export const ContainerReport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxSaldo = styled.div`
  margin: 20px 0;
  text-align: center;
  color: #CCC;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const BoxDados = styled.div`
  width: 100%;
  margin-bottom: 20px;
  overflow-x: auto;
  height: 450px;
  
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-y: auto; 
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #5f0d5d;
  color: #CCC;
`;

export const TableData = styled.td<{ oddRow: boolean }>`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.oddRow ? '#711f6e' : '#833280')};
  color: #CCC;
`;

export const BoxPaginacao = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;
