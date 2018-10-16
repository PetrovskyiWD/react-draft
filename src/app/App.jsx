import React, { Component } from "react"

const TestComponent = () => <p>просто render</p>

class App extends Component {
    state = {
        modal: false,
        submit: true,
    }

    render() {
        return <div>Hello</div>
    }
}

export default App
