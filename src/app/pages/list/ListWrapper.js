import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { columns, data } from "./data";

const ListPage = () => {

  const tableData = {
    columns,
    data
  };

  return(
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Contacts List</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <div className="card-body border-top p-9">
          <div className='row'>
            <div className='col-md-12'>
              <div className="main">
                <DataTableExtensions
                  {...tableData}
                >
                  <DataTable
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                  />
                </DataTableExtensions>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
    
}

const ListWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.VIEWLIST'})}</PageTitle>
      <ListPage />
    </>
  )
}

export {ListWrapper}