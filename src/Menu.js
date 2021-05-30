import React from "react";

function Menu() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/avatar5.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Jay Jani
              </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Sales
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">3</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top 10</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Bottom 10</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Average</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sales Line Chart</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sales Donut Chart</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Information Cards
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>New Order</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Bounce Rate</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>User Registrations</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Unique Visitors</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Menu;
