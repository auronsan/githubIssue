export const Truncate = (props) => {
    if(props.text.length > 255) {
        return props.text.substr(0,255) + ' ....';
    } else {
        return props.text;
    }
}