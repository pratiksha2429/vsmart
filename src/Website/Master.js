import React from 'react'
import Header from './Maincomponent/Header'
import Footer from './Maincomponent/Footer'

const Master = (props) => {
    return (
        <>
            <Header></Header>

            <props.Comp></props.Comp>

            <Footer></Footer>
        </>
    )
}

export default Master;
