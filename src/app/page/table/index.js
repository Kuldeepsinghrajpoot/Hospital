import React from 'react';

const Notauthorise = () => {
  return (
    <>
     <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}

        
        {/* / Menu */}

        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}

          

          {/* / Navbar */}

          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}

            <div className="container-xxl flex-grow-1 container-p-y">
           

              {/* Bordered Table */}
              <div className="card">
                <h5 className="card-header">Bordered Table</h5>
                <div className="card-body">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Users</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <i className="ti ti-brand-angular ti-lg text-danger me-3"></i> <strong>Angular Project</strong>
                          </td>
                          <td>Albert Cook</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-primary me-1">Active</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-react-native ti-lg text-info me-3"></i> <strong>React Project</strong>
                          </td>
                          <td>Barry Hunter</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-success me-1">Completed</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-vue ti-lg text-success me-3"></i> <strong>VueJs Project</strong>
                          </td>
                          <td>Trevor Baker</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>


                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr><tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr><tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="ti ti-brand-bootstrap ti-lg text-primary me-3"></i>
                            <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="./img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="./img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                className="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="./img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span className="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="ti ti-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-pencil me-1"></i> Edit</a
                                >
                                <a className="dropdown-item" href=""
                                  ><i className="ti ti-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
             
              {/*/ Responsive Table */}
            
            </div>
            {/* / Content */}

            {/* Footer */}
            
            {/* / Footer */}

          
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>

      {/* Overlay */}
     
    </div>
    </>
  );
}

export default Notauthorise;
