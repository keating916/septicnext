import Head from "next/head";
import React, { Component } from "react";

import images from "../componenets/Images";
import RenderImages from "../componenets/RenderImages";
import Header from "../componenets/Header";

export class Gallery extends Component {
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
					<title>G&amp;C - Gallery</title>
					<meta
						name="description"
						content="Contact page for G&amp;C Excavation Services"
					/>
					<meta name="keywords" content="" />{/* TODO add keywords */ }
				</Head>
				<Header title="Gallery" />
				<h3>Click on an image to enlarge</h3>
				<RenderImages
					images={images.gallery}
					state={this.state}
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default Gallery;
//TODO add keywords
