import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        <div className="button-container">
            <button>
                +1
            </button>
            <button>
                -1
            </button>
        </div>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 10,
}
