import * as React from "react"

class Headline extends React.Component {

  render() {

    const { header, desc } = this.props

    if (!header) {
      return desc
    }

    return (
      <div>
        <h1>{header}</h1>
        <p>
          {desc}
        </p>
      </div>
    )
  }
}

export default Headline