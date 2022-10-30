import Swal from 'sweetalert2'
import { Navigate, useNavigate} from "react-router-dom"


export default  async function AddToCart(productId) {

		const product = await fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
				headers:{
					"Content-type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then( response => response.json())
			.then( result => {
				return result.success? result.product : false
			});


			fetch(`${process.env.REACT_APP_API_URL}/cart/add/${productId}`, {
				method: 'PATCH',
				headers: {
					"Content-type": "application/json",
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify({
					productId: productId
				})
			})
			.then(response => response.json())
			.then(result => {
				if(result){
					Swal.fire({
						title: "Success",
						icon: "success",
						text: `You have added ${result.name} successfully!`
					})

				}else {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again :("
					})
				}

			})

};
