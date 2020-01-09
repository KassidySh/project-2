import React, { Component } from 'react'
import Nav from './header/Nav'
import Footer from './footer/Footer'
import Results from './Results'
import './App.css';
import Hero from './main/display/Hero'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route, Switch, } from 'react-router-dom'





class App extends Component {

    constructor() {
        super()
        this.state = {
            heroName: '',
            id: 0,
            page: 0,
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        }
    }

    //adds one to page for next button
    nextPage = () => {

        this.setState(prevState => ({
            page: prevState.page + 1
        }))
    }
    //subtracts one from page for last page
    lastPage = () => {

        this.setState(prevState => ({
            page: prevState.page - 1
        }))
    }

    setList = (list) => {
        this.setState({ page: 0 })
        this.setState({ list: list })
    }

    setHome = () => {
        this.setState({ page: 0 })
        this.setState({
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        })
    }

    setIdAndName = (id, heroName) => {
        this.setState({ id: id })
        this.setState({ heroName: heroName })
    }

    render() {

        return (
            <div >
                <Nav
                    setHome={this.setHome}
                    setList={this.setList} />

                <main >
                    <Results
                        list={this.state.list}
                        page={this.state.page}
                        setIdAndName={this.setIdAndName}
                    /> </main>

                <Router >
                    <Switch >
                        <Route exact path='/'
                            component={Results}

                        />
                        <Route path='/Hero'
                            component={Hero}
                        />
                    </Switch>
                </Router>

                <Footer
                    page={this.state.page}
                    nextPage={this.nextPage}
                    lastPage={this.lastPage}
                />
            </div>
        )
    }
}

export default App;