import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../componenets/Header";
import RenderImages from "../componenets/RenderImages";
import images from "../componenets/Images";
import { render } from "react-dom";
import { Component } from "react";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		let target;
		if (evt.target.childNodes.length > 1) {
			target = evt.target.lastChild.alt;
		} else if (evt.target.localName === "h4") {
			target = evt.target.nextSibling.alt;
		} else {
			target = evt.target.alt;
		}
		let status = this.state[target];
		this.setState({
			...this.state,
			[target]: !status
		});
	}

	render() {
		return (
			<div>
				<Head>
					<title>G&amp;C - Home</title>
					<meta
						name="description"
						content="Home page for G&amp;C Excavation Services"
					/>
					<meta name="keywords" content="" />{/* TODO add keywords */ }
				</Head>
				<Header title="G&amp;C Septic Installation Services" />
				<div>
					<div>
						<p>
							<b>We have the experience you need</b>, and have
							been in the business over 50 years, serving the
							southern Sacramento valley from South Sac to
							Stockton
						</p>
						<p>
							Our services include, but are definitely not limited
							to:
						</p>
						<div className={styles.smallServicesContainer}>
							<ul className={styles.serviceList}>
								<li>Septic Tank Installation</li>
								<li>Dry Well Excavation</li>
								<li>Leach Field Installation</li>
								<li>Septic System Replacement</li>
								<li>Septic Excavation</li>
								<li>Drainage Field repair</li>
							</ul>
						</div>
						<p>
							We konw how to install, repair and replace your
							septic system, and have the equipment to get the job
							done right. There are many things that can go wrong,
							but we can take care of them quickly at a
							competitive cost.
						</p>
						<p>
							Remember, once the leach field is clogged, cleaning
							the tank will do little good – you will need a new
							leach field. The easiest way to care for your system
							is to consult a professional. We are experienced in
							locating, uncovering, and maintaining Sacramento
							area septic systems. How often your tank needs
							pumping will depend on the size of the tank, the
							number of people in the household, and the kinds of
							appliances you use.
						</p>
					</div>
				</div>
				<RenderImages
					images={images.home}
					state={this.state}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}
