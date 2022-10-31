import OrdersAccordion from '../components/OrdersAccordion'
import { useEffect, useState } from 'react'
import { Row, Tab, Tabs } from 'react-bootstrap'


export default function Orders(){
	const [pendingOrders, setPendingOrders] = useState('')
	const [cancelledOrders, setCancelledOrders] = useState('')
	const [deliveredOrders, setDeliveredOrders] = useState('')
	const [completedOrders, setCompletedOrders] = useState('')
	const [archivedOrders, setArchivedOrders] = useState('')
	const [key, setKey]= useState('pending')
	const functions = [
		{
			func: setPendingOrders,
		 	status: "pending"
		}, 
		{
			func: setCancelledOrders,
			status: "cancelled"
		},
		{
			func: setDeliveredOrders,
			status: "delivered"
		},
		{
			func: setCompletedOrders,
			status: "completed"
		},
		{
			func: setArchivedOrders,
			status: "archived"
		}] 

	useEffect(()=> {

		fetch(`${process.env.REACT_APP_API_URL}/orders`, {
			headers: {
				"Content-type": 'applicaion/json',
				Authorization: `Bearer ${localStorage.token}`
			}
		})
		.then(response => response.json())
		.then(result => {

			if(result.success){
				functions.forEach(curr_function => {
					renderOrders(curr_function.func, curr_function.status, result.orders)
				})
			}

		})
	})

	function renderOrders(func, status, arr){
		const filtered_by_status = arr.filter(array_mem => {
				return array_mem.status === status
			})

		func(<OrdersAccordion key={status} orders={filtered_by_status}></OrdersAccordion>)
	}


	return (
		<Row className="mt-3 mx-0">
			<h1 classsName="pageTitle">Orders</h1>
			<Tabs  className="orderTabs"
			  id="orderTab"
			  defaultActiveKey={key}
			  onSelect={(selected_key) => setKey(selected_key)}
			  className="mb-3"
	
			>
			  <Tab eventKey="pending" title="Pending">
			    {pendingOrders}
			  </Tab>
			  <Tab eventKey="cancelled" title="Cancelled">
			    {cancelledOrders}
			  </Tab>
			  <Tab eventKey="delivered" title="Delivered">
			    {deliveredOrders}
			  </Tab>
			  <Tab eventKey="completed" title="Completed">
			    {completedOrders}
			  </Tab>
			  <Tab eventKey="archived" title="Archived">
			    {archivedOrders}
			  </Tab>
			</Tabs>
		</Row>

	  );
}