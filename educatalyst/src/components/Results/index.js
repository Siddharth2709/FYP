import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import {CTable,CTableCaption, CTableBody, CTableDataCell,CTableRow, CTableHeaderCell,CTableHead } from '@coreui/react'
const UIDashboard = () => {
  return (
      <>
    <div>
<CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
/>
<CChart
  type="doughnut"
  data={{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }}
/>
<CChart
  type="scatter"
  data={{
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  }}
  options={{
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }}
/>
<CChart
  type="line" 
  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
      },
    ],
  }}
/>
</div>
<div>
<CTable color="dark" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
    </div>
    </>
  )
}

export default UIDashboard