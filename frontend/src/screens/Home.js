import React from 'react';
import Card from 'react-bootstrap/Card';
import '../home.css'

const Home = () => {
  return (
    <>
      <div class="page">
        <div class="page-inner">



          <header class="page-title-bar">
            <div class="row">
              <div class="col-12">
                <h4 class="">Setup</h4>
                <p class="text-muted">Manage application settings and options</p>
              </div>
            </div>
          </header>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">General Settings</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/businessinfo">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-info"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Business Information<br/>
                        <p class="text-muted small mb-0">Update business logo, report headers and other settings</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/email">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-at"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      E-Mail Settings<br/>
                        <p class="text-muted small mb-0">Setup your business e-mail to send mails</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/helpdesk">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-question"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Helpdesk<br/>
                        <span class="text-muted small mb-0">Manage Helpdesk Categories</span>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/workflows">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-arrows"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Workflows <span class="badge badge-primary badge-subtle">PRO</span><br/>
                        <p class="text-muted small mb-0">Create custom Workflows for approvals</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/employeecode">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-sort-numeric-asc"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Employee Code<br/>
                        <p class="text-muted small">Automatic Employee Code Generation</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/selfonboarding">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-user-plus"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Self-Onboarding <span class="badge badge-primary badge-subtle">PRO</span><br/>
                        <p class="text-muted small mb-0">Configure Self-Onboarding form and mandatory fields</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/exitreasons">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-sign-out"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Exit Reasons<br/>
                        <p class="text-muted small mb-0">Define custom employee exit reasons for exit analysis</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/integrations/index">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-codepen"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Integrations<br/>
                        <p class="text-muted small mb-0">Custom and third party integrations</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">Work Profile Masters</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/locations">
                    <div class="col-3 text-center">
                      <div class="tile bg-warning">
                        <i class="fa fa-map-pin"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Locations<br/>
                        <p class="text-muted small">Create or edit work locations</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/costcenters">
                    <div class="col-3 text-center">
                      <div class="tile bg-warning">
                        <i class="fa fa-money"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Cost Centers<br/>
                        <p class="text-muted small">Manage cost-centers in your business</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/departments">
                    <div class="col-3 text-center">
                      <div class="tile bg-warning">
                        <i class="fa fa-building"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Departments<br/>
                        <p class="text-muted small">Manage departments &amp; heads</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/grades">
                    <div class="col-3 text-center">
                      <div class="tile bg-warning">
                        <i class="fa fa-level-up"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Grades<br/>
                        <p class="text-muted small">Manage Grades as per employee seniority</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/designations">
                    <div class="col-3 text-center">
                      <div class="tile bg-warning">
                        <i class="fa fa-black-tie"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Designations<br/>
                        <p class="text-muted small">Manage employee titles within each grades</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/shifts">
                    <div class="col-3 text-center">
                      <div class="tile bg-warning">
                        <i class="fa fa-clock-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Work Shifts<br/>
                        <p class="text-muted small">Define shifts with start/end time</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">Salary &amp; Deductions</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/components">
                    <div class="col-3 text-center">
                      <div class="tile bg-danger">
                        <i class="fa fa-plus"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Components<br/>
                        <p class="text-muted small">Fixed, variable, time based components</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/deductions">
                    <div class="col-3 text-center">
                      <div class="tile bg-danger">
                        <i class="fa fa-scissors"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Deductions<br/>
                        <p class="text-muted small">Fixed, percent &amp; calculated deductions</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/salarystructures">
                    <div class="col-3 text-center">
                      <div class="tile bg-danger">
                        <i class="fa fa-cubes"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Salary Structures <br/>
                        <p class="text-muted small">Pre-defined salary structures by grades</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">Leaves &amp; Attendance</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attendance/settings">
                    <div class="col-3 text-center">
                      <div class="tile bg-primary">
                        <i class="fa fa-wrench"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Attendance Settings<br/>
                        <p class="text-muted small">Present minutes and sandwich rules</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attendance/leavetypes">
                    <div class="col-3 text-center">
                      <div class="tile bg-primary">
                        <i class="fa fa-calendar-check-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Attendance Types<br/>
                        <p class="text-muted small">Leave Types, Leave Grant &amp; Lapse rules</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attendance/holidays">
                    <div class="col-3 text-center">
                      <div class="tile bg-primary">
                        <i class="fa fa-plane"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Holidays<br/>
                        <p class="text-muted small">Define holidays by location</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attendance/weekoffs">
                    <div class="col-3 text-center">
                      <div class="tile bg-primary">
                        <i class="fa fa-calendar-minus-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Weekly Offs<br/>
                        <p class="text-muted small">Setup weekly offs by location</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attendance/compoffs">
                    <div class="col-3 text-center">
                      <div class="tile bg-info">
                        <i class="fa fa-calendar-plus-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Comp Off Rules<br/>
                        <p class="text-muted small">Comp Offs for holiday and weekly offs</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/time/strikerules">
                    <div class="col-3 text-center">
                      <div class="tile bg-info">
                        <i class="fa fa-bolt"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Time Strike Rules<br/>
                        <p class="text-muted small">Late coming, early going adjustments</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/time/timesalary">
                    <div class="col-3 text-center">
                      <div class="tile bg-info">
                        <i class="fa fa-clock-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Time Salary<br/>
                        <p class="text-muted small">Time based salary calculation</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/time/overtime">
                    <div class="col-3 text-center">
                      <div class="tile bg-info">
                        <i class="fa fa-sliders"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Overtime Rules<br/>
                        <p class="text-muted small">Overtime calculation for each shift</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">Statutory Settings</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/stat/esi">
                    <div class="col-3 text-center">
                      <div class="tile bg-basecamp">
                        <i class="fa fa-cogs text-light"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      ESI Settings<br/>
                        <p class="text-muted small">Employees' State Insurance</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/stat/pf">
                    <div class="col-3 text-center">
                      <div class="tile bg-basecamp">
                        <i class="fa fa-cogs text-light"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      EPF Settings<br/>
                        <p class="text-muted small">Employee Provident Fund</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/stat/ptax">
                    <div class="col-3 text-center">
                      <div class="tile bg-basecamp">
                        <i class="fa fa-cogs text-light"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Prof. Tax Settings<br/>
                        <p class="text-muted small">Rates, applicability and components</p>
                    </div>
                  </a>
                </div>


                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/stat/itaxrates">
                    <div class="col-3 text-center">
                      <div class="tile bg-basecamp">
                        <i class="fa fa-cogs text-light"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Inc. Tax Settings <span class="badge badge-primary badge-subtle">PRO</span><br/>
                        <p class="text-muted small">Taxable components and locations</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/stat/itaxinfo">
                    <div class="col-3 text-center">
                      <div class="tile bg-basecamp">
                        <i class="fa fa-cogs text-light"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      TDS Info <span class="badge badge-primary badge-subtle">PRO</span><br/>
                        <p class="text-muted small">Information required for TDS Return</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/stat/itaxform16">
                    <div class="col-3 text-center">
                      <div class="tile bg-basecamp">
                        <i class="fa fa-cogs text-light"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Form 16 Info <span class="badge badge-primary badge-subtle">PRO</span><br/>
                        <p class="text-muted small">Information required for FORM-16</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">Attendance Sources</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attsources/gatekeeper">
                    <div class="col-3 text-center">
                      <div class="tile bg-red">
                        <i class="fa fa-qrcode"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Gatekeeper<br/>
                        <p class="text-muted small">Add Gatekeeper devices and view status of existing device(s)</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attsources/biometric">
                    <div class="col-3 text-center">
                      <div class="tile bg-red">
                        <i class="fa fa-thumbs-up"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Biometric Integration<br/>
                        <p class="text-muted small">Configure your ESSL, TimeOffice and other biometric machines</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/attsources/syncdevices">
                    <div class="col-3 text-center">
                      <div class="tile bg-red">
                        <i class="fa fa-refresh"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Sync Devices<br/>
                        <p class="text-muted small">Sync data from your offline biometric machine database</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h6 class="mb-3">Employee Self Service</h6>
              <div class="row">
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/leaves">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-calendar-check-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Leave Approval<br/>
                        <p class="text-muted small">Leave Approval authority and workflow</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/remotepunch">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-location-arrow"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Remote Punch<br/>
                        <p class="text-muted small">Enable, disable and location requirements</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/missedpunch">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-history"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Missed Punch<br/>
                        <p class="text-muted small">Enable, disable set time limits.</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/time">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-clock-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Time Relaxation<br/>
                        <p class="text-muted small">Enable, disable set approval auuthority.</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/compoff">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-calendar-plus-o"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Comp Offs<br/>
                        <p class="text-muted small">Enable, disable set approval auuthority.</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/travel">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-car"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      Travel Punch<br/>
                        <p class="text-muted small">Travel reimbursement settings.</p>
                    </div>
                  </a>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                  <a class="box-link row" href="/setup/ess/users">
                    <div class="col-3 text-center">
                      <div class="tile bg-success">
                        <i class="fa fa-users"></i>
                      </div>
                    </div>
                    <div class="col-9">
                      User Management<br/>
                        <p class="text-muted small">Create users for Workman and Connect portal.</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* <div>

        <div class="wrapper">
          <div class="page">
            <div class="page-inner">



              <header class="page-title-bar">
                <div class="row">
                  <div class="col-12">
                    <h4 class="">Setup</h4>
                    <p class="text-muted">Manage application settings and options</p>
                  </div>
                </div>
              </header>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">General Settings</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/businessinfo">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-info"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Business Information<br />
                          <p class="text-muted small mb-0">Update business logo, report headers and other settings</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/email">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-at"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          E-Mail Settings<br />
                          <p class="text-muted small mb-0">Setup your business e-mail to send mails</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/helpdesk">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-question"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Helpdesk<br />
                          <span class="text-muted small mb-0">Manage Helpdesk Categories</span>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/workflows">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-arrows"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Workflows <span class="badge badge-primary badge-subtle">PRO</span><br />
                          <p class="text-muted small mb-0">Create custom Workflows for approvals</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/employeecode">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-sort-numeric-asc"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Employee Code<br />
                          <p class="text-muted small">Automatic Employee Code Generation</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/selfonboarding">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-user-plus"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Self-Onboarding <span class="badge badge-primary badge-subtle">PRO</span><br />
                          <p class="text-muted small mb-0">Configure Self-Onboarding form and mandatory fields</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/exitreasons">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-sign-out"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Exit Reasons<br />
                          <p class="text-muted small mb-0">Define custom employee exit reasons for exit analysis</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/integrations/index">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-codepen"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Integrations<br />
                          <p class="text-muted small mb-0">Custom and third party integrations</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">Work Profile Masters</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/locations">
                        <div class="col-3 text-center">
                          <div class="tile bg-warning">
                            <i class="fa fa-map-pin"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Locations<br />
                          <p class="text-muted small">Create or edit work locations</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/costcenters">
                        <div class="col-3 text-center">
                          <div class="tile bg-warning">
                            <i class="fa fa-money"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Cost Centers<br />
                          <p class="text-muted small">Manage cost-centers in your business</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/departments">
                        <div class="col-3 text-center">
                          <div class="tile bg-warning">
                            <i class="fa fa-building"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Departments<br />
                          <p class="text-muted small">Manage departments &amp; heads</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/grades">
                        <div class="col-3 text-center">
                          <div class="tile bg-warning">
                            <i class="fa fa-level-up"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Grades<br />
                          <p class="text-muted small">Manage Grades as per employee seniority</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/designations">
                        <div class="col-3 text-center">
                          <div class="tile bg-warning">
                            <i class="fa fa-black-tie"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Designations<br />
                          <p class="text-muted small">Manage employee titles within each grades</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/shifts">
                        <div class="col-3 text-center">
                          <div class="tile bg-warning">
                            <i class="fa fa-clock-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Work Shifts<br />
                          <p class="text-muted small">Define shifts with start/end time</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">Salary &amp; Deductions</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/components">
                        <div class="col-3 text-center">
                          <div class="tile bg-danger">
                            <i class="fa fa-plus"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Components<br />
                          <p class="text-muted small">Fixed, variable, time based components</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/deductions">
                        <div class="col-3 text-center">
                          <div class="tile bg-danger">
                            <i class="fa fa-scissors"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Deductions<br />
                          <p class="text-muted small">Fixed, percent &amp; calculated deductions</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/salarystructures">
                        <div class="col-3 text-center">
                          <div class="tile bg-danger">
                            <i class="fa fa-cubes"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Salary Structures <br />
                          <p class="text-muted small">Pre-defined salary structures by grades</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">Leaves &amp; Attendance</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attendance/settings">
                        <div class="col-3 text-center">
                          <div class="tile bg-primary">
                            <i class="fa fa-wrench"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Attendance Settings<br />
                          <p class="text-muted small">Present minutes and sandwich rules</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attendance/leavetypes">
                        <div class="col-3 text-center">
                          <div class="tile bg-primary">
                            <i class="fa fa-calendar-check-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Attendance Types<br />
                          <p class="text-muted small">Leave Types, Leave Grant &amp; Lapse rules</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attendance/holidays">
                        <div class="col-3 text-center">
                          <div class="tile bg-primary">
                            <i class="fa fa-plane"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Holidays<br />
                          <p class="text-muted small">Define holidays by location</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attendance/weekoffs">
                        <div class="col-3 text-center">
                          <div class="tile bg-primary">
                            <i class="fa fa-calendar-minus-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Weekly Offs<br />
                          <p class="text-muted small">Setup weekly offs by location</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attendance/compoffs">
                        <div class="col-3 text-center">
                          <div class="tile bg-info">
                            <i class="fa fa-calendar-plus-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Comp Off Rules<br />
                          <p class="text-muted small">Comp Offs for holiday and weekly offs</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/time/strikerules">
                        <div class="col-3 text-center">
                          <div class="tile bg-info">
                            <i class="fa fa-bolt"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Time Strike Rules<br />
                          <p class="text-muted small">Late coming, early going adjustments</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/time/timesalary">
                        <div class="col-3 text-center">
                          <div class="tile bg-info">
                            <i class="fa fa-clock-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Time Salary<br />
                          <p class="text-muted small">Time based salary calculation</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/time/overtime">
                        <div class="col-3 text-center">
                          <div class="tile bg-info">
                            <i class="fa fa-sliders"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Overtime Rules<br />
                          <p class="text-muted small">Overtime calculation for each shift</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">Statutory Settings</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/stat/esi">
                        <div class="col-3 text-center">
                          <div class="tile bg-basecamp">
                            <i class="fa fa-cogs text-light"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          ESI Settings<br />
                          <p class="text-muted small">Employees' State Insurance</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/stat/pf">
                        <div class="col-3 text-center">
                          <div class="tile bg-basecamp">
                            <i class="fa fa-cogs text-light"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          EPF Settings<br />
                          <p class="text-muted small">Employee Provident Fund</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/stat/ptax">
                        <div class="col-3 text-center">
                          <div class="tile bg-basecamp">
                            <i class="fa fa-cogs text-light"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Prof. Tax Settings<br />
                          <p class="text-muted small">Rates, applicability and components</p>
                        </div>
                      </a>
                    </div>


                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/stat/itaxrates">
                        <div class="col-3 text-center">
                          <div class="tile bg-basecamp">
                            <i class="fa fa-cogs text-light"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Inc. Tax Settings <span class="badge badge-primary badge-subtle">PRO</span><br />
                          <p class="text-muted small">Taxable components and locations</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/stat/itaxinfo">
                        <div class="col-3 text-center">
                          <div class="tile bg-basecamp">
                            <i class="fa fa-cogs text-light"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          TDS Info <span class="badge badge-primary badge-subtle">PRO</span><br />
                          <p class="text-muted small">Information required for TDS Return</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/stat/itaxform16">
                        <div class="col-3 text-center">
                          <div class="tile bg-basecamp">
                            <i class="fa fa-cogs text-light"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Form 16 Info <span class="badge badge-primary badge-subtle">PRO</span><br />
                          <p class="text-muted small">Information required for FORM-16</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">Attendance Sources</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attsources/gatekeeper">
                        <div class="col-3 text-center">
                          <div class="tile bg-red">
                            <i class="fa fa-qrcode"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Gatekeeper<br />
                          <p class="text-muted small">Add Gatekeeper devices and view status of existing device(s)</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attsources/biometric">
                        <div class="col-3 text-center">
                          <div class="tile bg-red">
                            <i class="fa fa-thumbs-up"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Biometric Integration<br />
                          <p class="text-muted small">Configure your ESSL, TimeOffice and other biometric machines</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/attsources/syncdevices">
                        <div class="col-3 text-center">
                          <div class="tile bg-red">
                            <i class="fa fa-refresh"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Sync Devices<br />
                          <p class="text-muted small">Sync data from your offline biometric machine database</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h6 class="mb-3">Employee Self Service</h6>
                  <div class="row">
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/leaves">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-calendar-check-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Leave Approval<br />
                          <p class="text-muted small">Leave Approval authority and workflow</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/remotepunch">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-location-arrow"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Remote Punch<br />
                          <p class="text-muted small">Enable, disable and location requirements</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/missedpunch">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-history"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Missed Punch<br />
                          <p class="text-muted small">Enable, disable set time limits.</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/time">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-clock-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Time Relaxation<br />
                          <p class="text-muted small">Enable, disable set approval auuthority.</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/compoff">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-calendar-plus-o"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Comp Offs<br />
                          <p class="text-muted small">Enable, disable set approval auuthority.</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/travel">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-car"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          Travel Punch<br />
                          <p class="text-muted small">Travel reimbursement settings.</p>
                        </div>
                      </a>
                    </div>
                    <div class="col-6 col-lg-4 col-xl-3">
                      <a class="box-link row" href="/setup/ess/users">
                        <div class="col-3 text-center">
                          <div class="tile bg-success">
                            <i class="fa fa-users"></i>
                          </div>
                        </div>
                        <div class="col-9">
                          User Management<br />
                          <p class="text-muted small">Create users for Workman and Connect portal.</p>
                        </div>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}


export default Home
