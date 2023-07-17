import styled from 'styled-components'

const primaryColor = '#FFFFFF'
const secondaryColor = '#6C757D'
const accentColor = '#007BFF'
const lightBackgroundColor = '#F2F2F2'
const darkBackgroundColor = '#E5E5E5'

export const ContainerReport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxSaldo = styled.div`
  margin: 20px 0;
  text-align: center;
  color: ${secondaryColor};
  font-weight: bold;
  font-size: 1.2rem;
  background-color: ${lightBackgroundColor};
  padding: 10px 30px;
  border-radius: 20px;
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
  background-color: ${darkBackgroundColor};
  color: ${secondaryColor};
  padding: 30px 0 5px 0;
`;

export const TableData = styled.td<{ oddRow: boolean }>`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.oddRow ? darkBackgroundColor : lightBackgroundColor)};
  color: ${secondaryColor};
`;

export const BoxPaginacao = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  background-color: ${accentColor};
  color: ${primaryColor};
  border: none;
  cursor: pointer;
`;
