import { Layout } from "antd";
import React from "react";
import Recipes from "./Recipes/Recipes";

const { Content } = Layout;

export default () => (
	<Layout className="layout">
		<Content style={{ padding: "0 50px" }}>
			<div className="site-layout-content" style={{ margin: "100px auto" }}>
				<h1>Recipe's Catalog</h1>
				<Recipes />
			</div>
		</Content>
	</Layout>
);
