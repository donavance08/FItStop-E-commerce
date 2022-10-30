import Swal from 'sweetalert2'

export default function Register(event, firstName, lastName, mobileNumber, email, password, store_name, access_type){
	event.preventDefault()

	fetch(`${process.env.REACT_APP_API_URL}/users/check-email`,{
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: email
		})
	})
	.then(response => response.json())
	.then(result =>{
		
		if(result){
			Swal.fire({
				title: 'Oops',
				icon: 'error',
				text: 'Email already in use!'
			})

			return
		}

		if(access_type === "vendor"){


		}

		fetch(`${process.env.REACT_APP_API_URL}/${access_type === "vendor"? "vendor": "users"}/register`,{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				mobileNo: mobileNumber, 
				storeName: store_name,
				email: email,
				password: password
			})
		})
		.then(response => response.json())
		.then(result => {
			if(!result){
				Swal.fire({
					title: 'Oops',
					icon: 'error',
					text: 'Unknow error has occured. Registration failed!'
				})

				return
			}

			Swal.fire({
				title: 'Success',
				icon: 'success',
				text: 'Registration Successsful!'
			})


		})

	})

}