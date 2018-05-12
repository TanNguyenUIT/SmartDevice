import lifecycle from 'recompose/lifecycle';

export default function doOnMount(callback) {
  return lifecycle({
    componentDidMount() {
      callback(this.props);
    },
  });
}
