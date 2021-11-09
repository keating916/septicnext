import Topnav from "../componenets/Topnav";
import ContactForm from "../componenets/ContactForm";
import Footer from "../componenets/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Topnav />
			<div className="body" name="main contents">
				<Component {...pageProps} />
			</div>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default MyApp;
