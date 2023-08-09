import styled from 'styled-components'


export const TableWrapper = styled.div`
  
.ant-table-thead > tr > th {
    font-weight: 600;
    font-size: 18px;
}

.ant-table-cell {
    font-size: 16px;
}
.ant-table-tbody > tr > td:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 1.6em;
    background-color: rgba(0,0,0,0.06);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    content: '';
}
.ant-table-cell:first-child {
    font-weight: 600;
}
  @media (max-width: 767px) {
    table {
      table-layout: fixed !important;
    }
    th,td {
      padding: 5px !important;
    }
  }

`