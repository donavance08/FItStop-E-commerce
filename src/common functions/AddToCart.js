import Swal from 'sweetalert2'


export default function AddToCart(productId, name) {
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
					text: `You have added ${name} successfully!`
				})

			}else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again :("
				})
			}

		});
	};
