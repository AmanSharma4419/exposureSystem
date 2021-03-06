import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';

import { Layout, Menu, Icon, Table, Divider, Spin, Button } from 'antd';
const { Column, ColumnGroup } = Table;
const { Header, Content, Footer, Sider } = Layout;

class AdminFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubmissionList();
  }

  render() {
    // const submissionFeed =
    console.log(this.props);
    const submissionList =
      this.props.submissionReducer.submissionList &&
      this.props.submissionReducer.submissionList.submissions.reverse();
    return (
      <>
        <div>
          <div>
            {this.props.submissionReducer.isLoadingSubmissionList ? (
              <div>
                <div className='flex-center spinner'>
                  <Spin size='large' />
                </div>
                <h4
                  className='heading flex-center'
                  style={{ marginTop: '20rem', paddingRight: '15rem' }}
                >
                  We're pulling up submissions to show you right now...
                </h4>
              </div>
            ) : (
              <div>
                <Layout style={{ height: '98vh' }}>
                  <Sider
                    breakpoint='lg'
                    collapsedWidth='0'
                    onBreakpoint={broken => {
                      console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                      console.log(collapsed, type);
                    }}
                  >
                    <div className='logo'>Exposure System</div>
                    <Menu
                      theme='dark'
                      mode='inline'
                      style={{ paddingTop: '2.45rem' }}
                      defaultSelectedKeys={['2']}
                    >
                      <Menu.Item key='1'>
                        <NavLink to='/admin/feed'>
                          <Icon type='user' />
                          <span className='nav-text'>Home</span>
                          {/* <span className='nav-text'>Home (Stats)</span> */}
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key='2'>
                        <NavLink to='/admin/feed'>
                          <Icon type='video-camera' />
                          <span className='nav-text'>Submissions</span>
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key='3'>
                        <NavLink to='/admin/contents'>
                          <Icon type='video-camera' />
                          <span className='nav-text'>Content List</span>
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key='4'>
                        <NavLink to='/admin/students'>
                          <Icon type='video-camera' />
                          <span className='nav-text'>Student List</span>
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key='5'>
                        <NavLink to='/admin/pending-approvals'>
                          <Icon type='video-camera' />
                          <span className='nav-text'>Pending Approvals</span>
                        </NavLink>
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout>
                    <Header
                      style={{
                        background: '#fff',
                        padding: '0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#011529',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          margin: '0 auto',
                          alignItems: 'baseline',
                          width: '90%',
                        }}
                      >
                        <NavLink to='/'>
                          <h3>Exposure System</h3>
                        </NavLink>
                        <div
                          style={{
                            marginBottom: '5rem',
                            paddingBottom: '1rem',
                          }}
                        >
                          <Button
                            type='link'
                            ghost='true'
                            onClick={this.props.handleLogout}
                          >
                            Logout
                          </Button>
                        </div>
                      </div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                      <h3 className='flex-center heading'>Submission List</h3>
                      <Table bordered dataSource={submissionList}>
                        <ColumnGroup title='Submission List'>
                          <Column
                            width='13%'
                            title='Username'
                            dataIndex='username'
                            key='username'
                          />
                          <Column
                            width='30%'
                            title='Title'
                            dataIndex='title'
                            key='title'
                          />
                          <Column
                            width='50%'
                            title='Summary'
                            dataIndex='contentSummary'
                            key='contentSummary'
                          />
                          <Column
                            width='10%'
                            title='Points Awarded'
                            dataIndex='pointsAwarded'
                            key='pointsAwarded'
                          />
                        </ColumnGroup>
                      </Table>{' '}
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>
                      Exposure System ©2018 Created by AltCampus
                    </Footer> */}
                  </Layout>
                </Layout>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchSubmissionList })(AdminFeed);
