import Image from "next/image";
import Head from "next/head";
import Header from "../componenets/Header";

import styles from "../styles/Contact.module.css";

export default function Contact() {
	return (
		<div>
			<Head>
				<title>G&amp;C - Contact Us</title>
				<meta
					name="description"
					content="Contact page for G&amp;C Excavation services"
				/>
				<meta name="keywords" content="" />{/* TODO add keywords */ }
			</Head>
			<Header title="Contact Us" />
			<div>
				<div>
					<div>
						<div className={styles.addressLine}>
							<h3>Office Address:</h3>
							<a
								href="https://goo.gl/maps/YCCeGN7uhPD3pcgm6"
								target="_blank"
								rel="noReferrer"
								className={styles.address}
							>
								<img
									className={styles.icon}
									src="/images/gmaps.jpg"
									alt="google maps icon"
								/>
								<p>
									<b>
										11082 Jeff Brian Ln
										<br />
										Wilton, CA 95693
									</b>
								</p>
							</a>
						</div>
						<div>
							<h3>
								Phone Number:
								<a
									href="tel:916-366-1111"
									className={styles.contactNumbers}
								>
									<Image
										src={"/images/smartphone-call.png"}
										width={16}
										height={16}
										className={styles.icon}
										alt="phone icon"
									/>
									916-366-1111
								</a>
							</h3>
						</div>
					</div>
					<div>
						<h3>Business Hours:</h3>
						<ul className={styles.hoursList}>
							<li>Monday 7:00AM - 5:00PM</li>
							<li>Tuesday 7:00AM - 5:00PM</li>
							<li>Wednesday 7:00AM - 5:00PM</li>
							<li>Thursday 7:00AM - 5:00PM</li>
							<li>Friday 7:00AM - 5:00PM</li>
							<li>Saturday 8:00AM - 1:00PM</li>
							<li>Sunday 8:00AM - 1:00PM</li>
						</ul>
					</div>
				</div>
				<div>
					<h4>
						You can also use the form below, and we will get back to
						you as soon as possible!
					</h4>
				</div>
			</div>
		</div>
	);
}
//TODO add keywords
