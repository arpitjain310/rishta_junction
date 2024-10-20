  import React, { useState, useEffect } from 'react';
  import { Table, Button, Modal, Form, Input, message } from 'antd';
  import axios from 'axios';
  import './admin.css'; 

  const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [matches, setMatches] = useState([]);
    const [isUserModalVisible, setIsUserModalVisible] = useState(false);
    const [isMatchModalVisible, setIsMatchModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentMatch, setCurrentMatch] = useState(null);

    useEffect(() => {
      fetchUsers();
      fetchMatches();
    }, []);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get_all_profiles');
        setUsers(response.data);
      } catch (error) {
        message.error('Failed to fetch users');
      }
    };

    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/get_matches');
        setMatches(response.data);
      } catch (error) {
        message.error('Failed to fetch matches');
      }
    };

    const handleUpdateUser = async (values) => {
      try {
        await axios.put(`/api/users/${currentUser.profile_id}`, values);
        message.success('User updated successfully');
        setIsUserModalVisible(false);
        fetchUsers();
      } catch (error) {
        message.error('Failed to update user');
      }
    };

    const handleDeleteUser = async (userId) => {
      try {
        await axios.delete(`/api/users/${userId}`);
        message.success('User deleted successfully');
        fetchUsers();
      } catch (error) {
        message.error('Failed to delete user');
      }
    };

    const handleUpdateMatch = async (values) => {
      try {
        await axios.put(`/api/matches/${currentMatch.matcher_id}`, values);
        message.success('Match updated successfully');
        setIsMatchModalVisible(false);
        fetchMatches();
      } catch (error) {
        message.error('Failed to update match');
      }
    };

    const handleDeleteMatch = async (matchId) => {
      try {
        await axios.delete(`/api/matches/${matchId}`);
        message.success('Match deleted successfully');
        fetchMatches();
      } catch (error) {
        message.error('Failed to delete match');
      }
    };

    const userColumns = [
      { title: 'Profile ID', dataIndex: 'profile_id', key: 'profile_id' },
      { title: 'User ID', dataIndex: 'user_id', key: 'user_id' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      { title: 'Gender', dataIndex: 'gender', key: 'gender' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      
      { title: 'Created At', dataIndex: 'created_at', key: 'created_at' },
      
      {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
          <>
            <Button className="action-button" onClick={() => { setCurrentUser(record); setIsUserModalVisible(true); }}>Update</Button>
            <Button className="action-button" onClick={() => handleDeleteUser(record.profile_id)} danger>Delete</Button>
          </>
        ),
      },
    ];

    const matchColumns = [
      { title: 'Matcher ID', dataIndex: 'matcher_id', key: 'matcher_id' },
      { title: 'Matched User ID', dataIndex: 'matched_user_id', key: 'matched_user_id' },
      { title: 'Matcher Name', dataIndex: 'matcher_name', key: 'matcher_name' },
      { title: 'Matched User Name', dataIndex: 'matched_user_name', key: 'matched_user_name' },
      {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
          <>
            <Button className="action-button" onClick={() => { setCurrentMatch(record); setIsMatchModalVisible(true); }}>Update</Button>
            <Button className="action-button" onClick={() => handleDeleteMatch(record.matcher_id)} danger>Delete</Button>
          </>
        ),
      },
    ];

    return (
      <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
    
      <h2 className="section-title">Profiles</h2>
      <Table dataSource={users} columns={userColumns} rowKey="profile_id" />

      <h2 className="section-title">Matches</h2>
      <Table dataSource={matches} columns={matchColumns} rowKey="matcher_id" />

        <Modal
          title="Update User"
          visible={isUserModalVisible}
          onCancel={() => setIsUserModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleUpdateUser} initialValues={currentUser}>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Input />
            </Form.Item>
            <Form.Item name="age" label="Age">
              <Input type="number" />
            </Form.Item>
            <Form.Item name="height" label="Height">
              <Input />
            </Form.Item>
            <Form.Item name="weight" label="Weight">
              <Input />
            </Form.Item>
            <Form.Item name="location" label="Location">
              <Input />
            </Form.Item>
            <Form.Item name="interests" label="Interests">
              <Input />
            </Form.Item>
            <Form.Item name="about" label="About">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="profile_picture" label="Profile Picture">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Update</Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Update Match"
          visible={isMatchModalVisible}
          onCancel={() => setIsMatchModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleUpdateMatch} initialValues={currentMatch}>
            <Form.Item name="matched_user_id" label="Matched User ID" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="matcher_name" label="Matcher Name">
              <Input />
            </Form.Item>
            <Form.Item name="matched_user_name" label="Matched User Name">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Update</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  };

  export default AdminPage;