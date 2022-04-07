import React, {FC, useState} from 'react'
import {Link} from 'react-router-dom'
import {IProfileDetails, profileDetailsInitValues as initialValues} from './SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import './list.css'

const profileDetailsSchema = Yup.object().shape({
  listname: Yup.string().required('List Name is required'),
  gname: Yup.string().required('Group name is required'),
  owner_name: Yup.string().required('Owner name is required'),
  owner_email: Yup.string().required('Owner Email is required'),
  owner_email_part1: Yup.string().required('Owner Email is required'),
  owner_email_part2: Yup.string().required('Owner Email is required'),
  reply_email: Yup.string().required('Reply-to Email is required'),
})


const ListAddPage: FC = () => {

  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.firstname = data.communications.firstname
        values.communications.lastname = data.communications.lastname
        values.communications.birthdate = data.communications.birthdate
        values.communications.city = data.communications.city
        values.communications.state = data.communications.state
        values.communications.country = data.communications.country
        values.communications.zip = data.communications.zip
        values.communications.mobile = data.communications.mobile
        values.communications.phone = data.communications.phone
        values.communications.fax = data.communications.fax
        values.communications.company = data.communications.company
        values.communications.title = data.communications.title
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

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
          <h3 className='fw-bolder m-0'>Add Contact List</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>

            <div className='row mb-6'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <label className='col-lg-12 col-form-label required fw-bold fs-6'>List Name</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder=''
                      {...formik.getFieldProps('listname')}
                    />
                    {formik.touched.listname && formik.errors.listname && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.listname}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                  <label className='col-lg-12 col-form-label required fw-bold fs-6'>Group Name</label>
                    <select
                      className='form-select form-select-solid form-select-lg'
                      {...formik.getFieldProps('gname')}
                    >
                      <option value=''>Select Group</option>
                      <option value='0'>Unsorted</option>
                      <option value='1'>Employees</option>
                      <option value='2'>Subscribers</option>
                    </select>
                    {formik.touched.gname && formik.errors.gname && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.gname}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-5'>
              <div className='col-lg-12 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>Addistional Fields</label>
                <div className='align-items-left mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.firstname}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: !data.communications?.firstname,
                            lastname: data.communications?.lastname,
                            birthdate: data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>First Name</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.lastname}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Last Name</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.birthdate}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Birtdate</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.city}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>City</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.state}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>State</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.country}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Country</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.zip}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Zip Code</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.mobile}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Mobile</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Phone</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.fax}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Fax</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.fax}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Fax</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.company}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Company</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid me-10 mb-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.title}
                      onChange={() => {
                        updateData({
                          communications: {
                            firstname: data.communications?.firstname,
                            lastname: !data.communications?.lastname,
                            birthdate: !data.communications?.birthdate,
                            city: data.communications?.city,
                            state: data.communications?.state,
                            country: data.communications?.country,
                            zip: data.communications?.zip,
                            mobile: data.communications?.mobile,
                            phone: data.communications?.phone,
                            fax: data.communications?.fax,
                            company: data.communications?.company,
                            title: data.communications?.title,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Title</span>
                  </label>
                </div>
              </div>
            </div>

            <div className='row mb-6'>

              <div className='col-lg-6 fv-row'>
                <label className='col-lg-12 col-form-label required fw-bold fs-6'>Owner Name</label>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder=''
                  {...formik.getFieldProps('owner_name')}
                />
                {formik.touched.owner_name && formik.errors.owner_name && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.owner_name}</div>
                  </div>
                )}
              </div>

              <div className='col-lg-6 fv-row'>
                <label className='col-lg-12 col-form-label required fw-bold fs-6'>Owner Email</label>
                <div className="d-flex row">
                  <div className='col-md-4'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder=''
                      {...formik.getFieldProps('owner_email_part1')}
                    />
                    {formik.touched.owner_email_part1 && formik.errors.owner_email_part1 && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.owner_email_part1}</div>
                      </div>
                    )}
                  </div>
                  <div className='col-md-8'>
                    <select
                      className='form-select form-select-solid form-select-lg'
                      {...formik.getFieldProps('owner_email_part2')}
                    >
                      <option value='0'>shahbazmughal.com</option>
                      <option value='1'>hostingshouse.com</option>
                    </select>
                    {formik.touched.owner_email_part2 && formik.errors.owner_email_part2 && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.owner_email_part2}</div>
                      </div>
                    )}
                  </div>
                </div>
                  
              </div>

            </div>

            <div className='row mb-6'>
              <div className="row">
                <div className='col-md-6'>
                    <label className='col-form-label fw-bold fs-6'>
                      <span className='required'>Reply-to Email </span>
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder=''
                      {...formik.getFieldProps('reply_email')}
                    />
                    {formik.touched.reply_email && formik.errors.reply_email && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.reply_email}</div>
                      </div>
                    )}
                </div>
              </div>
            </div>

          </div>

          <div className='card-footer d-flex justify-content-start py-6 px-9'>
            <button type='submit' className='btn btn-primary mr-1 me-3' disabled={loading}>
              {!loading && 'Save & Exit'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>

            <button type='submit' className='btn btn-primary mr-1 me-3' disabled={loading}>
              {!loading && 'Save & Add New'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>

            <Link to="/list/all" className='btn btn-secondary mr-1 me-3'>
              {!loading && 'Cancel'}
            </Link>

          </div>
        </form>
      </div>
    </div>
  )
}

const ListAddWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.LISTADD'})}</PageTitle>
      <ListAddPage />
    </>
  )
}

export {ListAddWrapper}