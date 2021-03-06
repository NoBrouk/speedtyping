import { Button, makeStyles } from "@material-ui/core"
import PropTypes from 'prop-types'
import TypingText from "./TypingText"
import Statistics from './Statistics'

const useStyles = makeStyles(() => ({
  root: {
    width: '850px',
    margin: '0 auto',
    marginTop: '65px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
    alignItems: 'flex-end'
  },
}))

const TypingTest = ({ startTest }) => {

  const classes = useStyles()

  return (

    <div className={classes.root}>

      <Statistics />

      <TypingText />

      <Button variant="outlined" color="secondary" onClick={startTest}>Заново</Button>

    </div>
  )
}

TypingTest.propTypes = {
  startTest: PropTypes.func.isRequired
}

export default TypingTest
