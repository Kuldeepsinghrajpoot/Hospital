'use client'
import Link from 'next/link'
// import Chat from './page/chat/index'
export default function Home() {
  return (
    <>
    <div className=" absolute layout-content-navbar">
      <div className="">
        {/* <!-- Menu --> */}

        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <Link href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                    fill="#7367F0"
                  />
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                    fill="#161616"
                  />
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                    fill="#161616"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                    fill="#7367F0"
                  />
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bold text-2xl">Kuldeep</span>
            </Link>

            <Link href="" className="layout-menu-toggle menu-link text-large ms-auto">
              <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
              <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
            </Link>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            {/* <!-- Dashboards --> */}
            {/* active */}
            <li className="menu-item active ">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-smart-home"></i>
                <div data-i18n="Dashboards">Dashboards</div>
                <div className="badge bg-label-primary rounded-pill ms-auto">3</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item active">
                  <Link href="index.html" className="menu-link">
                    <div data-i18n="Analytics">Analytics</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="dashboards-crm.html" className="menu-link">
                    <div data-i18n="CRM">CRM</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="dashboards-ecommerce.html" className="menu-link">
                    <div data-i18n="eCommerce">eCommerce</div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <!-- Layouts --> */}
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-layout-sidebar"></i>
                <div data-i18n="Layouts">Layouts</div>
              </Link>

              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="layouts-collapsed-menu.html" className="menu-link">
                    <div data-i18n="Collapsed menu">Collapsed menu</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-content-navbar.html" className="menu-link">
                    <div data-i18n="Content navbar">Content navbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-content-navbar-with-sidebar.html" className="menu-link">
                    <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="../horizontal-menu-template" className="menu-link" target="_blank">
                    <div data-i18n="Horizontal">Horizontal</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-without-menu.html" className="menu-link">
                    <div data-i18n="Without menu">Without menu</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-without-navbar.html" className="menu-link">
                    <div data-i18n="Without navbar">Without navbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-fluid.html" className="menu-link">
                    <div data-i18n="Fluid">Fluid</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-container.html" className="menu-link">
                    <div data-i18n="Container">Container</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="layouts-blank.html" className="menu-link">
                    <div data-i18n="Blank">Blank</div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <!-- Apps & Pages --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Apps &amp; Pages</span>
            </li>
            <li className="menu-item">
              <Link href="./page/chat" className="menu-link">
                <i className="menu-icon tf-icons ti ti-mail"></i>
                <div data-i18n="Email">Email</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="./page/chat" className="menu-link">
                <i className="menu-icon tf-icons ti ti-messages"></i>
                <div data-i18n="Chat">Chat</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="app-calendar.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-calendar"></i>
                <div data-i18n="Calendar">Calendar</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="app-kanban.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-layout-kanban"></i>
                <div data-i18n="Kanban">Kanban</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-file-dollar"></i>
                <div data-i18n="Invoice">Invoice</div>
                <div className="badge bg-label-danger rounded-pill ms-auto">4</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="app-invoice-list.html" className="menu-link">
                    <div data-i18n="List">List</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="app-invoice-preview.html" className="menu-link">
                    <div data-i18n="Preview">Preview</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="app-invoice-edit.html" className="menu-link">
                    <div data-i18n="Edit">Edit</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="app-invoice-add.html" className="menu-link">
                    <div data-i18n="Add">Add</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-users"></i>
                <div data-i18n="Users">Users</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="app-user-list.html" className="menu-link">
                    <div data-i18n="List">List</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="View">View</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="app-user-view-account.html" className="menu-link">
                        <div data-i18n="Account">Account</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="app-user-view-security.html" className="menu-link">
                        <div data-i18n="Security">Security</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="app-user-view-billing.html" className="menu-link">
                        <div data-i18n="Billing & Plans">Billing & Plans</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="app-user-view-notifications.html" className="menu-link">
                        <div data-i18n="Notifications">Notifications</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="app-user-view-connections.html" className="menu-link">
                        <div data-i18n="Connections">Connections</div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-settings"></i>
                <div data-i18n="Roles & Permissions">Roles & Permissions</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="app-access-roles.html" className="menu-link">
                    <div data-i18n="Roles">Roles</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="app-access-permission.html" className="menu-link">
                    <div data-i18n="Permission">Permission</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-file"></i>
                <div data-i18n="Pages">Pages</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="User Profile">User Profile</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="pages-profile-user.html" className="menu-link">
                        <div data-i18n="Profile">Profile</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-profile-teams.html" className="menu-link">
                        <div data-i18n="Teams">Teams</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-profile-projects.html" className="menu-link">
                        <div data-i18n="Projects">Projects</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-profile-connections.html" className="menu-link">
                        <div data-i18n="Connections">Connections</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Account Settings">Account Settings</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="pages-account-settings-account.html" className="menu-link">
                        <div data-i18n="Account">Account</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-account-settings-security.html" className="menu-link">
                        <div data-i18n="Security">Security</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-account-settings-billing.html" className="menu-link">
                        <div data-i18n="Billing & Plans">Billing & Plans</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-account-settings-notifications.html" className="menu-link">
                        <div data-i18n="Notifications">Notifications</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-account-settings-connections.html" className="menu-link">
                        <div data-i18n="Connections">Connections</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="pages-faq.html" className="menu-link">
                    <div data-i18n="FAQ">FAQ</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Help Center">Help Center</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="pages-help-center-landing.html" className="menu-link">
                        <div data-i18n="Landing">Landing</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-help-center-categories.html" className="menu-link">
                        <div data-i18n="Categories">Categories</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-help-center-article.html" className="menu-link">
                        <div data-i18n="Article">Article</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="pages-pricing.html" className="menu-link">
                    <div data-i18n="Pricing">Pricing</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Misc">Misc</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="pages-misc-error.html" className="menu-link" target="_blank">
                        <div data-i18n="Error">Error</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                        <div data-i18n="Under Maintenance">Under Maintenance</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                        <div data-i18n="Coming Soon">Coming Soon</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                        <div data-i18n="Not Authorized">Not Authorized</div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-lock"></i>
                <div data-i18n="Authentications">Authentications</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Login">Login</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="auth-login-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-login-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Register">Register</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="auth-register-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-register-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-register-multisteps.html" className="menu-link" target="_blank">
                        <div data-i18n="Multi-steps">Multi-steps</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Verify Email">Verify Email</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Reset Password">Reset Password</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Forgot Password">Forgot Password</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Two Steps">Two Steps</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                        <div data-i18n="Cover">Cover</div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-forms"></i>
                <div data-i18n="Wizard Examples">Wizard Examples</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="wizard-ex-checkout.html" className="menu-link">
                    <div data-i18n="Checkout">Checkout</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="wizard-ex-property-listing.html" className="menu-link">
                    <div data-i18n="Property Listing">Property Listing</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="wizard-ex-create-deal.html" className="menu-link">
                    <div data-i18n="Create Deal">Create Deal</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="modal-examples.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-square"></i>
                <div data-i18n="Modal Examples">Modal Examples</div>
              </Link>
            </li>

            {/* <!-- Components --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Components</span>
            </li>
            {/* <!-- Cards --> */}
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-id"></i>
                <div data-i18n="Cards">Cards</div>
                <div className="badge bg-label-primary rounded-pill ms-auto">6</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="cards-basic.html" className="menu-link">
                    <div data-i18n="Basic">Basic</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="cards-advance.html" className="menu-link">
                    <div data-i18n="Advance">Advance</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="cards-statistics.html" className="menu-link">
                    <div data-i18n="Statistics">Statistics</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="cards-analytics.html" className="menu-link">
                    <div data-i18n="Analytics">Analytics</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="cards-actions.html" className="menu-link">
                    <div data-i18n="Actions">Actions</div>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <!-- User interface --> */}
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-color-swatch"></i>
                <div data-i18n="User interface">User interface</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="ui-accordion.html" className="menu-link">
                    <div data-i18n="Accordion">Accordion</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-alerts.html" className="menu-link">
                    <div data-i18n="Alerts">Alerts</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-badges.html" className="menu-link">
                    <div data-i18n="Badges">Badges</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-buttons.html" className="menu-link">
                    <div data-i18n="Buttons">Buttons</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-carousel.html" className="menu-link">
                    <div data-i18n="Carousel">Carousel</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-collapse.html" className="menu-link">
                    <div data-i18n="Collapse">Collapse</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-dropdowns.html" className="menu-link">
                    <div data-i18n="Dropdowns">Dropdowns</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-footer.html" className="menu-link">
                    <div data-i18n="Footer">Footer</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-list-groups.html" className="menu-link">
                    <div data-i18n="List Groups">List groups</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-modals.html" className="menu-link">
                    <div data-i18n="Modals">Modals</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-navbar.html" className="menu-link">
                    <div data-i18n="Navbar">Navbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-offcanvas.html" className="menu-link">
                    <div data-i18n="Offcanvas">Offcanvas</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-pagination-breadcrumbs.html" className="menu-link">
                    <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-progress.html" className="menu-link">
                    <div data-i18n="Progress">Progress</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-spinners.html" className="menu-link">
                    <div data-i18n="Spinners">Spinners</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-tabs-pills.html" className="menu-link">
                    <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-toasts.html" className="menu-link">
                    <div data-i18n="Toasts">Toasts</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-tooltips-popovers.html" className="menu-link">
                    <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="ui-typography.html" className="menu-link">
                    <div data-i18n="Typography">Typography</div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <!-- Extended components --> */}
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-components"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="extended-ui-avatar.html" className="menu-link">
                    <div data-i18n="Avatar">Avatar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-blockui.html" className="menu-link">
                    <div data-i18n="BlockUI">BlockUI</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-drag-and-drop.html" className="menu-link">
                    <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-media-player.html" className="menu-link">
                    <div data-i18n="Media Player">Media Player</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-perfect-scrollbar.html" className="menu-link">
                    <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-star-ratings.html" className="menu-link">
                    <div data-i18n="Star Ratings">Star Ratings</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-sweetalert2.html" className="menu-link">
                    <div data-i18n="SweetAlert2">SweetAlert2</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-text-divider.html" className="menu-link">
                    <div data-i18n="Text Divider">Text Divider</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="" className="menu-link menu-toggle">
                    <div data-i18n="Timeline">Timeline</div>
                  </Link>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link href="extended-ui-timeline-basic.html" className="menu-link">
                        <div data-i18n="Basic">Basic</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="extended-ui-timeline-fullscreen.html" className="menu-link">
                        <div data-i18n="Fullscreen">Fullscreen</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-tour.html" className="menu-link">
                    <div data-i18n="Tour">Tour</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-treeview.html" className="menu-link">
                    <div data-i18n="Treeview">Treeview</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="extended-ui-misc.html" className="menu-link">
                    <div data-i18n="Miscellaneous">Miscellaneous</div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <!-- Icons --> */}
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-brand-tabler"></i>
                <div data-i18n="Icons">Icons</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="icons-tabler.html" className="menu-link">
                    <div data-i18n="Tabler">Tabler</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="icons-font-awesome.html" className="menu-link">
                    <div data-i18n="Fontawesome">Fontawesome</div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <!-- Forms & Tables --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Forms &amp; Tables</span>
            </li>
            {/* <!-- Forms --> */}
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-toggle-left"></i>
                <div data-i18n="Form Elements">Form Elements</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="forms-basic-inputs.html" className="menu-link">
                    <div data-i18n="Basic Inputs">Basic Inputs</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-input-groups.html" className="menu-link">
                    <div data-i18n="Input groups">Input groups</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-custom-options.html" className="menu-link">
                    <div data-i18n="Custom Options">Custom Options</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-editors.html" className="menu-link">
                    <div data-i18n="Editors">Editors</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-file-upload.html" className="menu-link">
                    <div data-i18n="File Upload">File Upload</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-pickers.html" className="menu-link">
                    <div data-i18n="Pickers">Pickers</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-selects.html" className="menu-link">
                    <div data-i18n="Select & Tags">Select &amp; Tags</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-sliders.html" className="menu-link">
                    <div data-i18n="Sliders">Sliders</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-switches.html" className="menu-link">
                    <div data-i18n="Switches">Switches</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="forms-extras.html" className="menu-link">
                    <div data-i18n="Extras">Extras</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-layout-navbar"></i>
                <div data-i18n="Form Layouts">Form Layouts</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="form-layouts-vertical.html" className="menu-link">
                    <div data-i18n="Vertical Form">Vertical Form</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="form-layouts-horizontal.html" className="menu-link">
                    <div data-i18n="Horizontal Form">Horizontal Form</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="form-layouts-sticky.html" className="menu-link">
                    <div data-i18n="Sticky Actions">Sticky Actions</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-text-wrap-disabled"></i>
                <div data-i18n="Form Wizard">Form Wizard</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="form-wizard-numbered.html" className="menu-link">
                    <div data-i18n="Numbered">Numbered</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="form-wizard-icons.html" className="menu-link">
                    <div data-i18n="Icons">Icons</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="form-validation.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-checkbox"></i>
                <div data-i18n="Form Validation">Form Validation</div>
              </Link>
            </li>
            {/* <!-- Tables --> */}
            <li className="menu-item">
              <Link href="tables-basic.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-table"></i>
                <div data-i18n="Tables">Tables</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-layout-grid"></i>
                <div data-i18n="Datatables">Datatables</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="tables-datatables-basic.html" className="menu-link">
                    <div data-i18n="Basic">Basic</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="tables-datatables-advanced.html" className="menu-link">
                    <div data-i18n="Advanced">Advanced</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="tables-datatables-extensions.html" className="menu-link">
                    <div data-i18n="Extensions">Extensions</div>
                  </Link>
                </li>
              </ul>
            </li>

            {/* <!-- Charts & Maps --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Charts &amp; Maps</span>
            </li>
            <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-chart-pie"></i>
                <div data-i18n="Charts">Charts</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="charts-apex.html" className="menu-link">
                    <div data-i18n="Apex Charts">Apex Charts</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="charts-chartjs.html" className="menu-link">
                    <div data-i18n="ChartJS">ChartJS</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="maps-leaflet.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-map"></i>
                <div data-i18n="Leaflet Maps">Leaflet Maps</div>
              </Link>
            </li>

            {/* <!-- Misc --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Misc</span>
            </li>
            <li className="menu-item">
              <Link href="https://pixinvent.ticksy.com/" target="_blank" className="menu-link">
                <i className="menu-icon tf-icons ti ti-lifebuoy"></i>
                <div data-i18n="Support">Support</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/"
                target="_blank"
                className="menu-link"
              >
                <i className="menu-icon tf-icons ti ti-file-description"></i>
                <div data-i18n="Documentation">Documentation</div>
              </Link>
            </li>
          </ul>
        </aside>
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}

          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <Link className="nav-item nav-link px-0 me-xl-4" href="">
                <i className="ti ti-menu-2 ti-sm"></i>
              </Link>
            </div>

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              {/* <!-- Search --> */}
              <div className="navbar-nav align-items-center">
                <div className="nav-item navbar-search-wrapper mb-0">
                  <Link className="nav-item nav-link search-toggler d-flex align-items-center px-0" href="">
                    <i className="ti ti-search ti-md me-2"></i>
                    <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                  </Link>
                </div>
              </div>
              {/* <!-- /Search --> */}

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* <!-- Language --> */}
                <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                  <Link className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                    <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="" data-language="en">
                        <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                        <span className="align-middle">English</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="" data-language="fr">
                        <i className="fi fi-fr fis rounded-circle me-1 fs-3"></i>
                        <span className="align-middle">French</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="" data-language="de">
                        <i className="fi fi-de fis rounded-circle me-1 fs-3"></i>
                        <span className="align-middle">German</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="" data-language="pt">
                        <i className="fi fi-pt fis rounded-circle me-1 fs-3"></i>
                        <span className="align-middle">Portuguese</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <!--/ Language -->

               <!-- Style Switcher --> */}
                <li className="nav-item me-2 me-xl-0">
                  <Link className="nav-link style-switcher-toggle hide-arrow" href="">
                    <i className="ti ti-md"></i>
                  </Link>
                </li>
                {/* <!--/ Style Switcher -->

               <!-- Quick links  --> */}
                <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                  <Link
                    className="nav-link dropdown-toggle hide-arrow"
                    href=""
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <i className="ti ti-layout-grid-add ti-md"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end py-0">
                    <div className="dropdown-menu-header border-bottom">
                      <div className="dropdown-header d-flex align-items-center py-3">
                        <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                        <Link
                          href=""
                          className="dropdown-shortcuts-add text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Add shortcuts"
                        ><i className="ti ti-sm ti-apps"></i ></Link>
                      </div>
                    </div>
                    <div className="dropdown-shortcuts-list scrollable-container">
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-calendar fs-4"></i>
                          </span>
                          <Link href="app-calendar.html" className="stretched-link">Calendar</Link>
                          <small className="text-muted mb-0">Appointments</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-file-invoice fs-4"></i>
                          </span>
                          <Link href="app-invoice-list.html" className="stretched-link">Invoice App</Link>
                          <small className="text-muted mb-0">Manage Accounts</small>
                        </div>
                      </div>
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-users fs-4"></i>
                          </span>
                          <Link href="app-user-list.html" className="stretched-link">User App</Link>
                          <small className="text-muted mb-0">Manage Users</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-lock fs-4"></i>
                          </span>
                          <Link href="app-access-roles.html" className="stretched-link">Role Management</Link>
                          <small className="text-muted mb-0">Permission</small>
                        </div>
                      </div>
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-chart-bar fs-4"></i>
                          </span>
                          <Link href="index.html" className="stretched-link">Dashboard</Link>
                          <small className="text-muted mb-0">User Profile</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-settings fs-4"></i>
                          </span>
                          <Link href="pages-account-settings-account.html" className="stretched-link">Setting</Link>
                          <small className="text-muted mb-0">Account Settings</small>
                        </div>
                      </div>
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-help fs-4"></i>
                          </span>
                          <Link href="pages-help-center-landing.html" className="stretched-link">Help Center</Link>
                          <small className="text-muted mb-0">FAQs & Articles</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-square fs-4"></i>
                          </span>
                          <Link href="modal-examples.html" className="stretched-link">Modals</Link>
                          <small className="text-muted mb-0">Useful Popups</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <!-- Quick links -->

               <!-- Notification --> */}

                {/* <!--/ Notification --> */}

                {/* <!-- User --> */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <Link className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src="./img/avatars/1.png" alt="picture" className="h-auto rounded-circle" />
                    </div>
                  </Link>
                  {/* dropdown menue */}
                  <ul className="dropdown-menu dropdown-menu-end bg-white text-start py-1 px-4 -mx-40 absolute shadow-lg ">
                    <li>
                      <Link className="dropdown-item" href="pages-account-settings-account.html">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src="./img/avatars/1.png" alt="picture" className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="pages-profile-user.html">
                        <i className="ti ti-user-check me-2 ti-sm"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="pages-account-settings-account.html">
                        <i className="ti ti-settings me-2 ti-sm"></i>
                        <span className="align-middle">Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="pages-account-settings-billing.html">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="pages-help-center-landing.html">
                        <i className="ti ti-lifebuoy me-2 ti-sm"></i>
                        <span className="align-middle">Help</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="pages-faq.html">
                        <i className="ti ti-help me-2 ti-sm"></i>
                        <span className="align-middle">FAQ</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="pages-pricing.html">
                        <i className="ti ti-currency-dollar me-2 ti-sm"></i>
                        <span className="align-middle">Pricing</span>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="auth-login-cover.html" target="_blank">
                        <i className="ti ti-logout me-2 ti-sm"></i>
                        <span className="align-middle">Log Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <!--/ User --> */}
              </ul>
            </div>


          </nav>
          {/* <!-- Content wrapper --> */}
        
        </div>
      </div>
    </div>
   
      </>




  )
}
