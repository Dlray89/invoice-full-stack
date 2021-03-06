import React ,{Component } from 'react'


class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return <React.Fragment />
    }
}

export default ScrollToTop