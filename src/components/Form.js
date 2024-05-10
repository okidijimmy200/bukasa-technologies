import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Form = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [transId, setTransId] = useState('')
	const [purpose, setPurpose] = useState('')
	const [message, setMessage] = useState('')


	const handleSubmit = async (e) => {
		console.log('form submitting....')
		e.preventDefault();

		if (!name || !email || !message, !phone, !transId, !purpose) {
			setError("Please fill out all fields.");
			return;
		}

		setError("");
		setLoading(true);

		try {
			await emailjs.send(
				"service_eu90l6h",
				"template_unw9yip",
				{
					from_name: name,
					from_email: email,
					to_name: "Mukasa Fred",
					message: message,
					transId: transId,
					email: "okumucomboni@gmail.com",
					reply_to: "okumucomboni@gmail.com",
					purpose: purpose


				},
				"s0b_ZbbfLbUVxlBGP"
			);

			setLoading(false);
			setName("");
			setEmail("");
			setMessage("");
			setPhone("")
			setPurpose("")
			setTransId("")
			toast.success("Thank you. I will get back to you as soon as possible.");
			console.log('...success', purpose, transId)

		} catch (error) {
			setLoading(false);
			console.error(error);
			toast.error("Ahh, something went wrong. Please try again.");
		}
	};
	return (
		<section className='bg-white mb-10 rounded-2xl ' >
			<div className='bg-[#008000] text-white lg:text-2xl text-sm font-bold  rounded-t-2xl lg:p-4 p-2 lg:px-10 px-6'>
				<h1>Bukasa Technologies Training</h1>
				<h1>Microsoft Power BI Data Analyst - PL-30000</h1>
			</div>
			<div className='p-4 mb-4'>
				<div className=' flex flex-col items-center justify-center lg:gap-0 gap-2'>
					<div className='flex items-center justify-between gap-[100px]'>
						<div className=' lg:p-5 lg:text-base text-[12px]'>
							<p>Days</p>
						</div>
						<div className=' lg:p-5 lg:text-base text-[12px]'>
							<p>Time</p>
						</div>
						<div className=' lg:p-5 lg:text-base text-[12px]'>
							<p>Mode of Training</p>
						</div>



					</div>
					<div className='bg-[#5ccb5c] flex rounded-lg w-auto border-[1.5px] border-black lg:text-base text-[12px]'>
						<div className='border-r-[1.5px] border-gray-500 lg:p-4 p-2 '>
							<p>Monday to Friday</p>
							<p>For 2 Months</p>
						</div>
						<div className='border-r-[1.5px] border-gray-500 lg:p-4 p-2'>
							<p>08:00am to 05:00pm</p>
							<p>{" "}</p>
						</div>
						<div className=' lg:p-4 p-2'>
							<p>50% Online</p>
							<p>50% Practicle</p>
						</div>

					</div>

				</div>
			</div>
			<form className='m-4 flex flex-col items-center justify-center gap-4' onSubmit={handleSubmit}>
				<div className="">
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='outline-gray-300 bg-gray-100 p-3 rounded-lg lg:w-[800px] w-[350px] lg:text-base text-sm' />
				</div>
				<div className="">
					<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' className='outline-gray-300 bg-gray-100 p-3 rounded-lg lg:w-[800px] w-[350px] lg:text-base text-sm' />
				</div>
				<div className="">
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-gray-300 bg-gray-100 p-3 rounded-lg lg:w-[800px] w-[350px] lg:text-base text-sm' />
				</div>
				<div className="">
					<input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder='Purpose for training' className='outline-gray-300 bg-gray-100 p-3 rounded-lg lg:w-[800px] w-[350px] lg:text-base text-sm' />
				</div>
				<div className='lg:w-[800px] w-[350px] '>
					Each training cost is $50 (UGX. 190,000), to start training you are required to pay the whole amount or at least 50% of the total cost of traning, Payments should me made on phone number +256 (0) 787 959721. Aer making payments please
					provide the transaction ID for the payment.
					For more information contact us on <span><a href="tel:+256787959721">+256 (0) 787 959721</a></span> or <span><a className='text-green-500' href="mailto:mukasafredo@gmail.com">mukasafredo@gmail.com</a></span>
				</div>
				<div className="">
					<input type="text" value={transId} onChange={(e) => setTransId(e.target.value)} placeholder='Transaction ID' className='outline-gray-300 bg-gray-100 p-3 rounded-lg lg:w-[800px] w-[350px] lg:text-base text-sm' />
				</div>
				<div className='bg-[#008000] lg:p-3 p-2 text-white font-bold rounded-lg lg:text-2xl text-lg lg:w-[200px] w-full flex items-center justify-center mb-4'>
					<button type='submit'>{loading ? 'Processing...' : 'Register'}</button>
				</div>

			</form>
		</section>
	)
}

export default Form