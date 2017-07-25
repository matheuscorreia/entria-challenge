import React from 'react'

const Loading = (props) => {

  const styles = {
    container: {
      position: 'absolute',
      top: 'calc(50% - 32px)',
      left: 'calc(50% - 32px)',
    }
  }

  return (
    <div style={styles.container}>
      <img src="images/loading.svg" alt="Loading..."/>
    </div>
  )
}

export default Loading
