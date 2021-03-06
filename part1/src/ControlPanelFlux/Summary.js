import React, { Component } from 'react'
import SummaryStore from '../stores/SummaryStore'

class Summary extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      summary: SummaryStore.getSummary()
    }
  }
  onChange() {
    const newSummary = SummaryStore.getSummary()
    this.setState({ summary: newSummary })
  }
  componentDidMount() {
    SummaryStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onChange)
  }
  render() {
    return (
      <div>
        Total Counts: {this.state.summary}
      </div>
    )
  }
}

export default Summary