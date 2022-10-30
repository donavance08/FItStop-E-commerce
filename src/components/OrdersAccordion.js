import AccordionItem from './AccordionItem'
import { Accordion } from 'react-bootstrap' 
import { useEffect, useState } from 'react'

export default function OrdersAccordion({orders}) {
	const [accordionItems, setAccordionItems] = useState('')

	useEffect(() => {
		setAccordionItems(orders.map(order => {
				return <AccordionItem key={order.orderId} order={order}></AccordionItem>
			})	
		)



	},[])

  return (
    <Accordion className="accordion">
    	{accordionItems}
    </Accordion>
  );
}
