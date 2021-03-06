import React from 'react'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import Categories from './Categories'
import ProductEdit from '../pages/ProductEdit'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

export default function Dashboard() {
    return (
        <Grid inverted>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Categories />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Route exact path="/" component={ProductList} />
                    <Route exact path="/products" component={ProductList} />
                    <Route exact path="/products/:id" component={ProductDetail} />
                    <Route path="/products/:id/edit" component={ProductEdit} />
                    <Route exact path="/cart" component={CartDetail} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
