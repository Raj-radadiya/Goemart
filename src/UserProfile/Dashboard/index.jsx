import React from 'react';
import './dashboard.scss';
import { FaShoppingBag, FaCheckCircle, FaClock, FaSpinner } from 'react-icons/fa';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Order Statistics Cards */}
            <div className="stats-cards">
                <div className="stat-card">
                    <div className="stat-icon">
                        <FaShoppingBag />
                    </div>
                    <div className="stat-details">
                        <h3>Total Orders</h3>
                        <p className="stat-number">156</p>
                        <p className="stat-growth positive">+8.5% from last month</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon pending">
                        <FaClock />
                    </div>
                    <div className="stat-details">
                        <h3>Pending Orders</h3>
                        <p className="stat-number">23</p>
                        <p className="stat-growth neutral">Active orders</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon processing">
                        <FaSpinner />
                    </div>
                    <div className="stat-details">
                        <h3>Processing</h3>
                        <p className="stat-number">12</p>
                        <p className="stat-growth neutral">In progress</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon delivered">
                        <FaCheckCircle />
                    </div>
                    <div className="stat-details">
                        <h3>Delivered</h3>
                        <p className="stat-number">121</p>
                        <p className="stat-growth positive">+12.5% from last month</p>
                    </div>
                </div>
            </div>

            {/* Recent Orders Table */}
            <div className="recent-orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-0123</td>
                            <td>iPhone 13 Pro</td>
                            <td>23 Mar 2024</td>
                            <td>$999.00</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-0122</td>
                            <td>MacBook Air</td>
                            <td>22 Mar 2024</td>
                            <td>$1299.00</td>
                            <td><span className="status pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-0121</td>
                            <td>AirPods Pro</td>
                            <td>21 Mar 2024</td>
                            <td>$249.00</td>
                            <td><span className="status processing">Processing</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
