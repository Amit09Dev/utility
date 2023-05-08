import PropTypes from 'prop-types'

export default function Alert(props) {
    // const capitalize = (word)=>{
    //     let lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} fade show`} role="alert">
      {props.alert.msg}
      </div>
    </div>
  );
}

Alert.propTypes={
    alert : PropTypes.string,
    msg : PropTypes.string,
}
