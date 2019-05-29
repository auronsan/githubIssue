export const Truncate = (props) => {
    if(props.text.length > props.maxText) {
        return props.text.substr(0,props.maxText) + ' ....';
    } else {
        return props.text;
    }
}