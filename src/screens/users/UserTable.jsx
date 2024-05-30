import React from 'react'
import './UserTable.scss';
import { Link } from 'react-router-dom';
const UserTable = () => {
  return (
    <div>
      <h2 class="area-top-title" >User Add</h2>
      <div className='btn-right'>
        <Link to='/adduser' className="btn">
          User Details
        </Link>
      </div>
      <section className="content-area-table1">
        <table class="rwd-table">
          <tbody>
            <tr>
              <th>Supplier Code</th>
              <th>Supplier Name</th>
              <th>Invoice Number</th>
              <th>Invoice Date</th>
              <th>Due Date</th>
              <th>Net Amount</th>
            </tr>
            <tr>
              <td data-th="Supplier Code">
                UPS5005
              </td>
              <td data-th="Supplier Name">
                UPS
              </td>
              <td data-th="Invoice Number">
                ASDF19218
              </td>
              <td data-th="Invoice Date">
                06/25/2016
              </td>
              <td data-th="Due Date">
                12/25/2016
              </td>
              <td data-th="Net Amount">
                $8,322.12
              </td>
            </tr>
            <tr>
              <td data-th="Supplier Code">
                UPS3449
              </td>
              <td data-th="Supplier Name">
                UPS South Inc.
              </td>
              <td data-th="Invoice Number">
                ASDF29301
              </td>
              <td data-th="Invoice Date">
                6/24/2016
              </td>
              <td data-th="Due Date">
                12/25/2016
              </td>
              <td data-th="Net Amount">
                $3,255.49
              </td>
            </tr>
            <tr>
              <td data-th="Supplier Code">
                BOX5599
              </td>
              <td data-th="Supplier Name">
                BOX Pro West
              </td>
              <td data-th="Invoice Number">
                ASDF43000
              </td>
              <td data-th="Invoice Date">
                6/27/2016
              </td>
              <td data-th="Due Date">
                12/25/2016
              </td>
              <td data-th="Net Amount">
                $45,255.49
              </td>
            </tr>
            <tr>
              <td data-th="Supplier Code">
                PAN9999
              </td>
              <td data-th="Supplier Name">
                Pan Providers and Co.
              </td>
              <td data-th="Invoice Number">
                ASDF33433
              </td>
              <td data-th="Invoice Date">
                6/29/2016
              </td>
              <td data-th="Due Date">
                12/25/2016
              </td>
              <td data-th="Net Amount">
                $12,335.69
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default UserTable
