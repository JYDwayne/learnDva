import React, { Component } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

class Products extends Component {
	handleDelete(id, dispatch) {
		dispatch({
	      type: 'productsList/delete',
	      payload: id,
	    });
	}
	render() {
		return (
			<div>
	      <h2>List of Products</h2>
	      <ProductList 
	      	onDelete={
	      		(id) => {
	      			return this.handleDelete(id, this.props.dispatch);
	      		} 
	      	} 
	      	products={
	      		this.props.productsList
	      	} 
	      />
	    </div>
		)
	}
}

// export default Products;
export default connect(({ productsList }) => ({
  productsList,
}))(Products);
